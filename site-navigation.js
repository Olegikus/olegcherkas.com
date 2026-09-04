(function () {
  const services = [
    { href: '/b2b-lead-generation-service.html', label: 'B2B lead generation', description: 'LinkedIn + email, managed end to end', primary: true },
    { href: '/service-monthly-linkedin-outreach-management.html', label: 'Monthly LinkedIn outreach management' },
    { href: '/service-lead-generation.html', label: 'LinkedIn lead generation setup' },
    { href: '/service-profile-optimization.html', label: 'LinkedIn profile optimization' },
    { href: '/service-linkedin-content-for-founders.html', label: 'LinkedIn content for founders' }
  ];
  const locations = [
    { href: '/locations/', label: 'All locations', primary: true },
    { href: '/locations/#uae', label: 'United Arab Emirates' },
    { href: '/locations/#saudi-arabia', label: 'Saudi Arabia' },
    { href: '/locations/#singapore', label: 'Singapore' },
    { href: '/locations/#united-kingdom', label: 'United Kingdom' },
    { href: '/locations/#qatar', label: 'Qatar' },
    { href: '/locations/#malaysia', label: 'Malaysia' },
    { href: '/locations/#australia', label: 'Australia' }
  ];
  const logo = '/uploads/oc-logo-exact.jpg';
  const socialUrls = {
    linkedin: 'https://www.linkedin.com/in/oleg-cherkas',
    telegram: 'https://t.me/olegikus',
    whatsapp: 'https://wa.me/971563462566'
  };
  const paths = {
    linkedin: '<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.04c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77A1.75 1.75 0 0 0 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45A1.76 1.76 0 0 0 24 22.27V1.73C24 .77 23.2 0 22.22 0z"/>',
    telegram: '<path d="m23.91 3.79-3.62 17.05c-.27 1.2-.98 1.5-1.98.93l-5.51-4.06-2.66 2.56c-.29.29-.54.54-1.11.54l.4-5.62 10.23-9.24c.45-.4-.1-.62-.69-.22L6.32 13.69.87 11.99c-1.18-.37-1.2-1.18.25-1.75l21.31-8.21c.99-.36 1.85.24 1.48 1.76z"/>',
    whatsapp: '<path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.79a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88M20.46 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45c6.55 0 11.89-5.34 11.9-11.89 0-3.18-1.24-6.17-3.48-8.42z"/>'
  };
  const icon = (brand) => `<svg class="oc-official-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${paths[brand]}</svg>`;

  const style = document.createElement('style');
  style.id = 'oc-global-navigation-styles';
  style.textContent = `
    :root{--oc-deep:#00271d;--oc-panel:#06392d;--oc-gold:#ddb75b;--oc-cream:#f5f1e8;--oc-mint:#48e69a}
    body.oc-menu-open{overflow:hidden!important}
    .site-nav,body>nav:not(.footer-nav){z-index:1000!important;background:rgba(0,39,29,.97)!important;border-bottom:1px solid rgba(221,183,91,.34)!important}
    .nav-logo{display:flex!important;align-items:center!important;gap:14px!important;text-decoration:none!important}
    .nav-logo img,.nav-logo .oc-brand-mark{width:92px!important;height:64px!important;object-fit:cover!important;border-radius:12px!important}
    .oc-brand-copy{display:flex;flex-direction:column;line-height:1.08;white-space:nowrap}
    .oc-brand-copy strong{font:700 18px/1.15 'Sora',sans-serif;color:var(--oc-gold)}
    .oc-brand-copy small{margin-top:4px;font:500 11px/1 'DM Sans',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#9fbaaF}
    .nav-services,.nav-locations{position:relative}
    .oc-desktop-dropdown{position:absolute!important;top:calc(100% + 10px)!important;left:50%!important;right:auto!important;transform:translateX(-50%) translateY(8px)!important;width:410px!important;min-width:410px!important;padding:10px!important;background:rgba(2,34,25,.985)!important;border:1px solid rgba(221,183,91,.42)!important;border-radius:14px!important;box-shadow:0 24px 60px rgba(0,0,0,.42)!important;opacity:0!important;visibility:hidden!important;pointer-events:none!important;display:block!important;z-index:1200!important;transition:opacity .18s ease,transform .18s ease,visibility .18s ease!important}
    .oc-desktop-dropdown:before{content:"";position:absolute;left:0;right:0;top:-14px;height:14px}
    .nav-services:hover>.oc-desktop-dropdown,.nav-services:focus-within>.oc-desktop-dropdown,.nav-locations:hover>.oc-desktop-dropdown,.nav-locations:focus-within>.oc-desktop-dropdown{opacity:1!important;visibility:visible!important;pointer-events:auto!important;transform:translateX(-50%) translateY(0)!important}
    .oc-desktop-dropdown a{display:block!important;padding:12px 14px!important;color:#c8d5cf!important;font:500 14px/1.35 'DM Sans',sans-serif!important;letter-spacing:.01em!important;text-transform:none!important;text-decoration:none!important;border:0!important;border-radius:9px!important;background:transparent!important}
    .oc-desktop-dropdown a+a{border-top:1px solid rgba(221,183,91,.12)!important}
    .oc-desktop-dropdown a:hover,.oc-desktop-dropdown a:focus{background:rgba(221,183,91,.11)!important;color:#fff!important}
    .oc-desktop-dropdown a.oc-primary-link{border:1px solid rgba(221,183,91,.4)!important;background:rgba(221,183,91,.07)!important;margin-bottom:7px!important}
    .oc-desktop-dropdown a strong{display:block;color:var(--oc-cream);font:700 14px/1.25 'Sora',sans-serif}
    .oc-desktop-dropdown a span{display:block;margin-top:4px;color:#9fbaaF;font-size:12px}
    .header-socials{gap:10px!important}
    .header-social,.social-link{color:var(--oc-gold)!important}
    .header-social{width:48px!important;height:48px!important;min-width:48px!important}
    .header-social .oc-official-icon{width:19px!important;height:19px!important}
    .oc-official-icon{display:block;width:20px;height:20px}
    .whatsapp-float{position:fixed!important;display:flex!important;align-items:center!important;justify-content:center!important;right:28px!important;top:50%!important;bottom:auto!important;transform:translateY(-50%)!important;width:62px!important;height:62px!important;border-radius:50%!important;background:var(--oc-gold)!important;color:#16a765!important;border:1px solid #f0cf7c!important;box-shadow:0 18px 42px rgba(0,0,0,.35)!important;z-index:900!important}
    .whatsapp-float:hover{transform:translateY(-50%) scale(1.06)!important}
    .whatsapp-float .oc-official-icon,.whatsapp-float svg{width:28px!important;height:28px!important}
    footer{background:#00271d!important;border-top:1px solid rgba(221,183,91,.34)!important}
    footer .oc-footer-brand{display:flex;align-items:center;gap:12px;text-decoration:none}
    footer .oc-footer-brand img{width:92px;height:64px;object-fit:cover;border-radius:10px}
    footer .oc-footer-brand span{display:flex;flex-direction:column;text-align:left}
    footer .oc-footer-brand strong{font:700 15px/1.15 'Sora',sans-serif;color:var(--oc-cream)}
    footer .oc-footer-brand small{margin-top:4px;font:500 11px/1 'DM Sans',sans-serif;color:#83a397}
    @media(max-width:980px){
      body{padding-top:76px!important}
      .site-nav,body>nav:not(.footer-nav){position:fixed!important;top:0!important;left:0!important;right:0!important;height:76px!important;min-height:76px!important;padding:10px 18px!important;background:rgba(0,39,29,.97)!important;border-bottom:1px solid rgba(221,183,91,.34)!important;backdrop-filter:blur(14px);display:flex!important;align-items:center!important}
      .nav-logo{margin-right:auto!important}
      .nav-logo img,.nav-logo .oc-brand-mark{width:64px!important;height:48px!important;border-radius:8px!important}
      .nav-logo .oc-brand-copy{display:none!important}
      .nav-links,.nav-actions{display:none!important}
      .oc-mobile-header-socials{display:flex!important;align-items:center!important;gap:8px!important;margin-right:12px!important}
      .oc-mobile-header-socials a{display:grid!important;place-items:center!important;width:38px!important;height:38px!important;padding:0!important;border:1px solid rgba(221,183,91,.42)!important;border-radius:50%!important;color:var(--oc-gold)!important;text-decoration:none!important}
      .oc-mobile-header-socials svg{width:16px;height:16px}
      .burger{display:flex!important;position:relative!important;z-index:1300!important;width:42px!important;height:42px!important;padding:10px 7px!important;margin:0!important;flex-direction:column!important;justify-content:space-between!important;align-items:stretch!important;gap:0!important;background:transparent!important;border:0!important;cursor:pointer!important}
      .burger span{display:block!important;width:28px!important;height:2px!important;min-height:2px!important;margin:0!important;background:var(--oc-cream)!important;border:0!important;border-radius:2px!important;transform-origin:center!important;transition:transform .24s ease,opacity .18s ease!important}
      .burger.open span:nth-child(1){transform:translateY(10px) rotate(45deg)!important}
      .burger.open span:nth-child(2){opacity:0!important;transform:scaleX(0)!important}
      .burger.open span:nth-child(3){transform:translateY(-10px) rotate(-45deg)!important}
      .mobile-menu{position:fixed!important;inset:76px 0 0!important;width:100%!important;height:calc(100dvh - 76px)!important;padding:24px 20px 40px!important;margin:0!important;display:block!important;overflow-y:auto!important;overscroll-behavior:contain!important;background:var(--oc-deep)!important;z-index:1100!important;opacity:0!important;visibility:hidden!important;transform:translateY(-10px)!important;transition:opacity .2s ease,transform .2s ease,visibility .2s ease!important;text-align:left!important}
      .mobile-menu.open{opacity:1!important;visibility:visible!important;transform:none!important}
      .mobile-menu>.oc-mobile-link,.oc-mobile-accordion-toggle{display:flex!important;align-items:center!important;justify-content:space-between!important;width:100%!important;margin:0!important;padding:15px 4px!important;border:0!important;border-bottom:1px solid rgba(221,183,91,.2)!important;background:none!important;color:var(--oc-cream)!important;font:700 20px/1.2 'Sora',sans-serif!important;letter-spacing:-.01em!important;text-align:left!important;text-decoration:none!important;text-transform:none!important}
      .oc-mobile-accordion-toggle:after{content:"+";font:400 25px/1 'DM Sans',sans-serif;color:var(--oc-gold)}
      .oc-mobile-accordion-toggle[aria-expanded="true"]:after{content:"−"}
      .oc-mobile-submenu{display:none!important;margin:7px 0 14px!important;padding:7px 12px!important;border:1px solid rgba(221,183,91,.32)!important;border-radius:14px!important;background:rgba(6,57,45,.72)!important}
      .oc-mobile-submenu.open{display:block!important}
      .mobile-menu .oc-mobile-submenu a{display:block!important;margin:0!important;padding:12px 8px!important;border:0!important;border-bottom:1px solid rgba(221,183,91,.14)!important;color:#c8d5cf!important;font:500 15px/1.35 'DM Sans',sans-serif!important;letter-spacing:0!important;text-align:left!important;text-transform:none!important;text-decoration:none!important}
      .mobile-menu .oc-mobile-submenu a:last-child{border-bottom:0!important}
      .mobile-menu .oc-mobile-submenu a.oc-primary-link{color:var(--oc-gold)!important;font-weight:700!important}
      .oc-mobile-menu-socials{display:flex!important;gap:12px!important;justify-content:center!important;padding:26px 0 8px!important}
      .mobile-menu .oc-mobile-menu-socials a{display:grid!important;place-items:center!important;width:46px!important;height:46px!important;padding:0!important;border:1px solid rgba(221,183,91,.4)!important;border-radius:50%!important;color:var(--oc-gold)!important}
      .mobile-menu .oc-mobile-menu-socials svg{width:19px;height:19px}
      .whatsapp-float{right:16px!important;width:54px!important;height:54px!important}
      footer{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:20px!important;padding:38px 20px!important;text-align:center!important}
      footer .oc-footer-brand{justify-content:center!important}
      footer .footer-left{display:flex!important;flex-direction:column!important;align-items:center!important;gap:16px!important;margin:0!important}
      footer .footer-copy{text-align:center!important;margin:0!important}
      footer .social-links{display:flex!important;justify-content:center!important;gap:10px!important;margin:0!important}
      footer .footer-nav{display:flex!important;flex-wrap:wrap!important;justify-content:center!important;gap:10px!important;margin:0!important;width:min(100%,420px)!important}
      footer .footer-nav a{margin:0!important}
    }
    @media(min-width:981px){.oc-mobile-header-socials{display:none!important}}
  `;
  document.head.appendChild(style);

  const linkMarkup = (items) => items.map((item) => `<a href="${item.href}"${item.primary ? ' class="oc-primary-link"' : ''}>${item.description ? `<strong>${item.label}</strong><span>${item.description}</span>` : item.label}</a>`).join('');
  const nav = document.querySelector('.site-nav') || document.querySelector('header nav') || document.querySelector('body > nav');

  document.querySelectorAll('.nav-logo').forEach((brand) => {
    const image = brand.querySelector('img') || document.createElement('img');
    image.src = logo;
    image.alt = 'OC — Oleg Cherkas';
    image.removeAttribute('style');
    image.className = 'oc-brand-mark';
    if (!image.parentNode) brand.prepend(image);
    let copy = brand.querySelector('.oc-brand-copy');
    if (!copy) {
      copy = document.createElement('span');
      copy.className = 'oc-brand-copy';
      copy.innerHTML = '<strong>Oleg Cherkas</strong><small>B2B Growth Systems</small>';
      brand.append(copy);
    }
  });

  document.querySelectorAll('.nav-links').forEach((links) => {
    [['services', services], ['locations', locations]].forEach(([type, items]) => {
      const trigger = Array.from(links.querySelectorAll(':scope > li > a')).find((a) => a.textContent.trim().toLowerCase() === type);
      if (!trigger) return;
      const item = trigger.closest('li');
      item.classList.add(`nav-${type}`);
      item.querySelectorAll(':scope > .nav-services-menu, :scope > .oc-desktop-dropdown').forEach((old) => old.remove());
      const menu = document.createElement('div');
      menu.className = `oc-desktop-dropdown oc-${type}-dropdown`;
      menu.innerHTML = linkMarkup(items);
      item.append(menu);
    });
  });

  if (nav) {
    let actions = nav.querySelector('.nav-actions');
    if (!actions) {
      const cta = nav.querySelector(':scope > .nav-cta');
      actions = document.createElement('div');
      actions.className = 'nav-actions';
      actions.innerHTML = `<div class="header-socials"><a class="header-social" href="${socialUrls.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${icon('linkedin')}</a><a class="header-social" href="${socialUrls.telegram}" target="_blank" rel="noopener" aria-label="Telegram">${icon('telegram')}</a><a class="header-social" href="${socialUrls.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon('whatsapp')}</a></div>`;
      if (cta) actions.append(cta);
      nav.append(actions);
    }
    if (actions) {
      actions.querySelectorAll('.header-social').forEach((a) => {
        const href = a.href.toLowerCase();
        const brand = href.includes('linkedin') ? 'linkedin' : href.includes('t.me') ? 'telegram' : 'whatsapp';
        a.innerHTML = icon(brand);
        a.setAttribute('aria-label', brand[0].toUpperCase() + brand.slice(1));
      });
    }
    let mobileSocials = nav.querySelector('.oc-mobile-header-socials');
    if (!mobileSocials) {
      mobileSocials = document.createElement('div');
      mobileSocials.className = 'oc-mobile-header-socials';
      mobileSocials.innerHTML = `<a href="${socialUrls.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${icon('linkedin')}</a><a href="${socialUrls.telegram}" target="_blank" rel="noopener" aria-label="Telegram">${icon('telegram')}</a>`;
      const burger = nav.querySelector('.burger');
      if (burger) burger.before(mobileSocials);
      else nav.append(mobileSocials);
    }
  }

  const mobile = document.querySelector('.mobile-menu');
  const burger = document.querySelector('.burger');
  if (mobile && burger) {
    mobile.innerHTML = `
      <a class="oc-mobile-link" href="/">Home</a>
      <a class="oc-mobile-link" href="/about/">About</a>
      <div class="oc-mobile-accordion"><button class="oc-mobile-accordion-toggle" type="button" aria-expanded="false">Services</button><div class="oc-mobile-submenu">${linkMarkup(services)}</div></div>
      <div class="oc-mobile-accordion"><button class="oc-mobile-accordion-toggle" type="button" aria-expanded="false">Locations</button><div class="oc-mobile-submenu">${linkMarkup(locations)}</div></div>
      <a class="oc-mobile-link" href="/results/">Results</a>
      <a class="oc-mobile-link" href="/blog">Blog</a>
      <a class="oc-mobile-link" href="/contact">Contact</a>
      <div class="oc-mobile-menu-socials"><a href="${socialUrls.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${icon('linkedin')}</a><a href="${socialUrls.telegram}" target="_blank" rel="noopener" aria-label="Telegram">${icon('telegram')}</a></div>`;
    mobile.querySelectorAll('.oc-mobile-accordion-toggle').forEach((toggle) => {
      toggle.addEventListener('click', () => {
        const panel = toggle.nextElementSibling;
        const open = !panel.classList.contains('open');
        mobile.querySelectorAll('.oc-mobile-submenu.open').forEach((other) => other.classList.remove('open'));
        mobile.querySelectorAll('.oc-mobile-accordion-toggle').forEach((other) => other.setAttribute('aria-expanded', 'false'));
        panel.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', String(open));
      });
    });
    const closeMenu = () => {
      mobile.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('oc-menu-open');
    };
    burger.removeAttribute('onclick');
    burger.setAttribute('aria-expanded', 'false');
    burger.onclick = (event) => {
      event.preventDefault();
      const open = !mobile.classList.contains('open');
      mobile.classList.toggle('open', open);
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('oc-menu-open', open);
    };
    mobile.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
  }

  document.querySelectorAll('footer').forEach((footer) => {
    footer.querySelectorAll('img').forEach((image) => { image.src = logo; image.alt = 'OC — Oleg Cherkas'; });
    if (!footer.querySelector('.oc-footer-brand')) {
      const brand = document.createElement('a');
      brand.className = 'oc-footer-brand';
      brand.href = '/';
      brand.innerHTML = `<img src="${logo}" alt="OC — Oleg Cherkas"><span><strong>Oleg Cherkas</strong><small>B2B Growth Systems</small></span>`;
      footer.prepend(brand);
    }
    footer.querySelectorAll('a').forEach((a) => {
      const href = a.href.toLowerCase();
      const brand = href.includes('linkedin.com') ? 'linkedin' : href.includes('t.me') ? 'telegram' : href.includes('wa.me') ? 'whatsapp' : null;
      if (brand && (a.classList.contains('social-link') || a.closest('.social-links'))) {
        a.innerHTML = icon(brand);
        a.setAttribute('aria-label', brand[0].toUpperCase() + brand.slice(1));
      }
    });
  });

  let whatsapp = document.querySelector('.whatsapp-float');
  if (!whatsapp) {
    whatsapp = document.createElement('a');
    whatsapp.className = 'whatsapp-float';
    whatsapp.href = socialUrls.whatsapp;
    whatsapp.target = '_blank';
    whatsapp.rel = 'noopener';
    document.body.append(whatsapp);
  }
  whatsapp.innerHTML = icon('whatsapp');
  whatsapp.setAttribute('aria-label', 'Write on WhatsApp');

  const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let textNode;
  while ((textNode = textWalker.nextNode())) {
    if (textNode.nodeValue.includes('↗️')) textNode.nodeValue = textNode.nodeValue.replaceAll('↗️', '↗');
  }
})();
