const blogPosts = [
  {
    id: 1,
    slug: 'top-freefire-strategies',
    title: 'Top 5 Free Fire Strategies for Rank Push',
    excerpt: 'Best Free Fire tips to rank up fast this season.',
    category: 'gaming',
    image: 'thumb.jpg',
    date: '2023-06-15',
    views: 12500
  },
  {
    id: 2,
    slug: 'grow-as-gaming-creator',
    title: 'How to Grow as a Gaming Content Creator',
    excerpt: 'Practical steps to build and grow your gaming channel.',
    category: 'support',
    image: 'thumb.jpg',
    date: '2023-06-10',
    views: 8400
  },
  {
    id: 3,
    slug: 'freefire-redeem-codes-jun-2023',
    title: 'Latest Free Fire Redeem Codes (June 2023)',
    excerpt: 'Find the newest redeem codes and how to use them.',
    category: 'redeem',
    image: 'thumb.jpg',
    date: '2023-06-01',
    views: 35600
  }
];

const postsContainer = document.getElementById('posts-container');
const tabButtons = document.querySelectorAll('.tab-btn');
let currentCategory = 'all';

function formatDate(dateString) {
  const opts = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, opts);
}

function renderPosts() {
  if (!postsContainer) return;
  postsContainer.innerHTML = '';

  const filtered = currentCategory === 'all'
    ? blogPosts
    : blogPosts.filter(p => p.category === currentCategory);

  if (filtered.length === 0) {
    postsContainer.innerHTML = '<p class="no-posts">No posts found.</p>';
    return;
  }

  filtered.forEach(p => {
    const imgSrc = `blog/${p.slug}/images/${p.image}`;
    const card = document.createElement('article');
    card.className = 'post-card';
    card.innerHTML = `
      <a href="blog/${p.slug}/index.html" class="post-link">
        <img src="${imgSrc}" alt="${p.title}" class="post-image">
        <div class="post-content">
          <span class="post-category">${p.category}</span>
          <h3 class="post-title">${p.title}</h3>
          <p class="post-excerpt">${p.excerpt}</p>
          <div class="post-meta">
            <span>${formatDate(p.date)}</span>
            <span>${p.views.toLocaleString()} views</span>
          </div>
        </div>
      </a>
    `;
    postsContainer.appendChild(card);
  });
}

function setupTabs() {
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category || 'all';
      renderPosts();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupTabs();
  renderPosts();
});
