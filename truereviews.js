// ── DATA ──
const COLORS = ['#00b67a','#e53535','#f59e0b','#6366f1','#0ea5e9','#ec4899','#14b8a6','#8b5cf6'];

const reviews = [
  {
    id:1, shopName:'Shajgoj', vibe:'negative', date:'March 28, 2025',
    reviewer:{name:'Nusrat Jahan', handle:'@nusrat_jahan', color:'#e53535'},
    stars:2,
    title:'Delivered fake product — completely different from the photos!',
    body:`I ordered the Maybelline Fit Me foundation from Shajgoj, and what arrived was a completely different shade and texture. The packaging looked used. I raised a complaint but they took 10 days just to respond, and their solution was a 10% refund coupon — for a completely wrong product! This is unacceptable. I've been a loyal customer for 2 years. Never again.`,
    images:['💄','🧴'],
    upvotes:247, downvotes:12, comments:38,
    facebookLink:'https://facebook.com/shajgoj', websiteLink:'shajgoj.com',
    category:'beauty'
  },
  {
    id:2, shopName:'Chaldal', vibe:'positive', date:'April 1, 2025',
    reviewer:{name:'Karim Uddin', handle:'@karim_uddin', color:'#00b67a'},
    stars:5,
    title:'Absolutely the best grocery delivery in Dhaka — fast and fresh!',
    body:`I've been using Chaldal for 3 months now and every single order has arrived within 2 hours. The vegetables are always fresh, packaging is neat, and the prices are fair. Once they accidentally sent the wrong rice brand and they replaced it within the hour with no arguments. This is how online shopping should work. Highly recommend to anyone in Dhaka!`,
    images:['🥦','🍅','🛒'],
    upvotes:512, downvotes:8, comments:64,
    facebookLink:'https://facebook.com/chaldal', websiteLink:'chaldal.com',
    category:'food'
  },
  {
    id:3, shopName:'Daraz Bangladesh', vibe:'mixed', date:'March 25, 2025',
    reviewer:{name:'Tanvir Ahmed', handle:'@tanvir_bd', color:'#6366f1'},
    stars:3,
    title:'Good prices but delivery delays are a real problem',
    body:`Daraz has some really good deals — I got a Xiaomi charger for 40% off during the 4.4 sale. But the delivery promised 3–5 days and it took 12 days. The product was fine but I had to chat with support 4 times. They kept giving me different estimated dates. If they fix their logistics, it would be a 5-star experience.`,
    images:['📦','🔌'],
    upvotes:189, downvotes:67, comments:45,
    facebookLink:'https://facebook.com/darazbangladesh', websiteLink:'daraz.com.bd',
    category:'gadgets'
  },
  {
    id:4, shopName:'Aarong', vibe:'positive', date:'March 20, 2025',
    reviewer:{name:'Faria Sultana', handle:'@faria_s', color:'#ec4899'},
    stars:5,
    title:'Quality you can trust — every purchase has been worth it',
    body:`Ordered a handloom saree for Eid gifting from Aarong's website. The fabric quality is exceptional as always. Delivery was in 4 days (I'm in Chittagong). The packaging was very premium — it arrived in a beautiful box. The customer care even called to confirm my address. This is a brand that genuinely cares about quality.`,
    images:['🥻','🎁'],
    upvotes:334, downvotes:4, comments:28,
    facebookLink:'https://facebook.com/aarong', websiteLink:'aarong.com',
    category:'clothing'
  },
  {
    id:5, shopName:'Bikroy Electronics', vibe:'negative', date:'March 15, 2025',
    reviewer:{name:'Sabbir Hassan', handle:'@sabbir_h', color:'#f59e0b'},
    stars:1,
    title:'SCAM! Sent a display piece instead of a new phone',
    body:`Ordered a Samsung A35 listed as "brand new sealed". What arrived was clearly a display piece — screen protector was peeling, there were light scratches on the back, and the battery was already at 87% health. When I called, they denied it and said "that's normal shipping". I've reported them to the seller platform. Sharing proof screenshots here. Stay away!`,
    images:['📱','📸','⚠️'],
    upvotes:891, downvotes:23, comments:142,
    facebookLink:'https://facebook.com/bikroybd', websiteLink:'bikroy.com',
    category:'gadgets'
  },
  {
    id:6, shopName:'Meena Bazar Online', vibe:'positive', date:'April 2, 2025',
    reviewer:{name:'Rabeya Khatun', handle:'@rabeya_k', color:'#14b8a6'},
    stars:4,
    title:'Reliable grocery delivery, minor hiccup with substitutions',
    body:`Been using Meena Bazar Online for 2 months. Generally great — produce is fresh, delivery is on time. Only issue is sometimes they substitute items without asking (I ordered Pran juice and got Fresh brand instead). Wish they'd call before substituting. But overall very satisfied and it saves me so much time. Would recommend to busy families!`,
    images:['🛒','🧃'],
    upvotes:156, downvotes:11, comments:19,
    facebookLink:'https://facebook.com/meenabazar', websiteLink:'meenabazarbd.com',
    category:'food'
  },
  {
    id:7, shopName:'Ryans Computers', vibe:'mixed', date:'March 10, 2025',
    reviewer:{name:'Minhaj Rahman', handle:'@minhaj_r', color:'#8b5cf6'},
    stars:3,
    title:'Great product selection, but after-sales service is disappointing',
    body:`Bought a gaming laptop from Ryans. The price was competitive and the machine is great. But 3 months later I had an issue with the hinge and claiming warranty was a nightmare. They kept saying "manufacturer issue" and passing the buck. Took 6 weeks to resolve. Buy from them for the product, but don't expect great post-purchase support.`,
    images:['💻','🔧'],
    upvotes:203, downvotes:45, comments:37,
    facebookLink:'https://facebook.com/ryanscomputers', websiteLink:'ryanscomputers.com',
    category:'gadgets'
  }
];

const companies = [
  {name:'Shajgoj', pos:45, neg:38, mixed:17},
  {name:'Chaldal', pos:78, neg:8, mixed:14},
  {name:'Daraz Bangladesh', pos:52, neg:28, mixed:20},
  {name:'Aarong', pos:82, neg:5, mixed:13},
  {name:'Bikroy Electronics', pos:22, neg:61, mixed:17},
  {name:'Meena Bazar Online', pos:70, neg:12, mixed:18},
  {name:'Ryans Computers', pos:58, neg:24, mixed:18},
  {name:'Pathao Food', pos:65, neg:20, mixed:15}
];

// ── STATE ──
let currentFilter = 'all';
let currentSort = 'newest';
let showCount = 3;

// ── ROUTER ──
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  window.scrollTo(0,0);
  if(name==='home') renderFeed();
  if(name==='summary') renderSummary();
  if(name==='account') renderMyReviews();
}

// ── RENDER FEED ──
function renderFeed() {
  const feed = document.getElementById('reviewFeed');
  let filtered = reviews.filter(r => currentFilter==='all' || r.vibe===currentFilter);
  if(currentSort==='upvoted') filtered.sort((a,b)=>b.upvotes-a.upvotes);
  else if(currentSort==='discussed') filtered.sort((a,b)=>b.comments-a.comments);
  const visible = filtered.slice(0, showCount);
  feed.innerHTML = visible.map(r => reviewCardHTML(r)).join('');
  document.getElementById('loadMoreSection').style.display = filtered.length > showCount ? 'block' : 'none';
}

function reviewCardHTML(r) {
  const initials = r.reviewer.name.split(' ').map(n=>n[0]).join('');
  const stars = '★'.repeat(r.stars) + '☆'.repeat(5-r.stars);
  const starColors = r.stars>=4?'#00b67a':r.stars>=3?'#f59e0b':'#e53535';
  const images = r.images.map(img=>`<div class="proof-img-placeholder">${img}</div>`).join('');
  const bodyPreview = r.body.length>220 ? r.body.slice(0,220)+'...' : r.body;
  return `
  <div class="review-card">
    <div class="card-top">
      <div class="card-meta">
        <div class="shop-name">
          ${r.shopName}
          <span class="vibe-badge ${r.vibe}">${r.vibe==='positive'?'👍 Positive':r.vibe==='negative'?'👎 Negative':'😐 Mixed'}</span>
        </div>
        <span class="card-date">${r.date}</span>
      </div>
      <div class="reviewer">
        <div class="reviewer-avatar" style="background:${r.reviewer.color}">${initials}</div>
        <div>
          <div class="reviewer-name">${r.reviewer.name}</div>
          <div class="reviewer-handle">${r.reviewer.handle}</div>
        </div>
      </div>
      <div class="star-row">${stars.split('').map(s=>`<span class="star" style="color:${s==='★'?starColors:'#e5e2db'}">${s}</span>`).join('')}</div>
      <div class="card-title">${r.title}</div>
      <div class="card-body">${bodyPreview}</div>
      <div class="proof-images">${images}</div>
    </div>
    <div class="card-footer">
      <button class="card-action" onclick="vote(${r.id},'up',this)">👍 ${r.upvotes}</button>
      <button class="card-action" onclick="vote(${r.id},'down',this)">👎 ${r.downvotes}</button>
      <button class="card-action" onclick="showPage('story');loadStory(${r.id})">💬 ${r.comments}</button>
      <button class="read-more-btn" onclick="showPage('story');loadStory(${r.id})">Read more →</button>
    </div>
  </div>`;
}

// ── STORY PAGE ──
function loadStory(id) {
  const r = reviews.find(x=>x.id===id);
  if(!r) return;
  const initials = r.reviewer.name.split(' ').map(n=>n[0]).join('');
  const stars = '★'.repeat(r.stars)+'☆'.repeat(5-r.stars);
  const starColors = r.stars>=4?'#00b67a':r.stars>=3?'#f59e0b':'#e53535';
  const images = r.images.map(img=>`<div class="story-img-placeholder">${img}</div>`).join('');
  const links = `
    ${r.facebookLink?`<a href="${r.facebookLink}" target="_blank" onclick="openExternal(event,'${r.facebookLink}')" style="color:var(--accent);font-size:.85rem">📘 Facebook Page</a>`:''}
    ${r.websiteLink?`&nbsp;·&nbsp;<a href="#" style="color:var(--text3);font-size:.85rem">🌐 ${r.websiteLink}</a>`:''}
  `;

  const commentsData = [
    {name:'Arif Hossain',color:'#6366f1',time:'2h ago',text:'Same thing happened to me! I ordered last month and got a completely different product.',replies:[{name:'Nusrat Jahan',color:r.reviewer.color,time:'1h ago',text:'So frustrating right? They really need to improve their quality control.'}]},
    {name:'Meher Nigar',color:'#ec4899',time:'5h ago',text:'Shared this post. Everyone should know about this shop\'s practices.',replies:[]},
    {name:'Rakib Islam',color:'#00b67a',time:'1d ago',text:'Thanks for the honest review. Will definitely avoid them now!',replies:[]},
  ];

  const commentsHTML = commentsData.map(c=>{
    const ci = c.name.split(' ').map(n=>n[0]).join('');
    const repliesHTML = c.replies.map(rep=>{
      const ri = rep.name.split(' ').map(n=>n[0]).join('');
      return `<div class="reply">
        <div class="comment-top">
          <div class="comment-avatar" style="background:${rep.color};width:24px;height:24px;font-size:.65rem">${ri}</div>
          <span class="comment-name" style="font-size:.82rem">${rep.name}</span>
          <span class="comment-time">${rep.time}</span>
        </div>
        <div class="comment-text" style="padding-left:30px">${rep.text}</div>
      </div>`;
    }).join('');
    return `<div class="comment">
      <div class="comment-top">
        <div class="comment-avatar" style="background:${c.color}">${ci}</div>
        <span class="comment-name">${c.name}</span>
        <span class="comment-time">${c.time}</span>
      </div>
      <div class="comment-text">${c.text}</div>
      <button class="reply-btn">↩ Reply</button>
      ${c.replies.length?`<div class="replies">${repliesHTML}</div>`:''}
    </div>`;
  }).join('');

  document.getElementById('storyContent').innerHTML = `
    <button class="back-btn" onclick="showPage('home')">← Back to reviews</button>
    <div class="card-meta" style="margin-bottom:.75rem">
      <div class="shop-name">${r.shopName} <span class="vibe-badge ${r.vibe}">${r.vibe==='positive'?'👍 Positive':r.vibe==='negative'?'👎 Negative':'😐 Mixed'}</span></div>
      <span class="card-date">${r.date}</span>
    </div>
    <div class="reviewer" style="margin-bottom:1rem">
      <div class="reviewer-avatar" style="background:${r.reviewer.color}">${initials}</div>
      <div><div class="reviewer-name">${r.reviewer.name}</div><div class="reviewer-handle">${r.reviewer.handle}</div></div>
    </div>
    <div class="star-row" style="margin-bottom:1rem">${stars.split('').map(s=>`<span class="star" style="font-size:1.25rem;color:${s==='★'?starColors:'#e5e2db'}">${s}</span>`).join('')}</div>
    <h2 style="font-family:var(--font-display);font-weight:800;font-size:1.5rem;margin-bottom:1rem;line-height:1.25">${r.title}</h2>
    <div class="story-body-text">${r.body}</div>
    <div style="margin:.75rem 0;display:flex;gap:10px;font-size:.85rem">${links}</div>
    <div class="story-images">${images}</div>
    <div class="vote-row">
      <button class="vote-btn up" onclick="vote(${r.id},'up',this)">👍 Upvote · ${r.upvotes}</button>
      <button class="vote-btn down" onclick="vote(${r.id},'down',this)">👎 Downvote · ${r.downvotes}</button>
    </div>
    <div class="comments-section">
      <h3>Comments (${r.comments})</h3>
      <div class="comment-input-row">
        <textarea class="comment-input" placeholder="Add a comment..."></textarea>
        <button class="comment-submit" onclick="showToast('Sign in to comment!')">Post</button>
      </div>
      ${commentsHTML}
    </div>
  `;
}

// ── SUMMARY ──
function renderSummary() {
  const grid = document.getElementById('companyGrid');
  grid.innerHTML = companies.map(c=>{
    const total = c.pos+c.neg+c.mixed;
    const pPct = Math.round(c.pos/total*100);
    const nPct = Math.round(c.neg/total*100);
    const mPct = 100-pPct-nPct;
    return `
    <div class="company-card" onclick="filterByShop('${c.name}')">
      <div class="company-card-top">
        <span class="company-name">${c.name}</span>
        <span class="company-total">${total} reviews</span>
      </div>
      <div class="ratio-bar">
        <div class="ratio-pos" style="width:${pPct}%"></div>
        <div class="ratio-mixed" style="width:${mPct}%"></div>
        <div class="ratio-neg" style="width:${nPct}%"></div>
      </div>
      <div class="mini-stats">
        <div class="mini-stat pos"><div class="count">${c.pos}</div><div class="label">Positive</div></div>
        <div class="mini-stat neg"><div class="count">${c.neg}</div><div class="label">Negative</div></div>
        <div class="mini-stat mixed"><div class="count">${c.mixed}</div><div class="label">Mixed</div></div>
      </div>
    </div>`;
  }).join('');
}

// ── MY REVIEWS ──
function renderMyReviews() {
  const myRevs = reviews.slice(0,3);
  document.getElementById('myReviews').innerHTML = myRevs.map(r=>`
    <div class="my-review-item">
      <div>
        <div style="font-family:var(--font-display);font-weight:700;font-size:.95rem;margin-bottom:4px">${r.shopName}</div>
        <div style="font-size:.85rem;color:var(--text2);margin-bottom:6px">${r.title}</div>
        <span class="vibe-badge ${r.vibe}">${r.vibe}</span>
      </div>
      <div class="my-review-actions">
        <button class="edit-btn" onclick="showToast('Edit feature coming soon!')">Edit</button>
        <button class="del-btn" onclick="showToast('Delete feature coming soon!')">Delete</button>
      </div>
    </div>
  `).join('');
}

// ── INTERACTIONS ──
function setFilter(f, btn) {
  currentFilter=f; showCount=3;
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderFeed();
}
function sortReviews(v){ currentSort=v; renderFeed(); }
function loadMore(){ showCount+=3; renderFeed(); }
function vote(id, type, btn) {
  const r = reviews.find(x=>x.id===id);
  if(!r) return;
  if(type==='up'){r.upvotes++;showToast('Upvoted! 👍')}
  else{r.downvotes++;showToast('Downvoted 👎')}
  renderFeed();
}
function selectVibe(v, el) {
  document.querySelectorAll('.vibe-option').forEach(e=>e.classList.remove('selected'));
  el.classList.add('selected');
}
function filterByCategory(cat) {
  showPage('home');
  showToast(`Showing ${cat} reviews`);
}
function filterByShop(name) {
  showPage('home');
  showToast(`Showing reviews for ${name}`);
}
function handleHeroSearch() {
  const q = document.getElementById('heroSearch').value;
  if(q) showToast(`Searching for "${q}"...`);
}
function submitReview() {
  showToast('Sign in first to share a review!');
}

// ── TOAST ──
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 2800);
}

// ── LIGHTBOX ──
function openLightbox(src) {
  document.getElementById('lightboxImg').src=src;
  document.getElementById('lightbox').classList.add('open');
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

// ── INIT ──
renderFeed();

