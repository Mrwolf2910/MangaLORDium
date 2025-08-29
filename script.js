// Дані прикладів товарів
const productsData = [
  { id:1, title: 'Наруто: Фігурка', desc: 'Колекційна фігурка Наруто', img: 'https://picsum.photos/seed/naru/400/300', price: 899.00 },
  { id:2, title: 'Моя геройська академія: Плакат', desc: 'Плакат All Might', img: 'https://picsum.photos/seed/mha/400/300', price: 249.50 },
  { id:3, title: 'Зошит смерті: Рюкзак', desc: 'Стильний рюкзак Death Note', img: 'https://picsum.photos/seed/dn/400/300', price: 1299.00 },
  { id:4, title: 'One Piece: Кепка', desc: 'Кепка з мотивами One Piece', img: 'https://picsum.photos/seed/op/400/300', price: 199.99 },
  { id:5, title: 'Demon Slayer: Фігурка', desc: 'Колекційна фігурка Tanjiro', img: 'https://picsum.photos/seed/ds/400/300', price: 749.00 },
  { id:6, title: 'Attack on Titan: Манга', desc: 'Том 1 манги Attack on Titan', img: 'https://picsum.photos/seed/aot/400/300', price: 399.00 },
  { id:7, title: 'Jujutsu Kaisen: Брелок', desc: 'Брелок із Годжо Сатору', img: 'https://picsum.photos/seed/jjk/400/300', price: 149.99 },
  { id:8, title: 'Dragon Ball: Футболка', desc: 'Футболка з принтом Гоку', img: 'https://picsum.photos/seed/db/400/300', price: 549.00 },
  { id:9, title: 'Tokyo Ghoul: Маска', desc: 'Косплей маска Канекі Кена', img: 'https://picsum.photos/seed/tg/400/300', price: 299.99 },
  { id:10, title: 'Fullmetal Alchemist: Кулон', desc: 'Кулон з символом Уробороса', img: 'https://picsum.photos/seed/fma/400/300', price: 199.50 },
  { id:11, title: 'Evangelion: Модель EVA-01', desc: 'Колекційна модель робота EVA-01', img: 'https://picsum.photos/seed/eva/400/300', price: 1499.99 },
  { id:12, title: 'Hunter x Hunter: Значок', desc: 'Значок мисливця', img: 'https://picsum.photos/seed/hxh/400/300', price: 179.99 },
  { id:13, title: 'Sailor Moon: Намисто', desc: 'Репліка кристалу Срібного Місяця', img: 'https://picsum.photos/seed/sm/400/300', price: 449.00 },
  { id:14, title: 'Black Clover: Книга', desc: 'Гримуар з чорною конюшиною', img: 'https://picsum.photos/seed/bc/400/300', price: 599.00 },
  { id:15, title: 'Sword Art Online: Меч', desc: 'Репліка меча Кіріто', img: 'https://picsum.photos/seed/sao/400/300', price: 899.99 }
];

const productsEl = document.getElementById('products');
const searchInput = document.getElementById('search');
const clearBtn = document.getElementById('clearSearch');
const themeToggle = document.getElementById('themeToggle');

// Карусель з найкращими товарами
const featuredProducts = [
  productsData[10], // Evangelion
  productsData[2],  // Death Note
  productsData[4],  // Demon Slayer
  productsData[6],  // Jujutsu Kaisen
  productsData[14]  // Sword Art Online
];

const carouselTrack = document.getElementById('featuredProducts');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
let currentIndex = 0;

function renderCarousel() {
  carouselTrack.innerHTML = '';
  featuredProducts.forEach((product, index) => {
    const item = document.createElement('div');
    item.className = 'carousel-item';
    item.innerHTML = `
      <img src="${product.img}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p class="price">${product.price.toFixed(2)} ₴</p>
      <button class="add-btn" data-id="${product.id}">Додати в кошик</button>
    `;
    carouselTrack.appendChild(item);
  });
  updateCarousel();
}

function updateCarousel() {
  const itemWidth = carouselTrack.offsetWidth / 3; // Показуємо по 3 товари
  carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

if (prevButton && nextButton && carouselTrack) {
  prevButton.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, featuredProducts.length - 3);
    updateCarousel();
  });

  // Ініціалізація каруселі
  renderCarousel();
  
  // Оновлення каруселі при зміні розміру вікна
  window.addEventListener('resize', updateCarousel);
}

function renderProducts(list){
  productsEl.innerHTML = '';
  if(list.length === 0){
    productsEl.innerHTML = '<p class="muted">Нічого не знайдено</p>';
    return;
  }

  list.forEach(p => {
    const card = document.createElement('article');
    card.className = 'product hover-anim';
    card.setAttribute('tabindex','0');
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <h3 class="accent">${p.title}</h3>
      <p>${p.desc}</p>
      <div class="meta-row">
        <span class="price">${p.price.toFixed(2)} ₴</span>
        <button class="add-btn" data-id="${p.id}">Додати в кошик</button>
      </div>
    `;

    // Hover animation using anime.js: pulse color & scale
    card.addEventListener('mouseenter', ()=> productHoverEnter(card));
    card.addEventListener('mouseleave', ()=> productHoverLeave(card));
    card.addEventListener('focus', ()=> productHoverEnter(card));
    card.addEventListener('blur', ()=> productHoverLeave(card));

  productsEl.appendChild(card);
  });

  // Animated entrance
  anime.remove('.product');
  anime({
    targets: '.product',
    opacity: [0,1],
    translateY: [12,0],
    delay: anime.stagger(60),
    duration: 500,
    easing: 'easeOutQuad'
  });
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
  cartItemsEl.innerHTML = '';
  const entries = Object.entries(cart);
  if(entries.length === 0){ cartItemsEl.innerHTML = '<p class="muted">Кошик порожній</p>'; cartTotalEl.textContent = '0.00 ₴'; cartCountEl.textContent = '0'; return; }

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

  cartTotalEl.textContent = total.toFixed(2) + ' ₴';
  cartCountEl.textContent = getCartCount();
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
  if(!cart[key]) cart[key] = { ...p, qty:0 };
  cart[key].qty += 1;
  saveCart();
  updateCartUI();

  // Small fly-to-cart animation
  const img = document.querySelector(`.product .add-btn[data-id="${productId}"]`)?.closest('.product')?.querySelector('img');
  if(img){
    const clone = img.cloneNode();
    const rect = img.getBoundingClientRect();
    clone.style.position='fixed'; clone.style.left = rect.left+'px'; clone.style.top = rect.top+'px'; clone.style.width = rect.width+'px'; clone.style.zIndex = 120; document.body.appendChild(clone);
    const target = cartToggle.getBoundingClientRect();
    anime({ targets: clone, left: target.left, top: target.top, width: 30, height: 24, rotate: '1turn', opacity: [1,0.6,0], easing: 'easeInOutQuad', duration: 700, complete(){ clone.remove(); } });
  }
}

cartToggle.addEventListener('click', ()=>{ cartEl.classList.toggle('open'); cartEl.setAttribute('aria-hidden', !cartEl.classList.contains('open')); });
closeCart.addEventListener('click', ()=>{ cartEl.classList.remove('open'); cartEl.setAttribute('aria-hidden','true'); });

// attach add to cart handlers globally (delegate)
document.addEventListener('click', (e)=>{
  const t = e.target;
  if(t.matches('.add-btn')){ addToCart(t.dataset.id); }
});

// init
updateCartUI();

// --- Оформлення замовлення через модальну форму ---
const orderModal = document.getElementById('orderModal');
const orderForm = document.getElementById('orderForm');
const closeOrder = document.getElementById('closeOrder');
const cancelOrder = document.getElementById('cancelOrder');
const orderSummary = document.getElementById('orderSummary');
const orderSuccess = document.getElementById('orderSuccess');
const orderSuccessText = document.getElementById('orderSuccessText');
const closeSuccess = document.getElementById('closeSuccess');

function buildOrderSummary(){
  const entries = Object.values(cart);
  if(entries.length === 0) return 'Кошик порожній';
  let html = '<ul style="padding-left:18px; margin:0;">';
  let total = 0;
  entries.forEach(it => { html += `<li>${it.title} × ${it.qty} — ${(it.price*it.qty).toFixed(2)} ₴</li>`; total += it.price*it.qty; });
  html += `</ul><div style="margin-top:8px;font-weight:700;">Підсумок: ${total.toFixed(2)} ₴</div>`;
  return html;
}

checkoutBtn.addEventListener('click', ()=>{
  if(getCartCount() === 0) return;
  // Показати модаль
  orderSummary.innerHTML = buildOrderSummary();
  orderForm.style.display = '';
  orderSuccess.hidden = true;
  orderModal.removeAttribute('hidden');
  orderModal.focus();
});

function closeOrderModal(){ orderModal.setAttribute('hidden',''); }

closeOrder.addEventListener('click', closeOrderModal);
cancelOrder.addEventListener('click', closeOrderModal);

orderForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  // Простий HTML5 валідаційний контроль
  if(!orderForm.checkValidity()){
    orderForm.reportValidity();
    return;
  }

  // Зібрати дані форми
  const data = {
    id: 'ord_' + Date.now(),
    name: document.getElementById('orderName').value.trim(),
    email: document.getElementById('orderEmail').value.trim(),
    phone: document.getElementById('orderPhone').value.trim(),
    address: document.getElementById('orderAddress').value.trim(),
    city: document.getElementById('orderCity').value.trim(),
    postal: document.getElementById('orderPostal').value.trim(),
    payment: document.getElementById('orderPayment').value,
    items: Object.values(cart).map(i=> ({ id:i.id, title:i.title, qty:i.qty, price:i.price })),
    total: Object.values(cart).reduce((s,i)=> s + i.price*i.qty, 0),
    created: new Date().toISOString()
  };

  // Зберегти замовлення в localStorage під ключем orders
  const ORDERS_KEY = 'mangalordium_orders_v1';
  const prev = JSON.parse(localStorage.getItem(ORDERS_KEY) || '[]');
  prev.push(data);
  localStorage.setItem(ORDERS_KEY, JSON.stringify(prev));

  // Показати повідомлення про успіх і очистити кошик
  orderForm.style.display = 'none';
  orderSuccessText.textContent = `Номер замовлення: ${data.id}. Ми надіслали підтвердження на ${data.email || 'вказану пошту'}.`;
  orderSuccess.hidden = false;

  cart = {}; saveCart(); updateCartUI();
  // Не закриваємо модаль автоматично — даємо побачити номер.
});

closeSuccess.addEventListener('click', ()=>{ closeOrderModal(); });

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
  return productsData.filter(p => (p.title+ ' ' + p.desc).toLowerCase().includes(query));
}

searchInput.addEventListener('input', (e)=>{
  const val = e.target.value;
  renderProducts(filterProducts(val));

  // search field hover pulse animation
  anime.remove('#search');
  anime({ targets: '#search', scale: [1,1.01,1], duration: 400, easing: 'easeInOutSine' });
});

clearBtn.addEventListener('click', ()=>{ searchInput.value=''; searchInput.dispatchEvent(new Event('input')); searchInput.focus(); });

// Theme toggle
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
  renderProducts(filterProducts(searchInput.value));
});

// Ініціалізація
renderProducts(productsData);
