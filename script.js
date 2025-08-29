// Розширений список товарів (id як рядки, підтримка uk/en назви)
const productsData = [
  { id: 'm1', titleUk: 'Death Note — Зошит смерті', titleEn: 'Death Note', desc: 'Колекційний щоденник', img: 'https://placehold.co/300x420?text=Death+Note', price: 299.00 },
  { id: 'm2', titleUk: 'My Hero Academia — Моя геройська академія', titleEn: 'My Hero Academia', desc: 'Плакат All Might', img: 'https://placehold.co/300x420?text=My+Hero+Academia', price: 249.00 },
  { id: 'm3', titleUk: 'One Piece — Одна частина', titleEn: 'One Piece', desc: 'Кепка Luffy', img: 'https://placehold.co/300x420?text=One+Piece', price: 199.00 },
  { id: 'm4', titleUk: 'Naruto — Наруто', titleEn: 'Naruto', desc: 'Фігурка Наруто', img: 'https://placehold.co/300x420?text=Naruto', price: 179.00 },
  { id: 'm5', titleUk: 'Demon Slayer — Убивця демонів', titleEn: 'Demon Slayer', desc: 'Постер Tanjiro', img: 'https://placehold.co/300x420?text=Demon+Slayer', price: 159.00 },
  { id: 'm6', titleUk: 'Fullmetal Alchemist — Сталевий алхімік', titleEn: 'Fullmetal Alchemist', desc: 'Колекційний артбук', img: 'https://placehold.co/300x420?text=FMA', price: 129.00 },
  { id: 'm7', titleUk: 'Attack on Titan — Атака титанов', titleEn: 'Attack on Titan', desc: 'Плакат Eren', img: 'https://placehold.co/300x420?text=AoT', price: 139.00 },
  { id: 'm8', titleUk: 'Tokyo Ghoul — Токіо гуль', titleEn: 'Tokyo Ghoul', desc: 'Футболка Kaneki', img: 'https://placehold.co/300x420?text=Tokyo+Ghoul', price: 119.00 },
  { id: 'm9', titleUk: 'Bleach — Бліч', titleEn: 'Bleach', desc: 'Ключова фігурка', img: 'https://placehold.co/300x420?text=Bleach', price: 109.00 },
  { id: 'm10', titleUk: 'Hunter x Hunter — Мисливець x Мисливець', titleEn: 'Hunter x Hunter', desc: 'Набір значків', img: 'https://placehold.co/300x420?text=HxH', price: 99.00 },
  { id: 'm11', titleUk: 'Spirited Away Artbook — Віднесені привидами (артбук)', titleEn: 'Spirited Away Artbook', desc: 'Артбук Studio Ghibli', img: 'https://placehold.co/300x420?text=Ghibli+Artbook', price: 89.00 },
  { id: 'm12', titleUk: `Your Name — Твоє ім'я (манга)`, titleEn: 'Your Name', desc: 'Манга-видання', img: 'https://placehold.co/300x420?text=Your+Name', price: 79.00 },

  // додаткові
  { id: 'm13', titleUk: 'Kimi no Na wa — Твоє ім\'я', titleEn: 'Kimi no Na wa', desc: 'Постер фільму', img: 'https://placehold.co/300x420?text=Kimi+no+Na+wa', price: 69.00 },
  { id: 'm14', titleUk: 'Spirited Away — Віднесені привидами', titleEn: 'Spirited Away', desc: 'Фігурка Тоторо', img: 'https://placehold.co/300x420?text=Spirited+Away', price: 59.00 },
  { id: 'm15', titleUk: 'Tonari no Totoro — Тоторо', titleEn: 'My Neighbor Totoro', desc: 'М' + "'" + 'яка фігурка', img: 'https://placehold.co/300x420?text=Totoro', price: 89.00 },
  { id: 'm16', titleUk: 'Akira — Акіра', titleEn: 'Akira', desc: 'Колекційне видання', img: 'https://placehold.co/300x420?text=Akira', price: 129.00 },
  { id: 'm17', titleUk: 'Nausicaa — Наусіка', titleEn: 'Nausicaa', desc: 'Плакат', img: 'https://placehold.co/300x420?text=Nausicaa', price: 49.00 },
  { id: 'm18', titleUk: 'Violet Evergarden — Вайолет', titleEn: 'Violet Evergarden', desc: 'Артбук', img: 'https://placehold.co/300x420?text=Violet', price: 139.00 },
  { id: 'm19', titleUk: 'Cowboy Bebop — Ковбой Біпоп', titleEn: 'Cowboy Bebop', desc: 'Саундтрек LP', img: 'https://placehold.co/300x420?text=Cowboy+Bebop', price: 159.00 },
  { id: 'm20', titleUk: 'Berserk — Берсерк', titleEn: 'Berserk', desc: 'Манга-том', img: 'https://placehold.co/300x420?text=Berserk', price: 49.00 },
  { id: 'm21', titleUk: 'Ghost in the Shell — Привид у броні', titleEn: 'Ghost in the Shell', desc: 'Плакат кіно', img: 'https://placehold.co/300x420?text=Ghost+in+the+Shell', price: 69.00 },
  { id: 'm22', titleUk: 'Made in Abyss — Створений в безодні', titleEn: 'Made in Abyss', desc: 'Колекційна фігурка', img: 'https://placehold.co/300x420?text=Made+in+Abyss', price: 99.00 },
  { id: 'm23', titleUk: 'The Promised Neverland — Обіцяний', titleEn: 'The Promised Neverland', desc: 'Манга-том', img: 'https://placehold.co/300x420?text=Promised+Neverland', price: 119.00 },

  // 4 спеціальних
  { id: 'm24', titleUk: 'Колекційна фігурка — Обмежена', titleEn: 'Limited Collector Figure', desc: 'Лімітована статуетка', img: 'https://placehold.co/300x420?text=Limited+Figure', price: 499.00, special: true },
  { id: 'm25', titleUk: 'Артбук — Обмежене видання', titleEn: 'Artbook — Limited Edition', desc: 'Альбом з автографом', img: 'https://placehold.co/300x420?text=Artbook', price: 399.00, special: true },
  { id: 'm26', titleUk: 'Фігурка преміум — Статуетка', titleEn: 'Premium Statue', desc: 'Преміум набір', img: 'https://placehold.co/300x420?text=Premium+Statue', price: 259.00, special: true },
  { id: 'm27', titleUk: 'Box Set — Повна серія', titleEn: 'Box Set — Complete Series', desc: 'Повна серія + бонуси', img: 'https://placehold.co/300x420?text=Box+Set', price: 799.00, special: true }
];

const productsContainer = document.querySelector('#products .product-list') || document.querySelector('#products');
const searchInput = document.getElementById('search');
const clearBtn = document.getElementById('clearSearch');
const themeToggle = document.getElementById('themeToggle');
const wheelPlate = document.getElementById('wheelPlate');
const spinWheel = document.getElementById('spinWheel');
const wheelResult = document.getElementById('wheelResult');

function renderProducts(list){
  if(!productsContainer) return;
  productsContainer.innerHTML = '';
  if(!list || list.length === 0){ productsContainer.innerHTML = '<p class="muted">Нічого не знайдено</p>'; return; }

  const lang = (localStorage.getItem('ml_lang') || 'uk');
  list.forEach(p => {
    const li = document.createElement('li');
    li.className = 'product-card';
    li.dataset.id = p.id;
    li.dataset.price = p.price;
    li.dataset['title-uk'] = p.titleUk || p.titleEn || '';
    li.dataset['title-en'] = p.titleEn || p.titleUk || '';
    li.innerHTML = `
      <img src="${p.img}" alt="${p.titleEn}" class="product-img">
      <h3 class="product-title" data-i18n-title="${p.id}">${(lang==='uk'?p.titleUk:p.titleEn) || p.titleEn}</h3>
      <p class="product-author">${p.desc}</p>
      <div class="product-meta">
        <span class="price">${Number(p.price).toFixed(2)} ₴</span>
        <button class="add-to-cart btn" data-id="${p.id}" data-price="${p.price}">Додати в кошик</button>
      </div>
    `;
    productsContainer.appendChild(li);
  });

  // entrance animation
  anime.remove('.product-card');
  anime({ targets: '.product-card', opacity: [0,1], translateY: [12,0], delay: anime.stagger(40), duration: 420, easing: 'easeOutQuad' });
}

/* ---- Cart logic ---- */
const CART_KEY = 'mangalordium_cart_v1';
const cartToggle = document.getElementById('cartToggle');
const cartEl = document.getElementById('cart');
const closeCart = document.getElementById('closeCart');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const cartCountEl = document.getElementById('cartCount');
const checkoutBtn = document.getElementById('checkout');
const cartSumEl = document.getElementById('cartSum');

let cart = JSON.parse(localStorage.getItem(CART_KEY) || '{}');

function saveCart(){ localStorage.setItem(CART_KEY, JSON.stringify(cart)); }

function getCartCount(){ return Object.values(cart).reduce((s,i)=>s+i.qty,0); }

function updateCartUI(){
  // If cart UI is not present on the page, only update a visible cart count (if any)
  if(!cartItemsEl){
    if(cartCountEl) cartCountEl.textContent = getCartCount();
    return;
  }

  cartItemsEl.innerHTML = '';
  const entries = Object.entries(cart);
  if(entries.length === 0){
    cartItemsEl.innerHTML = '<p class="muted">Кошик порожній</p>';
    if(cartTotalEl) cartTotalEl.textContent = '0.00 ₴';
    if(cartCountEl) cartCountEl.textContent = '0';
    return;
  }

  let total = 0;
  entries.forEach(([id, item])=>{
    const row = document.createElement('div'); row.className = 'cart-item';
    row.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <div class="meta">
        <h4>${item.title}</h4>
        <p>${item.price.toFixed(2)} ₴</p>
      </div>
      <div class="qty-controls">
        <button class="dec" data-id="${id}">−</button>
        <div class="qty">${item.qty}</div>
        <button class="inc" data-id="${id}">＋</button>
      </div>
    `;
    cartItemsEl.appendChild(row);
    total += item.price * item.qty;
  });

  if(cartTotalEl) cartTotalEl.textContent = total.toFixed(2) + ' ₴';
  if(cartCountEl) cartCountEl.textContent = getCartCount();
  if(cartSumEl) cartSumEl.textContent = total.toFixed(2) + ' ₴';

  // attach qty handlers
  cartItemsEl.querySelectorAll('.inc').forEach(btn=> btn.addEventListener('click', ()=> changeQty(btn.dataset.id, 1)));
  cartItemsEl.querySelectorAll('.dec').forEach(btn=> btn.addEventListener('click', ()=> changeQty(btn.dataset.id, -1)));
}

function changeQty(id, delta){
  if(!cart[id]) return;
  cart[id].qty += delta;
  if(cart[id].qty <= 0) delete cart[id];
  saveCart(); updateCartUI();
}

function addToCart(productId){
  const p = productsData.find(x=> x.id == productId);
  if(!p) return;
  const key = String(p.id);
  if(!cart[key]) cart[key] = { id: p.id, title: p.titleUk || p.titleEn, img: p.img, price: Number(p.price), qty:0 };
  cart[key].qty += 1;
  saveCart();
  updateCartUI();

  // small fly-to-cart visual
  const btn = document.querySelector(`button.add-to-cart[data-id="${productId}"]`);
  const img = btn?.closest('.product-card')?.querySelector('img');
  if(img && cartToggle){
    const clone = img.cloneNode();
    const rect = img.getBoundingClientRect();
    clone.style.position='fixed'; clone.style.left = rect.left+'px'; clone.style.top = rect.top+'px'; clone.style.width = rect.width+'px'; clone.style.zIndex = 120; document.body.appendChild(clone);
    const target = cartToggle.getBoundingClientRect();
    anime({ targets: clone, left: target.left, top: target.top, width: 28, height: 20, rotate: '0.5turn', opacity: [1,0.6,0], easing: 'easeInOutQuad', duration: 700, complete(){ clone.remove(); } });
  }
}

if(cartToggle) cartToggle.addEventListener('click', ()=>{ if(cartEl){ cartEl.classList.toggle('open'); cartEl.setAttribute('aria-hidden', String(!cartEl.classList.contains('open'))); } });
if(closeCart) closeCart.addEventListener('click', ()=>{ if(cartEl){ cartEl.classList.remove('open'); cartEl.setAttribute('aria-hidden','true'); } });

// attach add to cart handlers globally (delegate)
// delegate add-to-cart
document.addEventListener('click', (e)=>{
  const t = e.target;
  if(t.closest && t.closest('.add-to-cart')){ const btn = t.closest('.add-to-cart'); addToCart(btn.dataset.id); }
});

// init
updateCartUI();

if(checkoutBtn) checkoutBtn.addEventListener('click', ()=>{
  if(getCartCount() === 0) return;
  // Save order to orders list
  try {
    const ORDERS_KEY = 'mangalordium_orders_v1';
    const items = Object.values(cart);
    const total = items.reduce((s,i)=> s + i.price * i.qty, 0);
    const prev = JSON.parse(localStorage.getItem(ORDERS_KEY) || '[]');
    prev.push({ id: Date.now(), items, total, date: new Date().toISOString() });
    localStorage.setItem(ORDERS_KEY, JSON.stringify(prev));
  } catch (e) {}

  // show simple modal via existing orderModal if present
  if(window.orderModal && window.orderModal.querySelector){
    try{ window.orderModal.querySelector('#orderModalMessage').textContent = 'Дякуємо! Наш менеджер зв\'яжеться з вами.'; window.orderModal.hidden = false; window.orderModal.setAttribute('aria-hidden','false'); } catch(e){}
  } else {
    alert('Оформлення замовлення (демо) — дякуємо!');
  }

  cart = {}; saveCart(); updateCartUI(); cartEl && cartEl.classList.remove('open');
  // refresh wheel (discounts may change)
  initWheel();
});

// Wheel: fill with special items or top priced items
function initWheel(){
  if(!wheelPlate) return;
  wheelPlate.innerHTML = '';
  // prefer special items
  let candidates = productsData.filter(p=>p.special).slice();
  if(candidates.length < 6){
    candidates = candidates.concat(productsData.slice().sort((a,b)=>b.price-a.price).filter(p=>!p.special).slice(0, 8 - candidates.length));
  }
  candidates.slice(0,8).forEach((p, idx)=>{
    const discount = Math.floor(Math.random()*68);
    const discounted = +(p.price * (1 - discount/100)).toFixed(2);
    const item = document.createElement('div'); item.className = 'wheel-item';
    const lang = localStorage.getItem('ml_lang') || 'uk';
    const title = lang === 'uk' ? (p.titleUk || p.titleEn) : (p.titleEn || p.titleUk);
    item.innerHTML = `<div class="wheel-title">${title}</div><div class="wheel-price">${discounted} ₴ <small>(${discount}% off)</small></div>`;
    item.dataset.productId = p.id; item.dataset.discount = discount; item.dataset.discounted = discounted;
    wheelPlate.appendChild(item);
  });
  anime.remove('.wheel-item');
  anime({ targets: '.wheel-item', opacity: [0,1], translateY: [14,0], delay: anime.stagger(30), duration: 420, easing: 'easeOutQuad' });
}

// spin handler
if(spinWheel){
  spinWheel.addEventListener('click', ()=>{
    const items = Array.from(wheelPlate.querySelectorAll('.wheel-item'));
    if(!items.length) return;
    const chosenIndex = Math.floor(Math.random()*items.length);
    const rounds = 3 + Math.floor(Math.random()*4);
    const anglePer = 360 / items.length;
    const final = 360*rounds + chosenIndex * anglePer + anglePer/2;
    anime({ targets: '#wheelPlate', rotate: final, duration: 1600, easing: 'easeOutCubic', complete(){
      wheelPlate.style.transform = 'none';
      items.forEach(it=> it.classList.remove('highlight'));
      const chosen = items[chosenIndex]; chosen.classList.add('highlight');
      wheelResult && (wheelResult.textContent = `Виграш: ${chosen.querySelector('.wheel-title').textContent} — ${chosen.dataset.discounted} ₴`);
      anime({ targets: chosen, scale: [1,1.06,1], duration: 700, easing: 'easeOutElastic(1,.6)'});
    }});
  });
}

function productHoverEnter(el){
  anime.remove(el);
  anime({
    targets: el,
    scale: 1.03,
    boxShadow: ['0 6px 10px rgba(0,0,0,0.12)','0 18px 40px rgba(0,0,0,0.45)'],
    duration: 350,
    easing: 'easeOutExpo'
  });

  // Accent color change on title (фіолет -> синій при світлій темі, і навпаки)
  const title = el.querySelector('.accent');
  if(title){
    const isDark = document.body.classList.contains('theme-dark');
    const from = isDark ? getComputedStyle(document.documentElement).getPropertyValue('--accent-dark').trim() : getComputedStyle(document.documentElement).getPropertyValue('--accent-light').trim();
    const to = isDark ? getComputedStyle(document.documentElement).getPropertyValue('--accent-light').trim() : getComputedStyle(document.documentElement).getPropertyValue('--accent-dark').trim();
    anime({
      targets: title,
      color: [from, to],
      duration: 400,
      easing: 'linear'
    });
  }
}

function productHoverLeave(el){
  anime.remove(el);
  anime({ targets: el, scale:1, boxShadow: '0 6px 18px rgba(0,0,0,0.12)', duration: 300, easing: 'easeOutExpo' });

  const title = el.querySelector('.accent');
  if(title){
    const isDark = document.body.classList.contains('theme-dark');
    const to = isDark ? getComputedStyle(document.documentElement).getPropertyValue('--accent-dark').trim() : getComputedStyle(document.documentElement).getPropertyValue('--accent-light').trim();
    anime({ targets: title, color: to, duration: 300, easing: 'linear' });
  }
}

// Пошук
function filterProducts(query){
  query = (query||'').toLowerCase().trim();
  if(!query) return productsData;
  return productsData.filter(p => {
    const title = ((p.titleUk || '') + ' ' + (p.titleEn || '') + ' ' + (p.desc || '')).toLowerCase();
    return title.includes(query);
  });
}
if(searchInput){
  searchInput.addEventListener('input', (e)=>{
    const val = e.target.value;
    renderProducts(filterProducts(val));

    // search field hover pulse animation
    anime.remove('#search');
    anime({ targets: '#search', scale: [1,1.01,1], duration: 400, easing: 'easeInOutSine' });
  });
}

if(clearBtn){
  clearBtn.addEventListener('click', ()=>{ if(searchInput){ searchInput.value=''; searchInput.dispatchEvent(new Event('input')); searchInput.focus(); } });
}

// Theme toggle
if(themeToggle){
  themeToggle.addEventListener('click', ()=>{
  const isDark = document.body.classList.contains('theme-dark');
  if(isDark){
    // Переключаємо на світлу
    document.body.classList.remove('theme-dark');
    document.body.classList.add('theme-light');
    themeToggle.textContent = 'Темний режим';
    themeToggle.setAttribute('aria-pressed','true');
  } else {
    document.body.classList.remove('theme-light');
    document.body.classList.add('theme-dark');
    themeToggle.textContent = 'Світлий режим';
    themeToggle.setAttribute('aria-pressed','false');
  }

  // Animate accent color swap globally
  const root = document.documentElement;
  const from = getComputedStyle(root).getPropertyValue('--accent-dark').trim();
  const to = getComputedStyle(root).getPropertyValue('--accent-light').trim();

  anime({
    targets: document.querySelectorAll('.accent'),
    color: [from, to],
    duration: 550,
    easing: 'easeInOutQuad'
  });

  // re-render to ensure colors applied
  const currentSearch = (searchInput && searchInput.value) || '';
  renderProducts(filterProducts(currentSearch));
});
}

// Ініціалізація
renderProducts(productsData);
