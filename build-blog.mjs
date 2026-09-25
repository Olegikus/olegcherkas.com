import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)));
const siteUrl = 'https://olegcherkas.com';
const dataPath = path.join(root, 'data', 'posts.json');
const blogPath = path.join(root, 'blog.html');
const articleTemplatePath = path.join(root, 'blog-post.html');
const insightsDir = path.join(root, 'insights');

const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const posts = (data.posts || [])
  .filter((post) => post && post.title && post.slug)
  .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  })[character]);
}

function safeJson(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

function absoluteUrl(value = '') {
  if (!value) return '';
  if (/^https?:\/\//i.test(value)) return encodeURI(value);
  return encodeURI(`${siteUrl}/${String(value).replace(/^\//, '')}`);
}

function cleanText(value = '', maxLength = 0) {
  const text = String(value).replace(/\s+/g, ' ').trim();
  if (!maxLength || text.length <= maxLength) return text;
  return `${text.slice(0, Math.max(0, maxLength - 1)).trimEnd()}…`;
}

function articleUrl(slug) {
  return `${siteUrl}/insights/${encodeURIComponent(slug)}/`;
}

function localArticleUrl(slug) {
  return `/insights/${encodeURIComponent(slug)}/`;
}

function formatDate(value) {
  if (!value) return '';
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

function safeHref(value = '') {
  const href = String(value).trim();
  if (/^(https?:\/\/|\/|#)/i.test(href)) return href;
  return '#';
}

function inlineMarkdown(value = '') {
  let output = escapeHtml(value);
  output = output.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, source) => {
    const image = safeHref(source);
    return image === '#'
      ? escapeHtml(alt)
      : `<img src="${escapeHtml(image)}" alt="${escapeHtml(alt)}" loading="lazy">`;
  });
  output = output.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    const link = safeHref(href);
    return `<a href="${escapeHtml(link)}">${label}</a>`;
  });
  output = output.replace(/\*\*\*([^*]+)\*\*\*/g, '<strong><em>$1</em></strong>');
  output = output.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  output = output.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>');
  output = output.replace(/`([^`]+)`/g, '<code>$1</code>');
  return output;
}

function markdownToHtml(markdown = '') {
  const lines = String(markdown).replace(/\r\n?/g, '\n').split('\n');
  const output = [];
  let paragraph = [];
  let listType = '';

  const closeParagraph = () => {
    if (!paragraph.length) return;
    output.push(`<p>${inlineMarkdown(paragraph.join(' '))}</p>`);
    paragraph = [];
  };

  const closeList = () => {
    if (!listType) return;
    output.push(`</${listType}>`);
    listType = '';
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      closeParagraph();
      closeList();
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      closeParagraph();
      closeList();
      const level = Math.min(heading[1].length, 6);
      output.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      continue;
    }

    const orderedItem = line.match(/^\d+\.\s+(.+)$/);
    const unorderedItem = line.match(/^[-*]\s+(.+)$/);
    if (orderedItem || unorderedItem) {
      closeParagraph();
      const nextListType = orderedItem ? 'ol' : 'ul';
      if (listType !== nextListType) {
        closeList();
        listType = nextListType;
        output.push(`<${listType}>`);
      }
      output.push(`<li>${inlineMarkdown((orderedItem || unorderedItem)[1])}</li>`);
      continue;
    }

    const quote = line.match(/^>\s?(.+)$/);
    if (quote) {
      closeParagraph();
      closeList();
      output.push(`<blockquote><p>${inlineMarkdown(quote[1])}</p></blockquote>`);
      continue;
    }

    closeList();
    paragraph.push(line);
  }

  closeParagraph();
  closeList();
  return output.join('\n');
}

function blogSeo(pageNum = 1, totalPages = 1) {
  const suffix = pageNum > 1 ? ` - Page ${pageNum}` : '';
  const title = `B2B LinkedIn Growth Insights - Oleg Cherkas${suffix}`;
  const description = 'Practical articles on LinkedIn growth, B2B outreach, founder content and sales systems for service firms.';
  const canonicalPath = pageNum > 1 ? `/blog-${pageNum}` : '/blog';
  const prevLink = pageNum > 1 ? `<link rel="prev" href="${siteUrl}${pageNum === 2 ? '/blog' : `/blog-${pageNum - 1}`}">\n` : '';
  const nextLink = pageNum < totalPages ? `<link rel="next" href="${siteUrl}/blog-${pageNum + 1}">\n` : '';
  return `<!-- BLOG_SEO_START -->
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="canonical" href="${siteUrl}${canonicalPath}">
${prevLink}${nextLink}<meta property="og:type" content="website">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${siteUrl}${canonicalPath}">
<meta property="og:site_name" content="Oleg Cherkas">
<meta name="twitter:card" content="summary_large_image">
<meta property="og:image" content="${siteUrl}/uploads/oleg-cherkas-social-preview.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:image" content="${siteUrl}/uploads/oleg-cherkas-social-preview.jpg">
<link rel="alternate" type="application/rss+xml" title="Oleg Cherkas Insights" href="${siteUrl}/feed.xml">
<!-- BLOG_SEO_END -->`;
}

const BLOG_PAGE_SIZE = 12;

function blogTotalPagesCount() {
  if (posts.length <= BLOG_PAGE_SIZE) return 1;
  return 1 + Math.ceil((posts.length - BLOG_PAGE_SIZE) / BLOG_PAGE_SIZE);
}

function blogPageUrl(pageNum) {
  return pageNum <= 1 ? 'blog.html' : `blog-${pageNum}.html`;
}

function renderPagination(pageNum, totalPages) {
  if (totalPages <= 1) return '';
  const prev = pageNum > 1 ? `<a class="page-link prev" href="${blogPageUrl(pageNum - 1)}">← Previous</a>` : '';
  const next = pageNum < totalPages ? `<a class="page-link next" href="${blogPageUrl(pageNum + 1)}">Next →</a>` : '';
  return `
<nav class="blog-pagination" aria-label="Blog pagination">${prev}<span class="page-current">Page ${pageNum} of ${totalPages}</span>${next}</nav>`;
}

function renderBlogPosts(pageNum, totalPages) {
  if (!posts.length) {
    return '<section class="blog-list"><div class="blog-empty">No posts yet.</div></section>';
  }

  const isFirstPage = pageNum === 1;
  const featured = isFirstPage ? posts[0] : null;
  const gridPosts = isFirstPage
    ? posts.slice(1, BLOG_PAGE_SIZE)
    : posts.slice(BLOG_PAGE_SIZE + (pageNum - 2) * BLOG_PAGE_SIZE, BLOG_PAGE_SIZE + (pageNum - 1) * BLOG_PAGE_SIZE);

  const featuredBlock = featured ? (() => {
    const featuredImage = featured.image
      ? ` style="background:linear-gradient(135deg,rgba(10,10,10,.12),rgba(10,10,10,.72)),url('${escapeHtml(encodeURI(featured.image))}') center/cover"`
      : '';
    return `
<a class="featured-post" href="${localArticleUrl(featured.slug)}">
  <div class="featured-visual"${featuredImage}></div>
  <div class="featured-content">
    <div class="blog-tag">${escapeHtml(featured.category || 'LinkedIn growth')}</div>
    <div class="blog-meta"><time datetime="${escapeHtml(featured.date || '')}">${escapeHtml(formatDate(featured.date))}</time> · ${escapeHtml(featured.author || 'Oleg Cherkas')}</div>
    <h2>${escapeHtml(featured.title)}</h2>
    <p>${escapeHtml(cleanText(featured.excerpt || '', 360))}</p>
    <span class="blog-arrow">Read article →</span>
  </div>
</a>`;
  })() : '';

  const cards = gridPosts.map((post) => {
    const cardImage = post.image
      ? `<div class="post-card-visual" style="background-image:url('${escapeHtml(encodeURI(post.image))}')"></div>`
      : '';
    return `
<a class="post-card" href="${localArticleUrl(post.slug)}">
  ${cardImage}
  <div class="post-card-content">
    <div class="blog-tag">${escapeHtml(post.category || 'LinkedIn growth')}</div>
    <div class="blog-meta"><time datetime="${escapeHtml(post.date || '')}">${escapeHtml(formatDate(post.date))}</time></div>
    <h3>${escapeHtml(post.title)}</h3>
    <p>${escapeHtml(cleanText(post.excerpt || '', 260))}</p>
    <span class="blog-arrow">Read article →</span>
  </div>
</a>`;
  }).join('');

  return `<section class="blog-list"><!-- BLOG_POSTS_START -->${featuredBlock}
<div class="posts-grid">${cards}
</div>${renderPagination(pageNum, totalPages)}
<!-- BLOG_POSTS_END --></section>`;
}

function buildBlogIndex() {
  const template = fs.readFileSync(blogPath, 'utf8');
  const totalPages = blogTotalPagesCount();

  for (let pageNum = 1; pageNum <= totalPages; pageNum += 1) {
    let html = template;
    const seo = blogSeo(pageNum, totalPages);
    if (html.includes('<!-- BLOG_SEO_START -->')) {
      html = html.replace(/<!-- BLOG_SEO_START -->[\s\S]*?<!-- BLOG_SEO_END -->/, seo);
    } else {
      html = html.replace(/<title>Blog - Oleg Cherkas<\/title><meta name="description"[^>]*>/, seo);
    }

    html = html.replace(
      /<section class="blog-list">[\s\S]*?<\/section><section class="cta-strip">/,
      `${renderBlogPosts(pageNum, totalPages)}<section class="cta-strip">`,
    );
    html = html.replace(/<script>\s*function escapeHtml\(str\)[\s\S]*?loadPosts\(\);\s*<\/script>\s*/, '');
    html = html.replace(/<script src="https:\/\/identity\.netlify\.com\/v1\/netlify-identity-widget\.js"><\/script>\s*<script>if\(window\.netlifyIdentity\)[\s\S]*?<\/script>/, '');
    fs.writeFileSync(path.join(root, blogPageUrl(pageNum)), html);
  }
}

function makeRootRelativeLinks(html) {
  const replacements = new Map([
    ['href="index.html#about"', 'href="/#about"'],
    ['href="index.html#results"', 'href="/#results"'],
    ['href="index.html"', 'href="/"'],
    ['href="services.html"', 'href="/services.html"'],
    ['href="b2b-lead-generation-service.html"', 'href="/b2b-lead-generation-service.html"'],
    ['href="service-monthly-linkedin-outreach-management.html"', 'href="/service-monthly-linkedin-outreach-management.html"'],
    ['href="service-lead-generation.html"', 'href="/service-lead-generation.html"'],
    ['href="service-profile-optimization.html"', 'href="/service-profile-optimization.html"'],
    ['href="service-linkedin-content-for-founders.html"', 'href="/service-linkedin-content-for-founders.html"'],
    ['href="blog.html"', 'href="/blog.html"'],
    ['href="contact.html"', 'href="/contact.html"'],
    ['href="favicon.ico"', 'href="/favicon.ico"'],
    ['href="favicon-32x32.png"', 'href="/favicon-32x32.png"'],
    ['href="favicon-16x16.png"', 'href="/favicon-16x16.png"'],
    ['href="apple-touch-icon.png"', 'href="/apple-touch-icon.png"'],
    ['href="site.webmanifest"', 'href="/site.webmanifest"'],
  ]);
  for (const [from, to] of replacements) html = html.split(from).join(to);
  return html;
}

function articleSeo(post) {
  const title = `${post.title} - Oleg Cherkas`;
  const description = cleanText(post.excerpt || post.title, 160);
  const url = articleUrl(post.slug);
  const image = absoluteUrl(post.image);
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: { '@type': 'Person', name: post.author || 'Oleg Cherkas', url: siteUrl },
    publisher: { '@type': 'Person', name: 'Oleg Cherkas', url: siteUrl },
    mainEntityOfPage: url,
    ...(image ? { image } : {}),
  };

  return `<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="article">
<meta property="og:title" content="${escapeHtml(post.title)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:url" content="${url}">
<meta property="og:site_name" content="Oleg Cherkas">
${image ? `<meta property="og:image" content="${escapeHtml(image)}">` : ''}
<meta property="article:published_time" content="${escapeHtml(post.date || '')}">
<meta property="article:author" content="${escapeHtml(post.author || 'Oleg Cherkas')}">
<meta name="twitter:card" content="summary_large_image">
<script type="application/ld+json">${safeJson(structuredData)}</script>`;
}

function renderArticle(post, template) {
  let html = makeRootRelativeLinks(template);
  html = html.replace('<meta name="robots" content="noindex,follow">\n', '');
  html = html.replace(
    /<title>Article - Oleg Cherkas<\/title><meta name="description"[^>]*>/,
    articleSeo(post),
  );

  const image = post.image
    ? `<div class="article-visual has-image" style="background:linear-gradient(135deg,rgba(10,10,10,.10),rgba(10,10,10,.72)),url('${escapeHtml(encodeURI(post.image))}') center/contain no-repeat #0a0a0a" role="img" aria-label="${escapeHtml(post.title)}"></div>`
    : '';
  const article = `<section class="article-hero"><div class="mini-hero-bg" aria-hidden="true">
    <span class="glow-blob mgb1"></span>
    <span class="glow-blob mgb2"></span>
  </div><div class="mini-hero-fg"><div class="breadcrumb"><a href="/blog">Blog</a><span>→</span><span>${escapeHtml(post.title)}</span></div><div class="eyebrow">${escapeHtml(post.category || 'LinkedIn growth')}</div><h1>${escapeHtml(post.title)}</h1><div class="article-meta"><time datetime="${escapeHtml(post.date || '')}">${escapeHtml(formatDate(post.date))}</time> · ${escapeHtml(post.author || 'Oleg Cherkas')}</div></div></section>${image}<article class="article-wrap">${markdownToHtml(post.body || '')}</article><section class="cta-strip">`;

  html = html.replace(
    /<section class="article-hero">[\s\S]*?<\/article><section class="cta-strip">/,
    article,
  );
  html = html.replace(/<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/marked\/marked\.min\.js"><\/script>\s*<script>\s*function formatDate[\s\S]*?loadArticle\(\);\s*<\/script>\s*/, '');
  html = html.replace(/<script src="https:\/\/identity\.netlify\.com\/v1\/netlify-identity-widget\.js"><\/script>\s*<script>if\(window\.netlifyIdentity\)[\s\S]*?<\/script>/, '');
  return html;
}

function buildArticles() {
  const template = fs.readFileSync(articleTemplatePath, 'utf8');
  fs.mkdirSync(insightsDir, { recursive: true });
  for (const post of posts) {
    const articleDir = path.join(insightsDir, post.slug);
    fs.mkdirSync(articleDir, { recursive: true });
    fs.writeFileSync(path.join(articleDir, 'index.html'), renderArticle(post, template));
  }
}

function buildSitemap() {
  const siteUpdated = '2026-09-05';
  const staticUrls = [
    { url: '/' },
    { url: '/about/' },
    { url: '/results/' },
    { url: '/services' },
    { url: '/b2b-lead-generation-service' },
    { url: '/service-lead-generation' },
    { url: '/service-monthly-linkedin-outreach-management' },
    { url: '/service-linkedin-content-for-founders' },
    { url: '/service-profile-optimization' },
    { url: '/contact' },
    { url: '/blog' },
    { url: '/locations/' },
    { url: '/locations/uae/dubai/' },
    { url: '/locations/uae/abu-dhabi/' },
    { url: '/locations/uae/sharjah/' },
    { url: '/locations/uae/ajman/' },
    { url: '/locations/uae/ras-al-khaimah/' },
    { url: '/locations/uae/fujairah/' },
    { url: '/locations/saudi-arabia/riyadh/' },
    { url: '/locations/saudi-arabia/jeddah/' },
    { url: '/locations/saudi-arabia/dammam-khobar/' },
    { url: '/locations/saudi-arabia/makkah/' },
    { url: '/locations/saudi-arabia/madinah/' },
    { url: '/locations/qatar/doha/' },
    { url: '/locations/bahrain/manama/' },
    { url: '/locations/kuwait/kuwait-city/' },
    { url: '/locations/oman/muscat/' },
    { url: '/locations/singapore/' },
    { url: '/locations/united-kingdom/london/' },
    { url: '/locations/united-kingdom/manchester/' },
    { url: '/locations/united-kingdom/birmingham/' },
    { url: '/locations/united-kingdom/leeds/' },
    { url: '/locations/malaysia/kuala-lumpur/' },
    { url: '/locations/malaysia/cyberjaya/' },
    { url: '/locations/malaysia/johor-bahru/' },
    { url: '/locations/australia/sydney/' },
    { url: '/locations/australia/melbourne/' },
    { url: '/locations/australia/brisbane/' },
    { url: '/locations/australia/perth/' },
  ];
  const urls = staticUrls.map(({ url }) => `  <url><loc>${siteUrl}${url}</loc><lastmod>${siteUpdated}</lastmod></url>`);
  const blogTotalPages = blogTotalPagesCount();
  for (let pageNum = 2; pageNum <= blogTotalPages; pageNum += 1) {
    urls.push(`  <url><loc>${siteUrl}/blog-${pageNum}</loc><lastmod>${siteUpdated}</lastmod></url>`);
  }
  for (const post of posts) {
    urls.push(`  <url><loc>${articleUrl(post.slug)}</loc><lastmod>${escapeHtml(post.updated || post.date || '')}</lastmod></url>`);
  }
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
  fs.writeFileSync(path.join(root, 'sitemap.xml'), sitemap);
}

function buildFeed() {
  const items = posts.map((post) => `  <item>
    <title>${escapeHtml(post.title)}</title>
    <link>${articleUrl(post.slug)}</link>
    <guid>${articleUrl(post.slug)}</guid>
    <pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate>
    <description>${escapeHtml(post.excerpt || '')}</description>
  </item>`).join('\n');
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>Oleg Cherkas Insights</title>
  <link>${siteUrl}/blog</link>
  <description>Practical notes on LinkedIn growth, B2B outreach and sales systems.</description>
${items}
</channel>
</rss>\n`;
  fs.writeFileSync(path.join(root, 'feed.xml'), feed);
}

buildBlogIndex();
buildArticles();
buildSitemap();
buildFeed();
fs.writeFileSync(path.join(root, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);

console.log(`Built blog index, ${posts.length} static articles, sitemap and RSS feed.`);
