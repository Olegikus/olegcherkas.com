(() => {
  const query = new URL(document.currentScript.src).searchParams;
  const route = window.location.pathname.replace(/\/+$/, '') || '/';
  const previewPage = route === '/'
    ? 'index.html'
    : route === '/about'
      ? 'about/index.html'
      : route === '/locations'
        ? 'locations/index.html'
        : route === '/results'
          ? 'results/index.html'
          : route.split('/').pop();
  const logoSrc = '/uploads/oc-logo-exact.jpg';
  const locationAssetRoot = '/uploads/location-assets';
  const pageNames = {
    'index.html': 'Homepage',
    'about/index.html': 'About',
    'services.html': 'Services',
    'locations/index.html': 'Locations',
    'results/index.html': 'Results',
    'blog.html': 'Blog',
    'contact.html': 'Contact',
    'b2b-lead-generation-service.html': 'B2B lead generation',
    'service-monthly-linkedin-outreach-management.html': 'Monthly outreach',
    'service-lead-generation.html': 'Lead generation setup',
    'service-profile-optimization.html': 'Profile optimization',
    'service-linkedin-content-for-founders.html': 'Content for founders'
  };

  const captureDevice = query.get('viewport') === 'mobile' || window.innerWidth <= 980 ? 'Mobile' : 'Desktop';
  const menuState = query.get('menu') || 'closed';
  document.documentElement.classList.add(`preview-page-${previewPage.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '')}`);

  document.querySelectorAll('img').forEach((image) => {
    const source = image.getAttribute('src') || '';
    const alt = image.getAttribute('alt') || '';
    if (/linkeol-logo/i.test(source) || /^linkeol$/i.test(alt.trim())) {
      image.src = logoSrc;
      image.alt = 'OC — Oleg Cherkas';
      image.classList.add('oc-brand-mark');
    }
  });

  document.querySelectorAll('.nav-logo').forEach((logo) => {
    logo.classList.add('oc-brand');
    if (!logo.querySelector('.oc-brand-copy')) {
      const copy = document.createElement('span');
      copy.className = 'oc-brand-copy';
      copy.innerHTML = '<strong>Oleg Cherkas</strong><small>B2B Growth Systems</small>';
      logo.append(copy);
    }
  });

  document.querySelectorAll('footer img').forEach((image) => {
    image.src = logoSrc;
    image.alt = 'OC — Oleg Cherkas';
    image.classList.add('oc-footer-mark');
  });

  document.querySelectorAll('footer').forEach((footer) => {
    if (footer.querySelector('.oc-footer-brand')) return;
    const brand = document.createElement('a');
    brand.className = 'oc-footer-brand';
    brand.href = '/';
    brand.setAttribute('aria-label', 'Oleg Cherkas home');
    brand.innerHTML = `<img class="oc-footer-mark" src="${logoSrc}" alt="OC — Oleg Cherkas"><span><strong>Oleg Cherkas</strong><small>B2B Growth Systems</small></span>`;
    footer.prepend(brand);
  });

  const officialIcon = (brand) => {
    const paths = {
      linkedin: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>',
      telegram: '<path d="M23.91 3.79 20.29 20.84c-.27 1.2-.98 1.5-1.98.93l-5.51-4.06-2.66 2.56c-.29.29-.54.54-1.11.54l.4-5.62 10.23-9.24c.45-.4-.1-.62-.69-.22L6.32 13.69.87 11.99c-1.18-.37-1.2-1.18.25-1.75L22.43 2.03c.99-.36 1.85.24 1.48 1.76z"/>',
      whatsapp: '<path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.79a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88M20.46 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45c6.55 0 11.89-5.34 11.9-11.89 0-3.18-1.24-6.17-3.48-8.42z"/>'
    };
    return `<svg class="oc-official-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${paths[brand]}</svg>`;
  };

  document.querySelectorAll('nav a, header a, footer a, .mobile-menu a, .whatsapp-float').forEach((link) => {
    const href = (link.getAttribute('href') || '').toLowerCase();
    const brand = href.includes('linkedin.com') ? 'linkedin' : href.includes('t.me') ? 'telegram' : href.includes('wa.me') ? 'whatsapp' : null;
    if (!brand) return;
    const isSocialControl = link.matches('.header-social, .social-link, .mobile-socials a, .social-links a, .whatsapp-float, [aria-label="LinkedIn"], [aria-label="Telegram"], [aria-label="WhatsApp"]');
    if (!isSocialControl) return;
    link.innerHTML = officialIcon(brand);
    link.classList.add('oc-official-social', `oc-${brand}`);
    link.setAttribute('aria-label', brand === 'linkedin' ? 'LinkedIn' : brand === 'telegram' ? 'Telegram' : 'WhatsApp');
  });

  document.querySelectorAll('.hero-sub').forEach((paragraph) => {
    if (paragraph.textContent.trim() === 'We help B2B founders, tech and service firms turn LinkedIn into a repeatable source of qualified conversations that win clients.') {
      paragraph.textContent = 'We help business owners, tech and service firms turn LinkedIn into a repeatable source of qualified conversations that win clients.';
    }
  });

  if (previewPage === 'index.html') {
    const homepageHeading = document.querySelector('.hero h1');
    if (homepageHeading) homepageHeading.innerHTML = '<span>Engineering <em>B2B</em></span><span><em>growth</em> systems.</span>';

    const heroStats = document.querySelectorAll('.hero-stats-full .stat');
    if (heroStats[0]) {
      heroStats[0].querySelector('.stat-num').innerHTML = '30K<span>+</span>';
      heroStats[0].querySelector('.stat-label').innerHTML = '<strong>Targeted connections built</strong><br>Across personal, client and team LinkedIn profiles.';
    }
    if (heroStats[1]) {
      heroStats[1].querySelector('.stat-label').innerHTML = '<strong>Qualified meetings booked</strong><br>Across client campaigns and managed profiles.';
    }
  }

  if (previewPage === 'about/index.html') {
    const stats = document.querySelectorAll('.stats-grid .stat-card');
    if (stats[1]) {
      stats[1].querySelector('strong').textContent = '30K+';
      stats[1].querySelector('span').textContent = 'Targeted connections built';
      stats[1].querySelector('p').textContent = 'Across personal, client and team LinkedIn profiles.';
    }
    if (stats[2]) {
      stats[2].querySelector('span').textContent = 'Qualified meetings booked';
      stats[2].querySelector('p').textContent = 'Across client campaigns and managed profiles.';
    }

    const aboutCopy = document.querySelector('.about-copy');
    if (aboutCopy && !aboutCopy.closest('.oc-about-story')) {
      const story = document.createElement('div');
      story.className = 'oc-about-story';
      const figure = document.createElement('figure');
      figure.className = 'oc-about-saudi-photo';
      figure.innerHTML = '<img src="/uploads/about-saudi-friend.png" alt="Oleg Cherkas with a Saudi business contact"><figcaption>Relationships built in the markets where our clients sell.</figcaption>';
      aboutCopy.before(story);
      story.append(aboutCopy, figure);
    }
  }

  if (previewPage === 'b2b-lead-generation-service.html') {
    const points = document.querySelectorAll('.b2b-hero-points .b2b-stat');
    if (points[0]) {
      points[0].querySelector('strong').innerHTML = '30K<span>+</span>';
      points[0].querySelector(':scope > span').textContent = 'Targeted connections across personal and client profiles.';
    }
    if (points[1]) points[1].querySelector(':scope > span').textContent = 'Qualified meetings across client campaigns.';
  }

  if (previewPage === 'contact.html') {
    const photo = document.querySelector('.contact-hero-img');
    if (photo && !photo.closest('.oc-contact-photo-stage')) {
      const stage = document.createElement('div');
      stage.className = 'oc-contact-photo-stage';
      stage.style.backgroundImage = `linear-gradient(90deg, rgba(3,26,19,.78), rgba(3,26,19,.18) 34%, rgba(3,26,19,.18) 66%, rgba(3,26,19,.78)), url("${photo.getAttribute('src')}")`;
      photo.before(stage);
      stage.append(photo);
    }
  }

  if (previewPage === 'locations/index.html') {
    const heading = document.querySelector('.locations-hero h1');
    if (heading) heading.textContent = 'LinkedIn B2B outbound by country';

    const lead = document.querySelector('.locations-hero .hero-lead');
    if (lead) lead.textContent = 'LinkedIn outbound should reflect how buyers operate in each market — not rely on one generic message for an entire region. We build market-specific targeting, profile positioning and outreach for companies expanding across the GCC, the United Kingdom, Southeast Asia and Australia.';

    const featuredHeading = document.querySelector('#featured .section-heading h2');
    if (featuredHeading) featuredHeading.textContent = 'Priority markets for international B2B growth';

    const featuredLead = document.querySelector('#featured .section-heading p');
    if (featuredLead) featuredLead.textContent = 'Seven markets, prioritised around current outbound activity and practical commercial opportunity.';

    const panel = document.querySelector('.locations-hero .city-panel');
    if (panel) {
      panel.classList.add('oc-locations-visual');
      panel.innerHTML = `
        <div class="oc-market-summary"><span><strong>21</strong> cities</span><span><strong>7</strong> countries</span></div>
        <img class="oc-global-network" src="${locationAssetRoot}/global-network.png" alt="Global B2B outbound network connecting priority markets">
        <div class="oc-market-priority" aria-label="Priority markets">
          <span>UAE</span><span>Saudi Arabia</span><span>Singapore</span><span>United Kingdom</span><span>Qatar</span><span>Malaysia</span><span>Australia</span>
        </div>`;
    }

    const marketData = [
      {
        id: 'uae', label: '01 · United Arab Emirates', title: 'LinkedIn B2B outbound across the UAE',
        intro: 'The UAE combines regional headquarters, fast-moving founder-led businesses and institutional buyers. Targeting and proof need to change between Dubai, Abu Dhabi and the northern emirates.',
        cities: [
          ['Dubai', '/uploads/locations/thumbs/dubai.jpg', 'International headquarters, technology, financial services, logistics and professional services.'],
          ['Abu Dhabi', '/uploads/locations/thumbs/abu-dhabi.jpg', 'Institutional buyers, energy, advanced technology, finance and government-related enterprise.'],
          ['Sharjah', '/uploads/locations/thumbs/sharjah.jpg', 'Industrial, education, manufacturing, cultural and mid-market business audiences.'],
          ['Ras Al Khaimah', '/uploads/locations/thumbs/ras-al-khaimah.jpg', 'Manufacturing, tourism, construction, logistics and internationally owned businesses.']
        ]
      },
      {
        id: 'saudi-arabia', label: '02 · Saudi Arabia', title: 'LinkedIn B2B outbound across Saudi Arabia',
        intro: 'Saudi Arabia demands account-level research, credible positioning and locally relevant outreach. Its commercial centres differ in sector concentration, decision structure and buying pace.',
        cities: [
          ['Riyadh', '/uploads/locations/thumbs/riyadh.jpg', 'Enterprise headquarters, government programmes, technology, finance and strategic projects.'],
          ['Jeddah', '/uploads/locations/thumbs/jeddah.jpg', 'Trade, logistics, family businesses, tourism, professional services and Red Sea commerce.'],
          ['Dammam', '/uploads/locations/thumbs/dammam-khobar.jpg', 'Energy, industry, engineering, logistics and Eastern Province enterprise buyers.'],
          ['Al Khobar', `${locationAssetRoot}/al-khobar.png`, 'Corporate services, energy-sector suppliers, technology and Gulf-facing business networks.']
        ]
      },
      {
        id: 'singapore', label: '03 · Singapore', title: 'LinkedIn B2B outbound in Singapore',
        intro: 'Singapore is a concentrated gateway to APAC decision makers. Strong outreach here depends on precise segmentation, concise proof and senior-level relevance.',
        cities: [
          ['Singapore', '/uploads/locations/thumbs/singapore.jpg', 'Regional headquarters, SaaS, technology, finance and Asia-Pacific B2B decision makers.']
        ]
      },
      {
        id: 'united-kingdom', label: '04 · United Kingdom', title: 'LinkedIn B2B outbound across the United Kingdom',
        intro: 'The UK combines dense professional-services networks with mature technology and industrial clusters. Messaging should reflect the commercial identity of each city.',
        cities: [
          ['London', `${locationAssetRoot}/london.png`, 'Global headquarters, finance, technology, consulting and high-value professional services.'],
          ['Manchester', `${locationAssetRoot}/manchester.png`, 'Technology, digital services, media, advanced manufacturing and regional headquarters.'],
          ['Birmingham', `${locationAssetRoot}/birmingham.png`, 'Professional services, manufacturing, logistics, property and mid-market enterprises.'],
          ['Leeds', `${locationAssetRoot}/leeds.png`, 'Financial services, legal, healthcare, technology and northern business networks.']
        ]
      },
      {
        id: 'qatar', label: '05 · Qatar', title: 'LinkedIn B2B outbound in Qatar',
        intro: 'Doha concentrates Qatar’s enterprise, energy, infrastructure and professional-services activity. Outreach should be narrow, credible and relationship-led.',
        cities: [
          ['Doha', '/uploads/locations/thumbs/doha.jpg', 'Energy, infrastructure, finance, professional services and regional enterprise relationships.']
        ]
      },
      {
        id: 'malaysia', label: '06 · Malaysia', title: 'LinkedIn B2B outbound across Malaysia',
        intro: 'Malaysia offers a strong mix of regional headquarters, technology operations, manufacturing and cross-border services. We focus on its three clearest B2B centres.',
        cities: [
          ['Kuala Lumpur', `${locationAssetRoot}/kuala-lumpur.png`, 'Regional headquarters, finance, technology, consulting and enterprise services.'],
          ['Cyberjaya', `${locationAssetRoot}/cyberjaya.png`, 'Technology campuses, cloud, digital infrastructure, shared services and innovation teams.'],
          ['Johor Bahru', `${locationAssetRoot}/johor-bahru.png`, 'Manufacturing, logistics, data centres and Singapore-linked commercial activity.']
        ]
      },
      {
        id: 'australia', label: '07 · Australia', title: 'LinkedIn B2B outbound across Australia',
        intro: 'Australia rewards clear commercial relevance and credible proof. Each major city has a distinct mix of enterprise, technology and professional-services buyers.',
        cities: [
          ['Sydney', `${locationAssetRoot}/sydney.png`, 'Corporate headquarters, finance, technology, consulting and enterprise services.'],
          ['Melbourne', `${locationAssetRoot}/melbourne.png`, 'Technology, finance, healthcare, education and professional-services networks.'],
          ['Brisbane', `${locationAssetRoot}/brisbane.png`, 'Fast-growing technology, infrastructure, energy and mid-market business communities.'],
          ['Perth', `${locationAssetRoot}/perth.png`, 'Resources, engineering, technology, logistics and specialist professional services.']
        ]
      }
    ];

    const featuredGrid = document.querySelector('#featured .location-grid');
    if (featuredGrid) {
      featuredGrid.className = 'oc-country-priority-grid';
      featuredGrid.innerHTML = marketData.map((market) => `
        <a class="oc-country-priority-card" href="#${market.id}">
          <small>${market.label}</small><strong>${market.title.replace('LinkedIn B2B outbound ', '')}</strong>
          <span>${market.cities.length} ${market.cities.length === 1 ? 'market' : 'cities'} →</span>
        </a>`).join('');
    }

    const countrySection = document.querySelector('#uae');
    const sectionInner = countrySection?.querySelector('.section-inner');
    if (sectionInner) {
      sectionInner.innerHTML = marketData.map((market) => `
        <section class="oc-country-group" id="${market.id}">
          <div class="oc-country-head">
            <div><div class="eyebrow">${market.label}</div><h2>${market.title}</h2></div>
            <p>${market.intro}</p>
          </div>
          <div class="location-grid oc-expanded-location-grid ${market.cities.length === 1 ? 'oc-single-city' : ''}">
            ${market.cities.map(([city, image, description]) => `
              <a class="location-card with-image" href="/locations/${market.id}/${city.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-')}/">
                <img class="location-thumb" src="${image}" alt="${city} business district" width="800" height="400" loading="lazy">
                <div class="location-card-content"><span class="status">Explore</span><div><h3>${city}</h3><p>${description}</p></div><span class="arrow">Explore ${city} →</span></div>
              </a>`).join('')}
          </div>
        </section>`).join('');
    }
  }

  if (previewPage === 'results/index.html') {
    const heroCopy = document.querySelector('.hero .hero-grid > div');
    if (heroCopy && !heroCopy.querySelector('.oc-results-link')) {
      const link = document.createElement('a');
      link.className = 'unified-hero-link oc-results-link';
      link.href = 'https://www.linkedin.com/in/oleg-cherkas';
      link.target = '_blank';
      link.rel = 'noopener';
      link.innerHTML = `<span class="oc-results-wave" aria-hidden="true"><svg viewBox="0 0 72 24"><path d="M2 12c8-12 14 12 22 0s14 12 22 0 14 12 22 0"/><path class="oc-results-arrow" d="m64 7 6 5-6 5"/></svg></span><span class="oc-results-linkedin">${officialIcon('linkedin')}</span><span>See my results</span>`;
      heroCopy.append(link);
    }
  }

  const services = [
    ['B2B lead generation', 'b2b-lead-generation-service.html'],
    ['Monthly LinkedIn outreach', 'service-monthly-linkedin-outreach-management.html'],
    ['LinkedIn lead generation setup', 'service-lead-generation.html'],
    ['LinkedIn profile optimization', 'service-profile-optimization.html'],
    ['LinkedIn content for founders', 'service-linkedin-content-for-founders.html']
  ];
  const locations = [
    ['UAE', '/locations/uae.html'],
    ['Saudi Arabia', '/locations/saudi-arabia.html'],
    ['Singapore', '/locations/singapore.html'],
    ['United Kingdom', '/locations/united-kingdom.html'],
    ['Qatar', '/locations/qatar.html'],
    ['Malaysia', '/locations/malaysia.html'],
    ['Australia', '/locations/australia.html']
  ];

  const buildDesktopDropdown = (label, className, menuClass, items) => {
    document.querySelectorAll('.nav-links').forEach((list) => {
      const link = [...list.querySelectorAll(':scope > li > a, :scope > a')]
        .find((item) => item.textContent.trim().toLowerCase() === label.toLowerCase());
      if (!link) return;
      let holder = link.parentElement?.tagName === 'LI' ? link.parentElement : null;
      if (!holder) {
        holder = document.createElement('li');
        link.replaceWith(holder);
        holder.append(link);
      }
      holder.classList.add(className, 'oc-nav-dropdown');
      if (holder.querySelector(`.${menuClass}`)) return;
      const menu = document.createElement('div');
      menu.className = `${menuClass} oc-nav-dropdown-menu`;
      menu.innerHTML = items.map(([name, href]) => `<a href="${href}">${name}</a>`).join('');
      holder.append(menu);
    });
  };

  buildDesktopDropdown('Services', 'nav-services', 'nav-services-menu', services);
  buildDesktopDropdown('Locations', 'nav-locations', 'nav-locations-menu', locations);

  const buildMobileDropdown = (label, slug, items) => {
    document.querySelectorAll('.mobile-menu').forEach((menu) => {
      if (menu.querySelector(`.oc-mobile-${slug}-toggle`)) return;
      const link = [...menu.children].find((item) => item.tagName === 'A' && item.textContent.trim().toLowerCase() === label.toLowerCase());
      if (!link) return;
      const button = document.createElement('button');
      button.className = `oc-mobile-menu-toggle oc-mobile-${slug}-toggle`;
      button.type = 'button';
      button.setAttribute('aria-expanded', 'false');
      button.innerHTML = `${label}<span aria-hidden="true">⌄</span>`;
      const submenu = document.createElement('div');
      submenu.className = `oc-mobile-submenu oc-mobile-${slug}-submenu`;
      submenu.innerHTML = items.map(([name, href]) => `<a href="${href}">${name}</a>`).join('');
      link.replaceWith(button, submenu);
      button.addEventListener('click', () => {
        const open = submenu.classList.toggle('open');
        button.classList.toggle('open', open);
        button.setAttribute('aria-expanded', String(open));
      });
    });
  };

  buildMobileDropdown('Services', 'services', services);
  buildMobileDropdown('Locations', 'locations', locations);

  document.querySelectorAll('.mobile-services-toggle').forEach((button) => button.classList.add('oc-mobile-menu-toggle'));
  document.querySelectorAll('.mobile-services-submenu').forEach((menu) => menu.classList.add('oc-mobile-submenu'));

  if (menuState === 'mobile' || menuState === 'mobile-locations' || menuState === 'mobile-services') {
    document.querySelectorAll('.mobile-menu').forEach((menu) => menu.classList.add('open'));
    document.querySelectorAll('.burger').forEach((burger) => burger.classList.add('open'));
  }
  if (menuState === 'mobile-locations') {
    document.querySelectorAll('.oc-mobile-locations-submenu').forEach((menu) => menu.classList.add('open'));
    document.querySelectorAll('.oc-mobile-locations-toggle').forEach((button) => {
      button.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
    });
  }
  if (menuState === 'mobile-services') {
    document.documentElement.classList.add('preview-menu-mobile-services');
    document.querySelectorAll('.oc-mobile-services-submenu, .mobile-services-submenu, .universal-mobile-services-menu').forEach((menu) => menu.classList.add('open'));
    document.querySelectorAll('.oc-mobile-services-toggle, .mobile-services-toggle, .universal-mobile-services-toggle').forEach((button) => {
      button.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
    });
    setTimeout(() => {
      const originalButton = document.querySelector('.universal-mobile-services-toggle, .mobile-services-toggle');
      const originalMenu = document.querySelector('.universal-mobile-services-menu, .mobile-services-submenu');
      if (originalButton && originalMenu && originalMenu.getBoundingClientRect().height < 40) originalButton.click();
    }, 650);
  }

  /* One restrained emphasis per text block: never more than a short 1–3 word phrase. */
  const emphasisPhrases = [
    'qualified conversations',
    'structured follow-up',
    'personalized messages',
    'profile positioning',
    'target buyers',
    'business priorities',
    'clear targeting',
    'relevant messaging',
    'direct relationships',
    'predictable pipeline',
    'multi-step follow-ups',
    'real buyers'
  ];
  const emphasisBlocks = document.querySelectorAll([
    '.about-copy p', '.compact-copy p', '.info-card p', '.service-card p',
    '.benefit-card p', '.process-step p', '.profile-value-card li',
    '.monthly-manage-card p', '.campaign-proof-copy p', '.section-lead'
  ].join(','));
  emphasisBlocks.forEach((block) => {
    if (block.children.length) return;
    const phrase = emphasisPhrases.find((candidate) => block.textContent.toLowerCase().includes(candidate));
    if (!phrase) return;
    const pattern = new RegExp(`(${phrase})`, 'i');
    block.innerHTML = block.textContent.replace(pattern, '<strong class="oc-keyword">$1</strong>');
  });

  const isMobile = query.get('viewport') === 'mobile' || window.innerWidth <= 980;
  document.querySelectorAll('.unified-service-hero, .b2b-hero-approved').forEach((hero) => {
      const copy = hero.querySelector('.unified-hero-copy, .b2b-hero-copy');
      const visual = hero.querySelector('.unified-hero-visual, .b2b-hero-visual');
      const results = hero.querySelector('.unified-hero-link, .b2b-hero-link');
      if (!copy || !visual || !results) return;
      results.classList.add('oc-service-results-strip');
      if (isMobile) {
        copy.classList.add('oc-mobile-service-copy');
        visual.classList.add('oc-mobile-service-visual');
        results.classList.add('oc-mobile-results');
        hero.append(results);
      } else {
        copy.append(results);
      }
  });

  if (menuState === 'services' || menuState === 'open') {
    document.documentElement.classList.add('preview-menu-services');
  }
  if (menuState === 'locations') {
    document.documentElement.classList.add('preview-menu-locations');
  }

  /* Keep the long mobile navigation usable: Services and Locations behave as an accordion. */
  setTimeout(() => {
    const servicesButton = document.querySelector('.universal-mobile-services-toggle, .mobile-services-toggle, .oc-mobile-services-toggle');
    const servicesMenu = document.querySelector('.universal-mobile-services-menu, .mobile-services-submenu, .oc-mobile-services-submenu');
    const locationsButton = document.querySelector('.oc-mobile-locations-toggle');
    const locationsMenu = document.querySelector('.oc-mobile-locations-submenu');
    if (servicesButton && locationsButton && !servicesButton.dataset.ocAccordionReady) {
      servicesButton.dataset.ocAccordionReady = 'true';
      servicesButton.addEventListener('click', () => {
        if (servicesButton.getAttribute('aria-expanded') !== 'true') return;
        locationsMenu?.classList.remove('open');
        locationsButton.classList.remove('open');
        locationsButton.setAttribute('aria-expanded', 'false');
      });
      locationsButton.addEventListener('click', () => {
        if (locationsButton.getAttribute('aria-expanded') !== 'true') return;
        servicesMenu?.classList.remove('open');
        servicesButton.classList.remove('open');
        servicesButton.setAttribute('aria-expanded', 'false');
      });
    }
  }, 0);

})();
