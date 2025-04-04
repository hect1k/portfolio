import * as tf from '@tensorflow/tfjs'; // Pure JS backend
import * as use from '@tensorflow-models/universal-sentence-encoder';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BLOG_DIR = path.join(__dirname, 'src/content/blog/');
const OUTPUT_PATH = path.join(__dirname, 'src/recommendations.json');

// --- Load blog posts with metadata ---
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

// --- Cosine similarity between vectors ---
const cosineSimilarity = (vecA, vecB) => {
  const dot = tf.tidy(() => tf.sum(tf.mul(vecA, vecB)).dataSync()[0]);
  const normA = tf.norm(vecA).dataSync()[0];
  const normB = tf.norm(vecB).dataSync()[0];
  return normA && normB ? dot / (normA * normB) : 0;
};

// --- Jaccard similarity between tag arrays ---
const tagSimilarity = (tagsA, tagsB) => {
  const setA = new Set(tagsA);
  const setB = new Set(tagsB);
  const intersection = [...setA].filter(tag => setB.has(tag)).length;
  const union = new Set([...tagsA, ...tagsB]).size;
  return union === 0 ? 0 : intersection / union;
};

// --- Date proximity (inverse days difference) ---
const dateProximity = (dateA, dateB) => {
  const diffDays = Math.abs((dateA - dateB) / (1000 * 60 * 60 * 24));
  return 1 / (1 + diffDays); // more recent = closer to 1
};

// --- Main recommendation generator ---
const generateRecommendations = async ({ verbose = false } = {}) => {
  const log = (...args) => verbose && console.log(...args);

  const posts = getAllPosts();
  log(`📄 Loaded ${posts.length} posts`);

  const model = await use.load();
  log(`🧠 USE model loaded`);

  const embeddings = await model.embed(posts.map(p => p.text));
  const vectors = embeddings.unstack();

  const recommendations = posts.map((post, i) => {
    log(`\n🔍 ${post.slug}`);
    const scores = posts.map((other, j) => {
      if (i === j) return { slug: other.slug, score: -1 };

      const contentSim = cosineSimilarity(vectors[i], vectors[j]);
      const tagSim = tagSimilarity(post.tags, other.tags);
      const recency = dateProximity(post.pubDate, other.pubDate);

      const score = (
        0.6 * contentSim +
        0.3 * tagSim +
        0.1 * recency
      );

      log(`  ↔ ${other.slug}: content=${contentSim.toFixed(2)} tags=${tagSim.toFixed(2)} date=${recency.toFixed(2)} → score=${score.toFixed(4)}`);
      return { slug: other.slug, score };
    });

    const top = scores
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
      .map(s => s.slug);

    log(`  ✅ Top 5: ${top.join(', ')}`);
    return { slug: post.slug, recommendations: top };
  });

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(recommendations, null, 2));
  console.log(`\n✅ Recommendations saved to ${OUTPUT_PATH}`);
};

// --- CLI support ---
const isVerbose = process.argv.includes('--verbose');
generateRecommendations({ verbose: isVerbose });
