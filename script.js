const PRODUCTS = [
  {
  id: "tempestade-v9",
  name: "Tempestade V-9",
  image: "armas/Tempestade V-9.png",
  price: 12990,
  group: "Rifle Tático",
  tagline: "Potência, precisão e confiabilidade em qualquer missão.",
  description:
    "A Tempestade V-9 nasceu para operações que não toleram hesitação. Estrutura modular em alumínio aeronáutico, culatra ajustável e acabamento Cerakote Black que resiste ao desgaste diário de treino intensivo. Equilíbrio entre peso e estabilidade que se sente já no primeiro disparo.",
  specs: {
    Calibre: "5.56 NATO",
    Capacidade: "30 disparos",
    Comprimento: "840 mm",
    Peso: "3,25 kg",
    Cano: "16 polegadas",
    Acabamento: "Cerakote Black",
    Sistema: "Modular",
    Material: "Alumínio aeronáutico e aço tratado",
    },
  },
  {
  id: "eclipse-negro",
  name: "Eclipse Negro",
  image: "armas/eclipsenegro.png",
  price: 6490,
  group: "Pistola Semiautomática",
  tagline: "Compacta, elegante e pronta para qualquer desafio.",
  description:
    "Pequena no porte, séria no propósito. A Eclipse Negro foi desenhada para quem precisa de discrição sem perder controle: corpo compacto, slide em liga reforçada e empunhadura que se ajusta naturalmente à mão. Acabamento fosco que esconde marcas de uso ao longo dos anos.",
  specs: {
    Calibre: "9×19 mm",
    Capacidade: "17 disparos",
    Comprimento: "190 mm",
    Peso: "760 g",
    Cano: "4,5 polegadas",
    Acabamento: "Cerakote Black",
    Sistema: "Semiautomático",
    Material: "Aço tratado e polímero de alta resistência",
  },
},
  {
  id: "dragao-escarlate",
  name: "Dragão Escarlate",
  image: "armas/Dragão Escarlate.png",
  price: 11490,
  group: "Carabina Tática",
  tagline: "Força e precisão em um design marcante.",
  description:
    "Visual que chama atenção, comportamento que justifica. A Dragão Escarlate cruza robustez de carabina tática com detalhes em vermelho anodizado que marcam território visualmente. Por baixo do estilo, uma estrutura pensada para absorver recuo e manter o ponto de mira estável tiro após tiro.",
  specs: {
    Calibre: "7.62×39 mm",
    Capacidade: "30 disparos",
    Comprimento: "870 mm",
    Peso: "3,55 kg",
    Cano: "16 polegadas",
    Acabamento: "Cerakote Black com detalhes Red Anodized",
    Sistema: "Semiautomático",
    Material: "Alumínio aeronáutico e aço tratado",
  },
},
  {
  id: "falcao-de-titanio",
  name: "Falcão de Titânio",
  image: "armas/Falcão de Titânio.png",
  price: 14990,
  group: "Rifle de Precisão",
  tagline: "Precisão absoluta para alvos de longa distância.",
  description:
    "Feito para a distância em que erros não se corrigem. O Falcão de Titânio usa um cano de 24 polegadas e ferrolho manual para entregar a consistência que tiros de precisão exigem. A liga de titânio na superfície reduz o peso sem comprometer a rigidez da estrutura.",
  specs: {
    Calibre: ".308 Winchester",
    Capacidade: "10 disparos",
    Comprimento: "1120 mm",
    Peso: "5,10 kg",
    Cano: "24 polegadas",
    Acabamento: "Titanium Gray Cerakote",
    Sistema: "Ferrolho (Bolt Action)",
    Material: "Alumínio aeronáutico e aço de alta resistência",
  },
},
  {
  id: "vortice-x12",
  name: "Vórtice X-12",
  image: "armas/Vórtice X-12.png",
  price: 11990,
  group: "Rifle Tático",
  tagline: "Tecnologia de ponta para máxima versatilidade.",
  description:
    "O Vórtice X-12 é a resposta para quem troca de missão sem trocar de arma. Plataforma modular que aceita configurações rápidas de acessórios, mantendo o equilíbrio entre cano e coronha mesmo depois de qualquer ajuste. Pensado para quem nunca sabe exatamente o que o dia vai exigir.",
  specs: {
    Calibre: "5.56 NATO",
    Capacidade: "30 disparos",
    Comprimento: "830 mm",
    Peso: "3,15 kg",
    Cano: "16 polegadas",
    Acabamento: "Cerakote Black",
    Sistema: "Semiautomático Modular",
    Material: "Alumínio aeronáutico e aço tratado",
  },
},
{
  id: "leviata",
  name: "Leviatã",
  image: "armas/Leviatã.png",
  price: 15990,
  group: "Rifle de Assalto",
  tagline: "Domine qualquer cenário com força e estabilidade.",
  description:
    "Não é o rifle mais leve da linha, e não tenta ser. O Leviatã prioriza massa e estabilidade sobre agilidade, entregando o tipo de presença que se impõe em qualquer cenário. Cada disparo se sente ancorado, como se a arma absorvesse o impacto antes que ele chegue ao ombro.",
  specs: {
    Calibre: "7.62 NATO",
    Capacidade: "20 disparos",
    Comprimento: "980 mm",
    Peso: "4,40 kg",
    Cano: "18 polegadas",
    Acabamento: "Cerakote Black",
    Sistema: "Semiautomático",
    Material: "Alumínio aeronáutico e aço de alta resistência",
  },
},
{
  id: "spectra-mk4",
  name: "Spectra MK-IV",
  image: "armas/Spectra MK-IV.png",
  price: 8990,
  group: "Submetralhadora",
  tagline: "Leve, ágil e construída para máxima eficiência.",
  description:
    "Curta, rápida e feita para ambientes onde espaço é luxo. A Spectra MK-IV pesa pouco mais de dois quilos e meio, troca de posição com a mesma agilidade que troca de alvo. Ideal para quem trabalha em corredores, portas e distâncias que se medem em metros, não em centenas deles.",
  specs: {
    Calibre: "9×19 mm",
    Capacidade: "30 disparos",
    Comprimento: "640 mm",
    Peso: "2,65 kg",
    Cano: "8 polegadas",
    Acabamento: "Cerakote Black",
    Sistema: "Semiautomático",
    Material: "Alumínio aeronáutico e aço tratado",
  },
},
{
  id: "kronos",
  name: "Kronos",
  image: "armas/Kronos.png",
  price: 17490,
  group: "Rifle de Precisão",
  tagline: "Precisão extrema para os desafios mais exigentes.",
  description:
    "O calibre .338 Lapua Magnum não perdoa erros de fabricação, e foi exatamente esse padrão que guiou o desenvolvimento do Kronos. Câmara usinada com tolerâncias mínimas, cano de 26 polegadas e um ferrolho que trava com precisão cirúrgica a cada recarga manual.",
  specs: {
    Calibre: ".338 Lapua Magnum",
    Capacidade: "10 disparos",
    Comprimento: "1180 mm",
    Peso: "6,10 kg",
    Cano: "26 polegadas",
    Acabamento: "Cerakote Black",
    Sistema: "Ferrolho (Bolt Action)",
    Material: "Alumínio aeronáutico e aço de alta resistência",
  },
},
{
  id: "hydra-vx",
  name: "Hydra VX",
  image: "armas/Hydra VX.png",
  price: 15490,
  group: "Rifle de Assalto",
  tagline: "Modularidade sem limites. Desempenho incomparável.",
  description:
    "A Hydra VX existe para quem detesta limitações. O sistema modular aceita trocas de configuração em campo, sem ferramentas especiais, sem perda de zero de mira. Alumínio aeronáutico no corpo, Cerakote Black na superfície, e espaço de sobra para adaptar a arma à missão do dia.",
  specs: {
    Calibre: "5.56 NATO",
    Capacidade: "30 disparos",
    Comprimento: "860 mm",
    Peso: "3,40 kg",
    Cano: "16 polegadas",
    Acabamento: "Cerakote Black",
    Sistema: "AR-15 Modular",
    Material: "Alumínio aeronáutico e aço de alta resistência",
  },
},
{
  id: "ragnarok-77",
  name: "Ragnarok-77",
  image: "armas/Ragnarok-77.png",
  price: 18490,
  group: "Rifle de Combate",
  tagline: "Construído para dominar qualquer cenário.",
  description:
    "O Ragnarok-77 não foi desenhado para passar despercebido. É a opção pesada da linha de combate: estrutura reforçada para sustentar tiro automático prolongado, ergonomia recalculada para reduzir fadiga em operações longas, e uma presença que naturalmente assume a linha de frente.",
  specs: {
    Calibre: "7.62 NATO",
    Capacidade: "20 disparos",
    Comprimento: "965 mm",
    Peso: "4,65 kg",
    Cano: "18 polegadas",
    Acabamento: "Cerakote Black",
    Sistema: "Semiautomático",
    Material: "Alumínio aeronáutico e aço de alta resistência",
  },
},
{
  id: "nebulosa-prime",
  name: "Nebulosa Prime",
  image: "armas/Nebulosa Prime.png",
  price: 16990,
  group: "Rifle de Precisão",
  tagline: "Precisão refinada para desempenho superior.",
  description:
    "Em 6.5 Creedmoor, a Nebulosa Prime mira onde rifles convencionais começam a perder consistência. Câmara de ferrolho manual, cano longo de 24 polegadas e um acabamento Graphite Black que reduz reflexo em qualquer condição de luz. Feita para quem mede sucesso em centímetros a 500 metros.",
  specs: {
    Calibre: "6.5 Creedmoor",
    Capacidade: "10 disparos",
    Comprimento: "1100 mm",
    Peso: "5,30 kg",
    Cano: "24 polegadas",
    Acabamento: "Cerakote Graphite Black",
    Sistema: "Ferrolho (Bolt Action)",
    Material: "Alumínio aeronáutico e aço de alta resistência",
  },
},
{
  id: "martelo-celestial",
  name: "Martelo Celestial",
  image: "armas/Martelo Celestial.png",
  price: 19490,
  group: "Rifle Antimaterial",
  tagline: "Potência extrema. Construção imponente.",
  description:
    "Quase 13 quilos de aço e alumínio dedicados a um único propósito: alcance antimaterial em calibre .50 BMG. O Martelo Celestial não é uma arma para o dia a dia — é a resposta da ANTARCK para cenários que exigem poder de parada muito além do convencional.",
  specs: {
    Calibre: ".50 BMG",
    Capacidade: "5 disparos",
    Comprimento: "1450 mm",
    Peso: "12,80 kg",
    Cano: "29 polegadas",
    Acabamento: "Cerakote Black",
    Sistema: "Ferrolho (Bolt Action)",
    Material: "Alumínio aeronáutico e aço de alta resistência",
  },
},
{
  id: "solaris",
  name: "Solaris",
  image: "armas/Solaris.png",
  price: 14490,
  group: "Carabina Tática",
  tagline: "Equilíbrio perfeito entre leveza e precisão.",
  description:
    "Nem todo trabalho pede a maior arma da prateleira. A Solaris foi pensada para o meio-termo: leve o suficiente para deslocamentos longos, estável o suficiente para não perder precisão no caminho. Uma carabina que se adapta à tarefa em vez de exigir que a tarefa se adapte a ela.",
  specs: {
    Calibre: "5.56 NATO",
    Capacidade: "30 disparos",
    Comprimento: "790 mm",
    Peso: "2,95 kg",
    Cano: "14,5 polegadas",
    Acabamento: "Cerakote Black",
    Sistema: "Semiautomático",
    Material: "Alumínio aeronáutico e aço de alta resistência",
  },
},
{
  id: "fantasma-azul",
  name: "Fantasma Azul",
  image: "armas/Fantasma Azul.png",
  price: 5990,
  group: "Pistola Semiautomática",
  tagline: "Discrição, precisão e elegância em cada detalhe.",
  description:
    "Discrição tem cor, e para a ANTARCK ela é azul-titânio sobre preto fosco. A Fantasma Azul prioriza resposta rápida em situações de curta distância, com um perfil baixo que facilita o porte velado sem sacrificar capacidade de 17 disparos.",
  specs: {
    Calibre: "9×19 mm",
    Capacidade: "17 disparos",
    Comprimento: "185 mm",
    Peso: "740 g",
    Cano: "4,3 polegadas",
    Acabamento: "Cerakote Black com detalhes Blue Titanium",
    Sistema: "Semiautomático",
    Material: "Aço tratado e polímero de alta resistência",
  },
},
{
  id: "inferno-rubro",
  name: "Inferno Rubro",
  image: "armas/Inferno Rubro.png",
  price: 13490,
  group: "Carabina Tática",
  tagline: "Agressividade, controle e desempenho em perfeita harmonia.",
  description:
    "Vermelho anodizado sobre preto fosco não é só estética — é identidade visual que se vê de longe, mesmo em pouca luz. A Inferno Rubro entrega 30 disparos em 7.62×39mm com a agressividade visual de quem não pretende se camuflar, apenas dominar o cenário à vista.",
  specs: {
    Calibre: "7.62×39 mm",
    Capacidade: "30 disparos",
    Comprimento: "845 mm",
    Peso: "3,60 kg",
    Cano: "16 polegadas",
    Acabamento: "Cerakote Black com detalhes Red Anodized",
    Sistema: "Semiautomático",
    Material: "Alumínio aeronáutico e aço de alta resistência",
  },
},
{
  id: "arcane-x",
  name: "Arcane X",
  image: "armas/Arcane X.png",
  price: 17990,
  group: "Rifle de Elite",
  tagline: "Tecnologia avançada com desempenho excepcional.",
  description:
    "O calibre 6.8 SPC ocupa um espaço raro entre velocidade e energia no impacto, e o Arcane X foi construído especificamente em torno dessa vantagem. Sistema modular, cano de 18 polegadas e um acabamento Graphite Black que fecha o pacote mais técnico da linha de elite ANTARCK.",
  specs: {
    Calibre: "6.8 SPC",
    Capacidade: "30 disparos",
    Comprimento: "910 mm",
    Peso: "3,85 kg",
    Cano: "18 polegadas",
    Acabamento: "Cerakote Graphite Black",
    Sistema: "Semiautomático Modular",
    Material: "Alumínio aeronáutico e aço de alta resistência",
  },
},
];

const PRODUCT_DETAIL_SPECS = {
  "tempestade-v9": {
    "Peso aproximado": "3,25 kg",
    "Comprimento total": "840 mm",
    "Comprimento do cano": '16"',
    "Material": "Alumínio aeronáutico e aço tratado",
    "Acabamento": "Cerakote Black",
  },

  "eclipse-negro": {
    "Peso aproximado": "760 g",
    "Comprimento total": "190 mm",
    "Comprimento do cano": '4,5"',
    "Material": "Aço tratado e polímero de alta resistência",
    "Acabamento": "Cerakote Black",
  },

  "dragao-escarlate": {
    "Peso aproximado": "3,55 kg",
    "Comprimento total": "870 mm",
    "Comprimento do cano": '16"',
    "Material": "Alumínio aeronáutico e aço tratado",
    "Acabamento": "Cerakote Black / Red Anodized",
  },

  "falcao-de-titanio": {
    "Peso aproximado": "5,10 kg",
    "Comprimento total": "1120 mm",
    "Comprimento do cano": '24"',
    "Material": "Alumínio aeronáutico e aço de alta resistência",
    "Acabamento": "Titanium Gray Cerakote",
  },

  "vortice-x12": {
    "Peso aproximado": "3,15 kg",
    "Comprimento total": "830 mm",
    "Comprimento do cano": '16"',
    "Material": "Alumínio aeronáutico e aço tratado",
    "Acabamento": "Cerakote Black",
  },

  "leviata": {
    "Peso aproximado": "4,40 kg",
    "Comprimento total": "980 mm",
    "Comprimento do cano": '18"',
    "Material": "Alumínio aeronáutico e aço de alta resistência",
    "Acabamento": "Cerakote Black",
  },

  "spectra-mk4": {
    "Peso aproximado": "2,65 kg",
    "Comprimento total": "640 mm",
    "Comprimento do cano": '8"',
    "Material": "Alumínio aeronáutico e aço tratado",
    "Acabamento": "Cerakote Black",
  },

  "kronos": {
    "Peso aproximado": "6,10 kg",
    "Comprimento total": "1180 mm",
    "Comprimento do cano": '26"',
    "Material": "Alumínio aeronáutico e aço de alta resistência",
    "Acabamento": "Cerakote Black",
  },

  "hydra-vx": {
    "Peso aproximado": "3,40 kg",
    "Comprimento total": "860 mm",
    "Comprimento do cano": '16"',
    "Material": "Alumínio aeronáutico e aço de alta resistência",
    "Acabamento": "Cerakote Black",
  },

  "ragnarok-77": {
    "Peso aproximado": "4,65 kg",
    "Comprimento total": "965 mm",
    "Comprimento do cano": '18"',
    "Material": "Alumínio aeronáutico e aço de alta resistência",
    "Acabamento": "Cerakote Black",
  },

  "nebulosa-prime": {
    "Peso aproximado": "5,30 kg",
    "Comprimento total": "1100 mm",
    "Comprimento do cano": '24"',
    "Material": "Alumínio aeronáutico e aço de alta resistência",
    "Acabamento": "Cerakote Graphite Black",
  },

  "martelo-celestial": {
    "Peso aproximado": "12,80 kg",
    "Comprimento total": "1450 mm",
    "Comprimento do cano": '29"',
    "Material": "Alumínio aeronáutico e aço de alta resistência",
    "Acabamento": "Cerakote Black",
  },

  "solaris": {
    "Peso aproximado": "2,95 kg",
    "Comprimento total": "790 mm",
    "Comprimento do cano": '14,5"',
    "Material": "Alumínio aeronáutico e aço de alta resistência",
    "Acabamento": "Cerakote Black",
  },

  "fantasma-azul": {
    "Peso aproximado": "740 g",
    "Comprimento total": "185 mm",
    "Comprimento do cano": '4,3"',
    "Material": "Aço tratado e polímero de alta resistência",
    "Acabamento": "Cerakote Black / Blue Titanium",
  },

  "inferno-rubro": {
    "Peso aproximado": "3,60 kg",
    "Comprimento total": "845 mm",
    "Comprimento do cano": '16"',
    "Material": "Alumínio aeronáutico e aço de alta resistência",
    "Acabamento": "Cerakote Black / Red Anodized",
  },

  "arcane-x": {
    "Peso aproximado": "3,85 kg",
    "Comprimento total": "910 mm",
    "Comprimento do cano": '18"',
    "Material": "Alumínio aeronáutico e aço de alta resistência",
    "Acabamento": "Cerakote Graphite Black",
  },
};

const STORAGE_KEY = "antarck-cart-v1";
const BRL = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

const pageName = (location.pathname.split("/").pop() || "index.html").toLowerCase();
let revealObserver = null;
let memoryCart = {};

function asset(path) {
  return encodeURI(path);
}

function formatMoney(value) {
  return BRL.format(value);
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return { ...memoryCart };
  }
}

function setCart(cart) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  } catch {
    memoryCart = { ...cart };
  }
  updateCartBadge();
}

function updateCartBadge() {
  const cart = getCart();
  const count = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  document.querySelectorAll("[data-cart-badge]").forEach((badge) => {
    badge.textContent = count;
    badge.hidden = count === 0;
  });
}

function addToCart(id, quantity = 1) {
  const cart = getCart();
  cart[id] = (cart[id] || 0) + quantity;
  setCart(cart);
  const product = PRODUCTS.find((item) => item.id === id);
  if (product) {
    toast(`${product.name} adicionada ao carrinho`);
  }
}

function updateQuantity(id, quantity) {
  const cart = getCart();
  if (quantity <= 0) {
    delete cart[id];
  } else {
    cart[id] = quantity;
  }
  setCart(cart);
}

function clearCart() {
  setCart({});
}

function cartItems() {
  const cart = getCart();
  return Object.entries(cart)
    .map(([id, quantity]) => {
      const product = PRODUCTS.find((item) => item.id === id);
      if (!product) return null;
      return {
        ...product,
        quantity,
        total: product.price * quantity,
      };
    })
    .filter(Boolean);
}

function toast(message) {
  let host = document.querySelector("[data-toast]");
  if (!host) {
    host = document.createElement("div");
    host.className = "toast";
    host.setAttribute("data-toast", "");
    host.innerHTML = '<div class="toast__panel"><strong>ANTARCK</strong><span data-toast-message></span></div>';
    document.body.appendChild(host);
  }
  host.querySelector("[data-toast-message]").textContent = message;
  host.classList.add("is-visible");
  clearTimeout(host._timer);
  host._timer = setTimeout(() => host.classList.remove("is-visible"), 2200);
}

function initHeader() {
  const header = document.querySelector(".site-header");
  const drawer = document.querySelector("[data-mobile-drawer]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const overlay = document.querySelector("[data-drawer-overlay]");

  const updateHeaderState = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  if (menuToggle && drawer) {
    const closeDrawer = () => {
      drawer.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    };
    menuToggle.addEventListener("click", () => {
      const open = drawer.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });
    overlay?.addEventListener("click", closeDrawer);
    drawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeDrawer);
    });
  }

  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    const target = link.getAttribute("href") || "";
    const targetName = target.split("/").pop().toLowerCase();
    if (targetName === pageName) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });

  updateCartBadge();
}

function buildProductCard(product) {
  return `
    <article class="product-card reveal">
      <a class="product-card__media" href="produto.html?id=${encodeURIComponent(product.id)}" aria-label="${product.name}">
        <img src="${asset(product.image)}" alt="${product.name}" loading="lazy">
      </a>
      <div class="product-card__body">
        <div class="product-card__meta">
          <div>
            <div class="badge">${product.group}</div>
          </div>
          <div class="product-card__price">${formatMoney(product.price)}</div>
        </div>
        <a class="product-card__name" href="produto.html?id=${encodeURIComponent(product.id)}">${product.name}</a>
        <p class="muted">${product.tagline}</p>
        <div class="product-card__actions">
          <button class="btn btn--primary" data-add-to-cart="${product.id}">Comprar</button>
        </div>
      </div>
    </article>
  `;
}

function renderProductGrid(container, list) {
  if (!container) return;
  if (!list.length) {
    container.innerHTML = '<div class="empty-state reveal">Nenhum produto encontrado para este filtro.</div>';
    observeRevealTargets(container);
    return;
  }
  container.innerHTML = list.map(buildProductCard).join("");
  bindAddToCart(container);
  observeRevealTargets(container);
}

function bindAddToCart(scope = document) {
  scope.querySelectorAll("[data-add-to-cart]").forEach((button) => {
    if (button.dataset.bound === "1") return;
    button.dataset.bound = "1";
    button.addEventListener("click", () => addToCart(button.dataset.addToCart));
  });
}

function initCarousel() {
  const root = document.querySelector("[data-carousel]");
  if (!root) return;
  const slides = Array.from(root.querySelectorAll("[data-slide]"));
  const viewport = root.querySelector(".hero-carousel__viewport");
  if (!slides.length) return;

  let index = 0;

  const applyCarouselRatio = (slide) => {
    if (!viewport || !slide) return;
    const img = slide.querySelector("img");
    if (!img) return;

    const update = () => {
      if (!img.naturalWidth || !img.naturalHeight) return;
      viewport.style.setProperty("--carousel-ratio", `${img.naturalWidth} / ${img.naturalHeight}`);
    };

    if (img.complete) {
      update();
    } else {
      img.addEventListener("load", update, { once: true });
    }
  };

  slides.forEach((slide) => applyCarouselRatio(slide));

  const show = (nextIndex) => {
    index = (nextIndex + slides.length) % slides.length;
    applyCarouselRatio(slides[index]);
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === index);
    });
  };

  let timer;
  const tick = () => show(index + 1);
  const restart = (delay = 2000) => {
    clearInterval(timer);
    timer = setInterval(tick, delay);
  };

  show(0);
  requestAnimationFrame(() => restart(2000));
}

function initHome() {
  const featured = document.querySelector("[data-featured-grid]");
  if (featured) {
    renderProductGrid(featured, PRODUCTS.slice(0, 4));
  }
}

function initProductsPage() {
  const grid = document.querySelector("[data-products-grid]");
  if (!grid) return;

  renderProductGrid(grid, PRODUCTS);
}

function initProductPage() {
  const host = document.querySelector("[data-product-detail]");
  if (!host) return;

  const params = new URLSearchParams(location.search);
  const product = PRODUCTS.find((item) => item.id === params.get("id")) || PRODUCTS[0];
  const related = PRODUCTS.filter((item) => item.id !== product.id).slice(0, 4);
  const quickSpecs = Object.entries(product.specs)
    .map(([label, value]) => `<div class="spec"><span>${label}</span><strong>${value}</strong></div>`)
    .join("");
  const detailSpecs = Object.entries(PRODUCT_DETAIL_SPECS[product.id] || {})
    .map(([label, value]) => `<div class="spec"><span>${label}</span><strong>${value}</strong></div>`)
    .join("");

  document.title = `ANTARCK | ${product.name}`;

  host.innerHTML = `
    <div class="detail-layout reveal">
      <article class="detail-card">
        <div class="detail-media">
          <img src="${asset(product.image)}" alt="${product.name}">
        </div>
      </article>
      <article class="detail-card">
        <div class="detail-body">
          <span class="badge">${product.group}</span>
          <h1 class="detail-title">${product.name}</h1>
          <p class="muted" style="max-width: 58ch;">${product.description}</p>
          <div class="detail-price">${formatMoney(product.price)}</div>
          <div class="detail-specs">${quickSpecs}</div>
          <div class="btn-row">
            <button class="btn btn--primary" data-add-to-cart="${product.id}">Adicionar ao carrinho</button>
            <a class="btn btn--ghost" href="carrinho.html">Ver carrinho</a>
          </div>
          <div class="product-feature" style="padding:1rem; border-radius: 22px;">
            <strong style="display:block; margin-bottom:0.35rem;">Destaque da coleção</strong>
            <p class="muted">${product.tagline}</p>
          </div>
        </div>
      </article>
    </div>
    <div class="section-block">
      <div class="eyebrow">Ficha técnica</div>
      <h2 class="section-title">Especificações do modelo</h2>
      <p class="section-lead">Cada arma mantém uma composição própria, com dados organizados para leitura rápida e consulta objetiva.</p>
      <div class="detail-card" style="margin-top:1rem;">
        <div class="detail-specs detail-specs--sheet">${detailSpecs}</div>
      </div>
    </div>
    <section class="section-block">
      <div class="eyebrow">Relacionados</div>
      <h2 class="section-title">Outros modelos da ANTARCK</h2>
      
      <div style="margin-top:1.1rem;" class="products-grid" data-related-grid></div>
    </section>
  `;

  bindAddToCart(host);
  const relatedGrid = host.querySelector("[data-related-grid]");
  renderProductGrid(relatedGrid, related);
  observeRevealTargets(host);
}

function initCartPage() {
  const host = document.querySelector("[data-cart-root]");
  if (!host) return;

  const render = () => {
    const items = cartItems();

    if (!items.length) {
      host.innerHTML = `
        <div class="cart-empty reveal">
          <div class="cart-empty__icon">
            <img src="${asset("logoeoutrasimagens/carrinho.png")}" alt="Carrinho vazio">
          </div>
          <h1 class="section-title" style="margin-bottom:0.5rem;">Seu carrinho está vazio</h1>
          <p class="section-lead" style="margin:0 auto 1.3rem;">Escolha um produto no catálogo para começar a montar sua seleção ANTARCK.</p>
          <a class="btn btn--primary" href="produtos.html">Explorar catálogo</a>
        </div>
      `;
      observeRevealTargets(host);
      return;
    }

    const subtotal = items.reduce((sum, item) => sum + item.total, 0);
    host.innerHTML = `
      <div class="cart-layout">
        <div class="cart-list" data-cart-items>
          ${items
            .map(
              (item) => `
                <article class="cart-item reveal" data-cart-id="${item.id}">
                  <div class="cart-item__media">
                    <img src="${asset(item.image)}" alt="${item.name}">
                  </div>
                  <div>
                    <h3 class="cart-item__title">${item.name}</h3>
                    <p class="muted">${item.tagline}</p>
                    <div class="cart-item__meta">
                      <span class="badge">${item.group}</span>
                      <strong>${formatMoney(item.price)}</strong>
                    </div>
                  </div>
                  <div class="cart-actions">
                    <div class="quantity">
                      <button type="button" data-cart-action="dec" data-cart-id="${item.id}" aria-label="Diminuir quantidade">-</button>
                      <span>${item.quantity}</span>
                      <button type="button" data-cart-action="inc" data-cart-id="${item.id}" aria-label="Aumentar quantidade">+</button>
                    </div>
                    <button class="btn btn--ghost" type="button" data-cart-action="remove" data-cart-id="${item.id}">Remover</button>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
        <aside class="summary-card reveal">
          <h3>Resumo do pedido</h3>
          <div class="summary-line"><span>Itens</span><strong>${items.length}</strong></div>
          <div class="summary-line"><span>Subtotal</span><strong>${formatMoney(subtotal)}</strong></div>
          <div class="summary-line"><span>Frete</span><strong>A combinar</strong></div>
          <div class="summary-total">Total: ${formatMoney(subtotal)}</div>
          <div class="btn-row" style="margin-top:1rem;">
            <button type="button" class="btn btn--primary" data-checkout-disabled>Finalizar agora</button>
            <a class="btn btn--ghost" href="produtos.html">Continuar comprando</a>
          </div>
        </aside>
      </div>
    `;

    host.querySelectorAll("[data-cart-action]").forEach((button) => {
      button.addEventListener("click", () => {
        const id = button.dataset.cartId;
        const action = button.dataset.cartAction;
        const current = getCart()[id] || 0;
        if (action === "inc") updateQuantity(id, current + 1);
        if (action === "dec") updateQuantity(id, current - 1);
        if (action === "remove") updateQuantity(id, 0);
        render();
      });
    });

    host.querySelector("[data-checkout-disabled]")?.addEventListener("click", () => {
      toast("Finalização indisponível nesta demonstração");
    });

    observeRevealTargets(host);
  };

  render();
}

function initRevealObserver() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((item) => revealObserver.observe(item));
}

function observeRevealTargets(scope) {
  if (!revealObserver || !scope) return;
  scope.querySelectorAll(".reveal").forEach((item) => {
    revealObserver.observe(item);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initCarousel();
  initHome();
  initProductsPage();
  initProductPage();
  initCartPage();
  initRevealObserver();
});
