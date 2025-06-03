<?php
require_once 'config.php';

// Get blog posts from database
$sql = "SELECT * FROM blog_posts WHERE status = 'published' ORDER BY created_at DESC";
$result = $db->query($sql);
$blogPosts = [];

while ($row = $result->fetch_assoc()) {
    $blogPosts[] = $row;
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portofolio - Blog</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js"></script>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="blog.php">Blog</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <section>
        <h1 class="section-title">Get to know me!</h1>
    </section>
    
    <?php if (empty($blogPosts)): ?>
        <section>
            <div class="no-content">
                <h2>No blog posts available</h2>
                <p>Check back later for new content!</p>
            </div>
        </section>
    <?php else: ?>
        <?php foreach ($blogPosts as $post): ?>
            <section>
                <article data-post-id="<?php echo $post['id']; ?>">
                    <div class="post-meta">
                        <span class="post-date">📅 <?php echo formatDate($post['created_at']); ?></span>
                        <span class="post-time-ago"><?php echo timeAgo($post['created_at']); ?></span>
                    </div>
                    <h2><?php echo htmlspecialchars($post['title']); ?></h2>
                    <div class="post-content">
                        <?php 
                        // Convert line breaks to paragraphs
                        $content = htmlspecialchars($post['content']);
                        $content = nl2br($content);
                        echo $content;
                        ?>
                    </div>
                    <?php if (!empty($post['updated_at']) && $post['updated_at'] != $post['created_at']): ?>
                        <div class="post-updated">
                            <small>Last updated: <?php echo timeAgo($post['updated_at']); ?></small>
                        </div>
                    <?php endif; ?>
                </article>
            </section>
        <?php endforeach; ?>
    <?php endif; ?>
    
    <!-- Blog Statistics -->
    <section>
        <div class="blog-stats">
            <h3>📊 Blog Statistics</h3>
            <div class="stats-grid">
                <div class="stat-item">
                    <span class="stat-number"><?php echo count($blogPosts); ?></span>
                    <span class="stat-label">Total Posts</span>
                </div>
                <div class="stat-item">
                    <?php
                    $totalWords = 0;
                    foreach ($blogPosts as $post) {
                        $totalWords += str_word_count(strip_tags($post['content']));
                    }
                    ?>
                    <span class="stat-number"><?php echo number_format($totalWords); ?></span>
                    <span class="stat-label">Total Words</span>
                </div>
                <div class="stat-item">
                    <?php
                    $avgReadTime = count($blogPosts) > 0 ? ceil($totalWords / count($blogPosts) / 200) : 0;
                    ?>
                    <span class="stat-number"><?php echo $avgReadTime; ?> min</span>
                    <span class="stat-label">Avg Read Time</span>
                </div>
            </div>
        </div>
    </section>

    <script>
        // Add reading time to each post
        document.addEventListener('DOMContentLoaded', function() {
            const articles = document.querySelectorAll('article[data-post-id]');
            articles.forEach(article => {
                const content = article.querySelector('.post-content');
                if (content) {
                    const text = content.textContent || content.innerText;
                    const wordCount = text.trim().split(/\s+/).length;
                    const readingTime = Math.ceil(wordCount / 200);
                    
                    const readingTimeElement = document.createElement('div');
                    readingTimeElement.className = 'reading-time';
                    readingTimeElement.innerHTML = `📖 ${readingTime} min read`;
                    
                    const postMeta = article.querySelector('.post-meta');
                    if (postMeta) {
                        postMeta.appendChild(readingTimeElement);
                    }
                }
            });
        });
    </script>
</body>
</html>