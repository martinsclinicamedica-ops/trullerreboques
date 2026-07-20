/* =========================================================
   TRULLER REBOQUES — Interactions
   Pure JavaScript, no dependencies
   ========================================================= */

(() => {
  'use strict';

  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

  const WHATSAPP_NUMBER = '5541987394148';
  const catalogItems = [
    { src: 'amarelo.webp', title: 'Food Truck Amarelo', category: 'food-trucks', label: 'Food Truck', size: 'wide' },
    { src: 'azul.webp', title: 'Baú Azul Personalizado', category: 'trailers', label: 'Trailer e Baú', size: 'tall' },
    { src: 'bau-simples-preto.webp', title: 'Baú Utilitário Preto', category: 'trailers', label: 'Trailer e Baú' },
    { src: 'bicicletas-2.webp', title: 'Carretinha para Bicicletas', category: 'fazendinhas', label: 'Projeto utilitário', size: 'tall' },
    { src: 'bicicletas.webp', title: 'Suporte para Transporte de Bicicletas', category: 'fazendinhas', label: 'Projeto utilitário' },
    { src: 'bob-esponja.webp', title: 'Food Truck Temático', category: 'food-trucks', label: 'Food Truck' },
    { src: 'bug-encima-trucada.webp', title: 'Plataforma Trucada para Veículo', category: 'especiais', label: 'Projeto especial', size: 'wide' },
    { src: 'camping.webp', title: 'Trailer para Camping', category: 'trailers', label: 'Trailer especial' },
    { src: 'cinza-simpls.webp', title: 'Baú Cinza Compacto', category: 'trailers', label: 'Trailer e Baú' },
    { src: 'cinza.webp', title: 'Baú Cinza Sob Medida', category: 'trailers', label: 'Trailer e Baú', size: 'tall' },
    { src: 'fazendinha-alta.webp', title: 'Fazendinha com Grade Alta', category: 'fazendinhas', label: 'Carretinha Fazendinha', size: 'wide' },
    { src: 'fazendinha-com-rampa.webp', title: 'Fazendinha com Rampa Dupla', category: 'fazendinhas', label: 'Carretinha Fazendinha' },
    { src: 'fazendinha-personalizada.webp', title: 'Fazendinha Personalizada', category: 'fazendinhas', label: 'Carretinha Fazendinha', size: 'tall' },
    { src: 'fazendinha-rampa-2.webp', title: 'Fazendinha com Rampa Interna', category: 'fazendinhas', label: 'Carretinha Fazendinha' },
    { src: 'fazendinha-trucada.webp', title: 'Fazendinha Trucada', category: 'fazendinhas', label: 'Carretinha Fazendinha', size: 'wide' },
    { src: 'fazendinha.webp', title: 'Fazendinha Clássica', category: 'fazendinhas', label: 'Carretinha Fazendinha', size: 'tall' },
    { src: 'fazendinhas-empilhadas.webp', title: 'Linha de Produção Fazendinha', category: 'fazendinhas', label: 'Fabricação própria' },
    { src: 'frente-bau-branco.webp', title: 'Baú Branco — Vista Frontal', category: 'trailers', label: 'Trailer e Baú' },
    { src: 'fundo-metal.webp', title: 'Estrutura Interna Reforçada', category: 'detalhes', label: 'Detalhe construtivo' },
    { src: 'interior-bau-branco.webp', title: 'Interior de Baú Branco', category: 'detalhes', label: 'Detalhe interno', size: 'tall' },
    { src: 'interior-com-janela.webp', title: 'Interior com Janela', category: 'detalhes', label: 'Detalhe interno' },
    { src: 'interior-trailer.webp', title: 'Acabamento Interno de Trailer', category: 'detalhes', label: 'Detalhe interno' },
    { src: 'interior.webp', title: 'Interior Amplo de Baú', category: 'detalhes', label: 'Detalhe interno', size: 'tall' },
    { src: 'jetski-frente.webp', title: 'Estrutura para Jet Ski — Dianteira', category: 'especiais', label: 'Reboque Jet Ski' },
    { src: 'jetski.webp', title: 'Reboque para Jet Ski', category: 'especiais', label: 'Reboque Jet Ski', size: 'tall' },
    { src: 'lanche-branco.webp', title: 'Food Truck Branco', category: 'food-trucks', label: 'Food Truck', size: 'wide' },
    { src: 'lanche-vermelho-2.webp', title: 'Food Truck Vermelho — Vista Lateral', category: 'food-trucks', label: 'Food Truck', size: 'tall' },
    { src: 'lanche-vermelho.webp', title: 'Food Truck Vermelho', category: 'food-trucks', label: 'Food Truck' },
    { src: 'laranja-e-preto.webp', title: 'Food Truck Laranja e Preto', category: 'food-trucks', label: 'Food Truck', size: 'tall' },
    { src: 'pequeno-cinza.webp', title: 'Food Cart Cinza Compacto', category: 'food-trucks', label: 'Food Truck compacto' },
    { src: 'plataforma.webp', title: 'Plataforma Trucada', category: 'especiais', label: 'Projeto especial', size: 'wide' },
    { src: 'preto-com-escada.webp', title: 'Baú Preto com Escada', category: 'trailers', label: 'Trailer e Baú', size: 'tall' },
    { src: 'preto-pequeno.webp', title: 'Baú Preto Compacto', category: 'trailers', label: 'Trailer e Baú' },
    { src: 'trailer-azul.webp', title: 'Trailer Azul', category: 'trailers', label: 'Trailer', size: 'tall' },
    { src: 'trailer-laranja.webp', title: 'Trailer Laranja', category: 'trailers', label: 'Trailer' },
    { src: 'tras-bau-branco.webp', title: 'Baú Branco — Vista Traseira', category: 'trailers', label: 'Trailer e Baú' },
    { src: 'tras-pequeno.webp', title: 'Baú Compacto — Vista Traseira', category: 'trailers', label: 'Trailer e Baú' },
    { src: 'trucada-alta.webp', title: 'Carretinha Trucada com Grade Alta', category: 'especiais', label: 'Carreta trucada', size: 'tall' },
    { src: 'trucada-com-step.webp', title: 'Carretinha Trucada com Estepe', category: 'especiais', label: 'Carreta trucada', size: 'wide' },
    { src: 'trucada-reforada.webp', title: 'Carretinha Trucada Reforçada', category: 'especiais', label: 'Carreta reforçada', size: 'tall' },
    { src: 'trucado-preto.webp', title: 'Baú Preto Trucado', category: 'trailers', label: 'Trailer e Baú' },
    { src: 'viajante.webp', title: 'Trailer Viajante Personalizado', category: 'trailers', label: 'Trailer especial', size: 'wide' },
    { src: 'viajante2.webp', title: 'Trailer Viajante de Eixo Duplo', category: 'trailers', label: 'Trailer especial', size: 'wide' }
  ];

  let activeFilter = 'todos';
  let visibleItems = [...catalogItems];
  let lightboxIndex = 0;
  let lastFocusedElement = null;

  const createWhatsAppUrl = (message) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  // Header, progress and back-to-top
  const siteHeader = $('#siteHeader');
  const pageProgress = $('#pageProgress');
  const backToTop = $('#backToTop');

  const updateScrollUi = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;

    siteHeader?.classList.toggle('scrolled', scrollTop > 24);
    backToTop?.classList.toggle('visible', scrollTop > 650);
    if (pageProgress) pageProgress.style.width = `${Math.min(progress, 100)}%`;
  };

  window.addEventListener('scroll', updateScrollUi, { passive: true });
  updateScrollUi();

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Mobile navigation
  const menuToggle = $('#menuToggle');
  const mobileMenu = $('#mobileMenu');

  const setMobileMenu = (open) => {
    menuToggle?.classList.toggle('active', open);
    menuToggle?.setAttribute('aria-expanded', String(open));
    mobileMenu?.classList.toggle('open', open);
    mobileMenu?.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('menu-open', open);
  };

  menuToggle?.addEventListener('click', () => {
    setMobileMenu(!mobileMenu?.classList.contains('open'));
  });

  $$('#mobileMenu a').forEach((link) => {
    link.addEventListener('click', () => setMobileMenu(false));
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1180) setMobileMenu(false);
  });

  // Reveal animations
  const revealElements = $$('.reveal-up');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add('is-visible'));
  }

  // Active navigation state
  const sections = $$('main section[id]');
  const navLinks = $$('.desktop-nav .nav-link');
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: '-35% 0px -58% 0px', threshold: 0 });

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // Animated counters
  const counters = $$('.counter');
  const animateCounter = (element) => {
    const target = Number(element.dataset.target || 0);
    const duration = 1000;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      element.textContent = Math.round(target * eased).toString();
      if (elapsed < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });

    counters.forEach((counter) => counterObserver.observe(counter));
  } else {
    counters.forEach(animateCounter);
  }

  // Catalog gallery
  const catalogGrid = $('#catalogGrid');
  const catalogCount = $('#catalogCount');
  const filterButtons = $$('.filter-btn');

  const renderCatalog = () => {
    if (!catalogGrid) return;

    visibleItems = activeFilter === 'todos'
      ? [...catalogItems]
      : catalogItems.filter((item) => item.category === activeFilter);

    catalogGrid.innerHTML = visibleItems.map((item, index) => {
      const sizeClass = item.size ? ` ${item.size}` : '';
      const imagePath = `assets/img/catalogo/${item.src}`;
      return `
        <article class="catalog-item${sizeClass}" tabindex="0" role="button" aria-label="Ampliar ${item.title}" data-index="${index}" style="animation-delay:${Math.min(index * 28, 280)}ms">
          <img src="${imagePath}" alt="${item.title} fabricado pela Truller Reboques" loading="lazy" decoding="async">
          <div class="catalog-item-content">
            <div><small>${item.label}</small><h3>${item.title}</h3></div>
            <span class="catalog-item-open" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7"/></svg></span>
          </div>
        </article>`;
    }).join('');

    if (catalogCount) catalogCount.textContent = String(visibleItems.length);

    $$('.catalog-item', catalogGrid).forEach((item) => {
      const open = () => openLightbox(Number(item.dataset.index));
      item.addEventListener('click', open);
      item.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          open();
        }
      });
    });
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter || 'todos';
      filterButtons.forEach((item) => item.classList.toggle('active', item === button));
      renderCatalog();
    });
  });

  renderCatalog();

  // Lightbox
  const lightbox = $('#lightbox');
  const lightboxImage = $('#lightboxImage');
  const lightboxTitle = $('#lightboxTitle');
  const lightboxCategory = $('#lightboxCategory');
  const lightboxCounter = $('#lightboxCounter');
  const lightboxQuote = $('#lightboxQuote');
  const lightboxPrev = $('#lightboxPrev');
  const lightboxNext = $('#lightboxNext');

  const updateLightbox = () => {
    const item = visibleItems[lightboxIndex];
    if (!item) return;

    if (lightboxImage) {
      lightboxImage.src = `assets/img/catalogo/${item.src}`;
      lightboxImage.alt = `${item.title} fabricado pela Truller Reboques`;
    }
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxCategory) lightboxCategory.textContent = item.label.toUpperCase();
    if (lightboxCounter) lightboxCounter.textContent = `${lightboxIndex + 1} / ${visibleItems.length}`;
    if (lightboxQuote) {
      lightboxQuote.href = createWhatsAppUrl(`Olá, vi o modelo “${item.title}” no catálogo do site da Truller Reboques e gostaria de solicitar um orçamento deste modelo.`);
    }
  };

  const openLightbox = (index) => {
    if (!lightbox || !visibleItems.length) return;
    lastFocusedElement = document.activeElement;
    lightboxIndex = index;
    updateLightbox();
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    $('.lightbox-close', lightbox)?.focus();
  };

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    if (lightboxImage) lightboxImage.src = '';
    if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
  };

  const moveLightbox = (direction) => {
    lightboxIndex = (lightboxIndex + direction + visibleItems.length) % visibleItems.length;
    updateLightbox();
  };

  $$('[data-lightbox-close]').forEach((control) => control.addEventListener('click', closeLightbox));
  lightboxPrev?.addEventListener('click', () => moveLightbox(-1));
  lightboxNext?.addEventListener('click', () => moveLightbox(1));

  document.addEventListener('keydown', (event) => {
    if (!lightbox?.classList.contains('open')) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') moveLightbox(-1);
    if (event.key === 'ArrowRight') moveLightbox(1);

    if (event.key === 'Tab') {
      const focusable = $$('button, a[href]', lightbox).filter((element) => !element.hasAttribute('disabled'));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }
  });

  // Product quote shortcuts
  $$('.product-card').forEach((card) => {
    const button = $('.product-quote', card);
    button?.addEventListener('click', () => {
      const interest = card.dataset.interest || 'Projeto sob medida';
      const message = `Olá, vim pelo site da Truller Reboques e gostaria de solicitar um orçamento para: ${interest}.`;
      window.open(createWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
    });
  });

  // Form -> WhatsApp
  const quoteForm = $('#quoteForm');
  quoteForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!quoteForm.checkValidity()) {
      quoteForm.reportValidity();
      return;
    }

    const data = new FormData(quoteForm);
    const name = String(data.get('name') || '').trim();
    const city = String(data.get('city') || '').trim();
    const interest = String(data.get('interest') || '').trim();
    const details = String(data.get('details') || '').trim();

    const message = [
      'Olá, vim pelo site da Truller Reboques e gostaria de solicitar um orçamento.',
      '',
      `Nome: ${name}`,
      `Cidade/Estado: ${city}`,
      `Produto de interesse: ${interest}`,
      details ? `Detalhes do projeto: ${details}` : null
    ].filter(Boolean).join('\n');

    window.open(createWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  });

  // Current year
  const currentYear = $('#currentYear');
  if (currentYear) currentYear.textContent = String(new Date().getFullYear());
})();
