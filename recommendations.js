import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import natural from 'natural';

// Path to the blog files
const BLOG_DIR = './src/content/blog/';

// List of common stopwords to ignore during text similarity calculations
const STOPWORDS = new Set([
  'the', 'and', 'a', 'to', 'of', 'in', 'is', 'it', 'on', 'for', 'with',
  'this', 'that', 'an', 'as', 'are', 'by', 'at', 'or', 'from', 'was', 'be',
  'has', 'but', 'not', 'if', 'your', 'you', 'we', 'can', 'all', 'will', 'one',
  'their', 'they', 'my', 'our', 'us', 'when', 'about', 'what', 'so', 'which',
  'these', 'them', 'into', 'some', 'more', 'any', 'also', 'just', 'like',
  'up', 'out', 'only', 'how', 'its', 'because', 'here', 'there', 'whether',
  're', 'into', 'each', 'different', 'keep', 'path', 'when', 'other',
  'every', 'their', 'those', 'ready', 'existing', 'always', 'find', 'just', 'll',

  // Special characters and numbers
  'https', 'com', 's', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
]);

// Function to tokenize and filter out stopwords and short words
const tokenizeAndFilter = (text) => {
  const tokenizer = new natural.WordTokenizer();
  return tokenizer.tokenize(text.toLowerCase()).filter((word) => !STOPWORDS.has(word) && word.length > 2);
};

// Function to read all blog posts (not draft posts)
const getAllPosts = () => {
  const files = fs.readdirSync(BLOG_DIR);
  const posts = files.map((file) => {
    const filePath = path.join(BLOG_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data, content: mainContent } = matter(content);
    if (data.draft === true) return null;
    return {
      ...data,
      slug: file.replace('.md', ''),
      mainContent,
      pubDate: new Date(data.pubDate)
    };
  });

  return posts.filter((post) => post !== null);
};

// Function to calculate similarity between two posts
const calculateSimilarity = (postA, postB) => {
  console.log(`Finding similarity between ${postA.title} and ${postB.title}`);

  // Calculate tag overlap
  const tagsA = postA.tags.split(', ');
  const tagsB = postB.tags.split(', ');
  const commonTags = tagsA.filter((tag) => tagsB.includes(tag));
  console.log(`Common tags: ${commonTags}`);

  // Calculate description similarity
  const descWordsA = tokenizeAndFilter(postA.description);
  const descWordsB = tokenizeAndFilter(postB.description);
  const commonDescWords = descWordsA.filter((word) => descWordsB.includes(word));
  console.log(`Common description words: ${commonDescWords}`);

  // Calculate content similarity
  const contentWordsA = tokenizeAndFilter(postA.mainContent);
  const contentWordsB = tokenizeAndFilter(postB.mainContent);
  const commonContentWords = contentWordsA.filter((word) => contentWordsB.includes(word));
  console.log(`Common content words: ${commonContentWords}`);

  // Calculate recency similarity
  const daysDiff = Math.abs((postA.pubDate - postB.pubDate) / (1000 * 60 * 60 * 24));
  const recencyScore = 1 / (1 + daysDiff); // Closer dates get a higher score
  console.log(`Recency score: ${recencyScore}`);

  // Weighted score: tags are most important, followed by content, description, and recency
  const score = commonTags.length * 5 + commonDescWords.length * 2.5 + commonContentWords.length * 2 + 0.5 * recencyScore;
  console.log(`Weighted score: ${score}`);

  console.log('\n\n');

  return score;
};

// Function to generate recommendations for all posts
const generateRecommendations = (posts) => {
  return posts.map((post) => {
    const scores = posts
      .filter((otherPost) => otherPost.slug !== post.slug) // Exclude the current post
      .map((otherPost) => ({
        slug: otherPost.slug,
        score: calculateSimilarity(post, otherPost),
      }))
      .sort((a, b) => b.score - a.score) // Sort by score in descending order
      .slice(0, 5); // Select the top 5 recommendations

    const recommendations = scores.map((rec) => rec.slug);
    return { slug: post.slug, recommendations };
  });
};

// Main process
const posts = getAllPosts();
const recommendations = generateRecommendations(posts);
const outputPath = './src/recommendations.json';
fs.writeFileSync(outputPath, JSON.stringify(recommendations, null, 2));

console.log('Recommendations generated and saved to:', outputPath);
