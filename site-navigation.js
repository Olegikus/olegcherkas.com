(function () {
  const services = [
    {
      href: '/b2b-lead-generation-service.html',
      label: 'B2B lead generation',
      description: 'LinkedIn + email, managed end to end',
      primary: true
    },
    { href: '/service-monthly-linkedin-outreach-management.html', label: 'Monthly LinkedIn outreach management' },
    { href: '/service-lead-generation.html', label: 'LinkedIn lead generation setup' },
    { href: '/service-profile-optimization.html', label: 'LinkedIn profile optimization' },
    { href: '/service-linkedin-content-for-founders.html', label: 'LinkedIn content for founders' }
  ];

  const style = document.createElement('style');
  style.textContent = `
    .nav-services{position:relative}
    .nav-services-menu.universal-services-menu{position:absolute!important;top:calc(100% + 10px)!important;left:50%!important;right:auto!important;transform:translateX(-50%) translateY(8px)!important;width:410px!important;min-width:410px!important;padding:10px!important;background:rgba(10,10,10,.98)!important;border:1px solid #34312d!important;box-shadow:0 24px 60px rgba(0,0,0,.5)!important;opacity:0!important;visibility:hidden!important;pointer-events:none!important;display:block!important;z-index:400!important;transition:opacity .18s ease,transform .18s ease,visibility .18s ease!important}
    .nav-services-menu.universal-services-menu:before{content:"";position:absolute;left:0;right:0;top:-14px;height:14px}
    .nav-services:hover>.universal-services-menu,.nav-services:focus-within>.universal-services-menu{opacity:1!important;visibility:visible!important;pointer-events:auto!important;transform:translateX(-50%) translateY(0)!important}
    .universal-services-menu a{display:block!important;padding:13px 15px!important;color:#b7b0a6!important;font-family:'DM Sans',sans-serif!important;font-size:14px!important;font-weight:500!important;line-height:1.35!important;letter-spacing:.025em!important;text-transform:none!important;text-decoration:none!important;border:0!important;background:transparent!important;transition:background .18s ease,color .18s ease!important}
    .universal-services-menu a:hover,.universal-services-menu a:focus{background:rgba(200,184,154,.1)!important;color:#f0ede8!important}
    .universal-services-menu a.universal-service-primary{border:1px solid rgba(200,184,154,.5)!important;margin-bottom:9px!important;padding:14px 15px!important}
    .universal-services-menu a strong{display:block;color:#f0ede8;font-family:'Sora',sans-serif;font-size:15px;text-transform:uppercase;letter-spacing:.07em}
    .universal-services-menu a span{display:block;margin-top:4px;color:#9d968d;font-size:13px;font-weight:400}
    .universal-services-label{padding:10px 15px 5px;color:#776f65;font-size:11px;font-weight:600;letter-spacing:.13em;text-transform:uppercase}
    .universal-services-divider{height:1px;margin:7px 15px;background:#282828}
    .universal-mobile-services{width:100%;text-align:center}
    .universal-mobile-services-toggle{appearance:none;border:0;background:none;color:#f0ede8;font-family:'Sora',sans-serif;font-size:inherit;font-weight:inherit;line-height:1.2;padding:10px 30px;cursor:pointer;position:relative;text-transform:none}
    .universal-mobile-services-toggle:after{content:"+";position:absolute;left:calc(100% - 20px);top:50%;transform:translateY(-50%);color:#c8b89a;font-family:'DM Sans',sans-serif;font-weight:400}
    .universal-mobile-services-toggle[aria-expanded="true"]:after{content:"-"}
    .universal-mobile-services-menu{display:none;max-width:430px;margin:4px auto 12px;padding:8px;border:1px solid #34312d;background:#111;text-align:left}
    .universal-mobile-services-menu.open{display:block}
    .mobile-menu .universal-mobile-services-menu a{display:block!important;padding:10px 13px!important;color:#b7b0a6!important;font-family:'DM Sans',sans-serif!important;font-size:15px!important;font-weight:500!important;line-height:1.35!important;letter-spacing:.01em!important;text-transform:none!important;text-align:left!important;text-decoration:none!important}
    .mobile-menu .universal-mobile-services-menu a.universal-service-primary{border:1px solid rgba(200,184,154,.55)!important;background:rgba(200,184,154,.08)!important;margin:0 0 8px!important;padding:13px 14px!important;color:#f0ede8!important}
    .mobile-menu .universal-mobile-services-menu a.universal-service-primary strong{display:block!important;font-size:15px!important;color:#e2ceb0!important;letter-spacing:.055em!important}
    .mobile-menu .universal-mobile-services-menu a.universal-service-primary span{display:block!important;margin-top:4px!important;font-size:13px!important;color:#aaa299!important;letter-spacing:0!important}
    .mobile-menu .universal-services-label{padding:8px 13px 4px;color:#8c8275;font-family:'DM Sans',sans-serif;font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;text-align:left}
    .mobile-menu .universal-services-divider{height:1px;margin:6px 13px;background:#282828}
    @media(max-width:980px){
      .nav-services-menu.universal-services-menu{display:none!important}
      .header-socials{display:none!important}
      .burger.open span:nth-child(1){transform:translateY(7px) rotate(45deg)!important}
      .burger.open span:nth-child(2){opacity:0!important}
      .burger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg)!important}
      .universal-mobile-services-toggle{font-size:26px!important;font-weight:700!important;letter-spacing:-.02em!important;padding:11px 30px!important}
      .mobile-menu .universal-mobile-services{order:initial}
      .mobile-menu{overflow-y:auto!important;overscroll-behavior:contain!important}
      .whatsapp-float{display:none!important}
    }
    @media(max-width:520px){
      .universal-mobile-services-toggle{font-size:24px!important}
      .universal-mobile-services-menu{width:min(100%,390px);max-height:47vh;overflow-y:auto;margin-top:2px}
    }
    @media(min-width:981px){.universal-mobile-services{display:none!important}}
  `;
  document.head.appendChild(style);

  function serviceMenuMarkup() {
    return `
      <a class="universal-service-primary" href="${services[0].href}"><strong>${services[0].label}</strong><span>${services[0].description}</span></a>
      <div class="universal-services-label">LinkedIn outreach</div>
      <a href="${services[1].href}">${services[1].label}</a>
      <a href="${services[2].href}">${services[2].label}</a>
      <div class="universal-services-divider"></div>
      <div class="universal-services-label">LinkedIn presence</div>
      <a href="${services[3].href}">${services[3].label}</a>
      <a href="${services[4].href}">${services[4].label}</a>`;
  }

  document.querySelectorAll('.nav-links').forEach((nav) => {
    const serviceLink = Array.from(nav.querySelectorAll(':scope > li > a')).find((link) => /\/services(?:\.html)?\/?$/.test(new URL(link.href, location.href).pathname));
    if (!serviceLink) return;
    const item = serviceLink.closest('li');
    item.classList.add('nav-services');
    item.querySelectorAll(':scope > .nav-services-menu').forEach((menu) => menu.remove());
    const menu = document.createElement('div');
    menu.className = 'nav-services-menu universal-services-menu';
    menu.innerHTML = serviceMenuMarkup();
    item.appendChild(menu);
  });

  document.querySelectorAll('.mobile-menu').forEach((mobile) => {
    const candidates = Array.from(mobile.children);
    const oldButton = candidates.find((element) => element.classList && element.classList.contains('mobile-services-toggle'));
    const oldSubmenu = candidates.find((element) => element.classList && element.classList.contains('mobile-services-submenu'));
    const oldLink = candidates.find((element) => element.tagName === 'A' && /\/services(?:\.html)?\/?$/.test(new URL(element.href, location.href).pathname));
    const insertionPoint = oldButton || oldLink;
    if (!insertionPoint) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'universal-mobile-services';
    wrapper.innerHTML = `<button class="universal-mobile-services-toggle" type="button" aria-expanded="false">Services</button><div class="universal-mobile-services-menu">${serviceMenuMarkup()}</div>`;
    insertionPoint.before(wrapper);
    if (oldButton) oldButton.remove();
    if (oldSubmenu) oldSubmenu.remove();
    if (oldLink) oldLink.remove();

    const toggle = wrapper.querySelector('.universal-mobile-services-toggle');
    const submenu = wrapper.querySelector('.universal-mobile-services-menu');
    toggle.addEventListener('click', (event) => {
      event.stopPropagation();
      const open = submenu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  });

  document.querySelectorAll('.burger').forEach((burger) => {
    if (burger.hasAttribute('onclick')) return;
    const mobile = document.getElementById('mobileMenu');
    if (!mobile || burger.dataset.universalBound === 'true') return;
    burger.dataset.universalBound = 'true';
    burger.addEventListener('click', () => {
      const open = mobile.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
    });
  });
})();
