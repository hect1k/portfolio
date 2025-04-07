import * as tf from '@tensorflow/tfjs';
import * as use from '@tensorflow-models/universal-sentence-encoder';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { ChartJSNodeCanvas } from 'chartjs-node-canvas';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BLOG_DIR = path.join(__dirname, 'src/content/blog/');
const OUTPUT_PATH = path.join(__dirname, 'src/recommendations.json');
const CHARTS_DIR = path.join(__dirname, 'charts');

if (!fs.existsSync(CHARTS_DIR)) fs.mkdirSync(CHARTS_DIR);

// Chart helper
const width = 800;
const height = 400;
const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height });

const saveBarChart = async (slug, scores, metricName, color) => {
  const config = {
    type: 'bar',
    data: {
      labels: scores.map(s => s.slug),
      datasets: [{
        label: `${metricName} for "${slug}"`,
        data: scores.map(s => s.value),
        backgroundColor: color,
        borderColor: color.replace('0.6', '1'),
        borderWidth: 1,
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true, max: 1 }
      },
      plugins: {
        title: {
          display: true,
          text: `${metricName} for "${slug}"`,
          font: { size: 20 }
        }
      }
    }
  };

  const buffer = await chartJSNodeCanvas.renderToBuffer(config);
  const safeMetric = metricName.toLowerCase().replace(/\s+/g, '_');
  fs.writeFileSync(path.join(CHARTS_DIR, `${slug}_${safeMetric}.png`), buffer);
};

// Blog loader
const getAllPosts = () => {
  const files = fs.readdirSync(BLOG_DIR);
  return files
    .filter((file) => path.extname(file) === '.md')
    .map((file) => {
      const filePath = path.join(BLOG_DIR, file);
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(raw);
      if (data.draft) return null;

      return {
        slug: file.replace('.md', ''),
        title: data.title,
        tags: (data.tags || '').split(',').map(t => t.trim().toLowerCase()),
        pubDate: new Date(data.pubDate),
        text: `${data.title || ''} ${data.description || ''} ${content || ''}`,
      };
    })
    .filter(Boolean);
};

// Similarity calculations
const cosineSimilarity = (vecA, vecB) => {
  const dot = tf.tidy(() => tf.sum(tf.mul(vecA, vecB)).dataSync()[0]);
  const normA = tf.norm(vecA).dataSync()[0];
  const normB = tf.norm(vecB).dataSync()[0];
  return normA && normB ? dot / (normA * normB) : 0;
};

const tagSimilarity = (tagsA, tagsB) => {
  const setA = new Set(tagsA);
  const setB = new Set(tagsB);
  const intersection = [...setA].filter(tag => setB.has(tag)).length;
  const union = new Set([...tagsA, ...tagsB]).size;
  return union === 0 ? 0 : intersection / union;
};

const dateProximity = (dateA, dateB) => {
  const diffDays = Math.abs((dateA - dateB) / (1000 * 60 * 60 * 24));
  return 1 / (1 + diffDays);
};

// Main recommendation generator
const generateRecommendations = async ({ verbose = false } = {}) => {
  const log = (...args) => verbose && console.log(...args);

  const posts = getAllPosts();
  log(`📄 Loaded ${posts.length} posts`);

  const model = await use.load();
  log(`🧠 USE model loaded`);

  const embeddings = await model.embed(posts.map(p => p.text));
  const vectors = embeddings.unstack();

  const recommendations = [];

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    log(`\n🔍 ${post.slug}`);

    const scores = [];
    const cosineScores = [];
    const tagScores = [];
    const dateScores = [];

    for (let j = 0; j < posts.length; j++) {
      if (i === j) continue;

      const other = posts[j];
      const contentSim = cosineSimilarity(vectors[i], vectors[j]);
      const tagSim = tagSimilarity(post.tags, other.tags);
      const recency = dateProximity(post.pubDate, other.pubDate);

      const score = (
        0.6 * contentSim +
        0.3 * tagSim +
        0.1 * recency
      );

      scores.push({ slug: other.slug, score });
      cosineScores.push({ slug: other.slug, value: contentSim });
      tagScores.push({ slug: other.slug, value: tagSim });
      dateScores.push({ slug: other.slug, value: recency });

      log(`  ↔ ${other.slug}: content=${contentSim.toFixed(2)} tags=${tagSim.toFixed(2)} date=${recency.toFixed(2)} → score=${score.toFixed(4)}`);
    }

    // Generate charts for each similarity type
    if (verbose) {
      await saveBarChart(post.slug, cosineScores, 'Cosine Similarity', 'rgba(54, 162, 235, 0.6)');
      await saveBarChart(post.slug, tagScores, 'Tag Similarity', 'rgba(255, 206, 86, 0.6)');
      await saveBarChart(post.slug, dateScores, 'Date Proximity', 'rgba(75, 192, 192, 0.6)');
    }

    const top = scores
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);

    // Save final recommendation chart
    if (verbose) {
      await saveBarChart(post.slug, top.map(t => ({ slug: t.slug, value: t.score })), 'Top Recommendations', 'rgba(153, 102, 255, 0.6)');
    }

    log(`  ✅ Top 5: ${top.map(t => t.slug).join(', ')}`);
    recommendations.push({ slug: post.slug, recommendations: top.map(t => t.slug) });
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(recommendations, null, 2));
  console.log(`\n✅ Recommendations saved to ${OUTPUT_PATH}`);
  if (verbose) {
    console.log(`📊 Charts saved to ${CHARTS_DIR}/`);
  }
};

// CLI support
const isVerbose = process.argv.includes('--verbose');
generateRecommendations({ verbose: isVerbose });
