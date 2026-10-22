/* Radhe Dhokla — motion & shared chrome
   Requires: GSAP + ScrollTrigger, Lenis (loaded via CDN in each page), data.js */
(function () {
  "use strict";
  window.RD = window.RD || {};
  var page = document.body.dataset.page || "";
  var isMobile = window.matchMedia("(max-width: 860px)").matches;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- shared chrome ---------- */
  var NAV = [
    ["index.html", "Home"], ["story.html", "Our Story"], ["outlets.html", "Outlets"],
    ["sevanand.html", "Sevanand"], ["updates.html", "Updates"]
  ];
  function header() {
    var links = NAV.map(function (l) {
      return '<a href="' + l[0] + '"' + (page === l[0].replace(".html", "") ? ' class="active"' : "") + ">" + l[1] + "</a>";
    }).join("");
    return '<header class="nav" id="nav"><div class="container">' +
      '<a class="nav-brand" href="index.html"><img src="assets/img/logo-current.png" alt="Radhe Dhokla"><span class="gu">રાધે ઢોકળા</span></a>' +
      '<nav class="nav-links">' + links + "</nav>" +
      '<div class="nav-cta"><a class="btn btn-ghost" href="outlets.html">Find an outlet</a>' +
      '<button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button></div>' +
      "</div></header>" +
      '<div class="mobile-menu" id="mobileMenu">' + NAV.map(function (l) { return '<a href="' + l[0] + '">' + l[1] + "</a>"; }).join("") +
      '<div class="sub"><span>Since 1995 · Surat</span><span>100% Veg</span><a href="https://wa.me/' + RD.whatsappCentral + '">WhatsApp us</a></div></div>';
  }
  function footer() {
    return '<footer><div class="container">' +
      '<div class="foot-grid">' +
      '<div><h5>Radhe Dhokla Pvt. Ltd.</h5><p>Happiness, packed and served in kilograms. Since 1995, Surat.</p><p>સ્વાદ સાથે સંબંધ…</p>' +
      '<p><a href="https://wa.me/' + RD.whatsappCentral + '">WhatsApp: +91 81400 00161</a></p></div>' +
      '<div><h5>Explore</h5>' + NAV.map(function (l) { return '<a href="' + l[0] + '">' + l[1] + "</a>"; }).join("") + "</div>" +
      '<div><h5>Cities</h5><a href="outlets.html#surat">Surat</a><a href="outlets.html#navsari">Navsari</a><a href="outlets.html#vadodara">Vadodara</a><a href="outlets.html#anand">Anand</a><a href="outlets.html#ahmedabad">Ahmedabad</a><a href="outlets.html#mumbai">Mumbai</a></div>' +
      '<div><h5>Follow</h5><a href="https://www.instagram.com/radhedhoklain/" target="_blank" rel="noopener">Instagram @radhedhoklain</a><a href="https://www.facebook.com/radhe.dhokla/" target="_blank" rel="noopener">Facebook</a><a href="updates.html#newsletter">Newsletter</a><a href="updates.html#investors">Investor updates</a></div>' +
      "</div>" +
      '<div class="foot-big" data-footbig><span>રાધે ઢોકળા</span></div>' +
      '<div class="foot-bottom"><span>© 1995–' + new Date().getFullYear() + ' Radhe Dhokla Private Limited. All rights reserved.</span><span>Prices on this site are indicative; your outlet confirms the final bill. 5% GST extra.</span></div>' +
      "</div></footer>";
  }
  document.getElementById("site-header").outerHTML = header();
  document.getElementById("site-footer").outerHTML = footer();

  /* ---------- smooth scroll ---------- */
  var lenis = null;
  if (window.Lenis && !reduce) {
    lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    if (window.ScrollTrigger) { lenis.on("scroll", ScrollTrigger.update); }
  }
  RD.lenis = lenis;
  if (window.gsap && window.ScrollTrigger) { gsap.registerPlugin(ScrollTrigger); }

  /* ---------- nav ---------- */
  var nav = document.getElementById("nav");
  var solidAt = document.querySelector(".hero, .page-hero") ? 60 : 0;
  function onScroll() { nav.classList.toggle("solid", window.scrollY > solidAt); }
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
  var burger = document.getElementById("burger"), mm = document.getElementById("mobileMenu");
  burger.addEventListener("click", function () {
    var open = !document.body.classList.contains("menu-open");
    document.body.classList.toggle("menu-open", open); mm.classList.toggle("open", open);
    if (lenis) { open ? lenis.stop() : lenis.start(); }
  });

  /* ---------- reveal on view ---------- */
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  document.querySelectorAll("[data-reveal],[data-footbig]").forEach(function (el) { io.observe(el); });

  /* ---------- word-by-word statement ---------- */
  document.querySelectorAll("[data-words]").forEach(function (el) {
    var words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map(function (w) { return '<span class="w">' + w + "</span>"; }).join(" ");
    el.classList.add("words");
    var ws = el.querySelectorAll(".w");
    if (!window.ScrollTrigger) { ws.forEach(function (w) { w.classList.add("on"); }); return; }
    ScrollTrigger.create({
      trigger: el, start: "top 80%", end: "bottom 45%", scrub: true,
      onUpdate: function (st) {
        var n = Math.round(st.progress * ws.length);
        ws.forEach(function (w, i) { w.classList.toggle("on", i < n); });
      }
    });
  });

  /* ---------- marquee ---------- */
  document.querySelectorAll(".marquee").forEach(function (m) {
    var track = m.querySelector(".marquee-track");
    var html = track.innerHTML; track.innerHTML = html + html + html;
    var dir = m.dataset.dir === "right" ? 1 : -1, x = 0, w = track.scrollWidth / 3, speed = parseFloat(m.dataset.speed || "0.6");
    function step() {
      x += dir * speed; if (x <= -w) x += w; if (x >= 0 && dir > 0) x -= w;
      track.style.transform = "translateX(" + x + "px)"; requestAnimationFrame(step);
    }
    if (!reduce) step();
  });

  /* ---------- autoplay helper (iOS) ---------- */
  document.querySelectorAll("video[autoplay]").forEach(function (v) {
    v.muted = true; v.setAttribute("playsinline", ""); var p = v.play(); if (p && p.catch) p.catch(function () {});
  });

  if (!window.gsap || !window.ScrollTrigger || reduce) return;

  /* ---------- hero: media shrinks into a rounded frame as you scroll ---------- */
  var hero = document.querySelector(".hero");
  if (hero) {
    var media = hero.querySelector(".hero-media"), content = hero.querySelector(".hero-content");
    gsap.timeline({ scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } })
      .to(media, { scale: isMobile ? 0.94 : 0.86, borderRadius: isMobile ? 24 : 40, y: isMobile ? 40 : 90, ease: "none" }, 0)
      .to(content, { y: -60, opacity: 0.2, ease: "none" }, 0);
    var lines = hero.querySelectorAll(".hero-title .line span");
    gsap.from(lines, { yPercent: 110, duration: 1.2, stagger: 0.09, ease: "power4.out", delay: 0.2 });
    gsap.from(hero.querySelectorAll(".hero-tag,.hero-sub,.hero-ctas"), { y: 24, opacity: 0, duration: 1, stagger: 0.1, ease: "power3.out", delay: 0.5 });
  }

  /* ---------- journey: pinned step story ---------- */
  var journey = document.querySelector(".journey");
  if (journey) {
    var pin = journey.querySelector(".journey-pin");
    var steps = journey.querySelectorAll(".journey-step"), layers = journey.querySelectorAll(".journey-media .layer");
    var bars = journey.querySelectorAll(".journey-progress i"), end = journey.querySelector(".journey-end"), frame = journey.querySelector(".journey-frame");
    var n = steps.length, total = n + 1; // +1 for the wrap-up
    function setStep(i) {
      steps.forEach(function (s, k) { s.classList.toggle("on", k === i); });
      layers.forEach(function (l, k) { l.classList.toggle("on", k === Math.min(i, layers.length - 1)); });
      bars.forEach(function (b, k) { b.classList.toggle("on", k <= i); });
      var v = layers[Math.min(i, layers.length - 1)] && layers[Math.min(i, layers.length - 1)].querySelector("video");
      if (v) { v.currentTime = 0; var p = v.play(); if (p && p.catch) p.catch(function () {}); }
    }
    setStep(0);
    ScrollTrigger.create({
      trigger: journey, start: "top top", end: "+=" + (total * (isMobile ? 90 : 110)) + "%", pin: pin, scrub: true,
      onUpdate: function (st) {
        var p = st.progress, idx = Math.min(n - 1, Math.floor(p * total));
        var wrap = p > n / total;
        if (!wrap) { setStep(idx); end.classList.remove("on"); journey.querySelector(".journey-copy").style.opacity = 1; }
        else { end.classList.add("on"); journey.querySelector(".journey-copy").style.opacity = 0; }
        // media wraps into a rectangle for the wrap-up
        var t = Math.max(0, Math.min(1, (p - n / total) / (1 / total)));
        var sc = 1 - 0.14 * t, br = 36 * t;
        frame.style.transform = "scale(" + sc + ") translateY(" + (-6 * t) + "%)";
        frame.style.borderRadius = br + "px";
      }
    });
  }

  /* ---------- zigzag curve parallax ---------- */
  var zig = document.querySelector(".zig");
  if (zig) {
    var items = zig.querySelectorAll(".zig-item"), track = zig.querySelector(".zig-track");
    var amp = isMobile ? 26 : 30; // % of width
    function layout() {
      var h = track.offsetHeight, W = track.offsetWidth;
      items.forEach(function (it, i) {
        var t = (i + 0.5) / items.length;
        it.dataset.t = t; it.style.top = (t * h - it.offsetHeight / 2) + "px";
      });
      var path = zig.querySelector(".zig-path path");
      if (path) {
        var d = "", N = 60;
        for (var k = 0; k <= N; k++) { var tt = k / N, x = W / 2 + Math.sin(tt * Math.PI * 2.5 + Math.PI) * W * amp / 100, y = tt * h; d += (k ? "L" : "M") + x.toFixed(1) + " " + y.toFixed(1) + " "; }
        path.setAttribute("d", d); zig.querySelector(".zig-path").setAttribute("viewBox", "0 0 " + W + " " + h);
      }
    }
    layout(); window.addEventListener("resize", layout);
    ScrollTrigger.create({
      trigger: track, start: "top bottom", end: "bottom top", scrub: true,
      onUpdate: function (st) {
        var W = track.offsetWidth;
        items.forEach(function (it, i) {
          var t = parseFloat(it.dataset.t);
          // each item slides along the sine curve as the section scrolls; offset gives the horizontal drift
          var ph = t * Math.PI * 2.5 + Math.PI + (st.progress - 0.5) * Math.PI * 1.2;
          var x = Math.sin(ph) * W * amp / 100 - it.offsetWidth / 2;
          var rot = Math.cos(ph) * 10;
          it.style.transform = "translate3d(" + x + "px,0,0) rotate(" + rot + "deg)";
        });
      }
    });
  }

  /* ---------- parallax bands & generic parallax ---------- */
  document.querySelectorAll(".band").forEach(function (b) {
    var m = b.querySelector("video,img");
    gsap.fromTo(m, { yPercent: -8 }, { yPercent: 8, ease: "none", scrollTrigger: { trigger: b, start: "top bottom", end: "bottom top", scrub: true } });
  });
  document.querySelectorAll("[data-parallax]").forEach(function (el) {
    var amt = parseFloat(el.dataset.parallax || "60");
    gsap.fromTo(el, { y: amt }, { y: -amt, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
  });

  /* ---------- counters ---------- */
  document.querySelectorAll("[data-count]").forEach(function (el) {
    var target = parseFloat(el.dataset.count), dec = (el.dataset.dec || "0") | 0, suffix = el.dataset.suffix || "";
    var o = { v: 0 };
    ScrollTrigger.create({ trigger: el, start: "top 85%", once: true, onEnter: function () {
      gsap.to(o, { v: target, duration: 1.8, ease: "power3.out", onUpdate: function () { el.textContent = o.v.toFixed(dec).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + suffix; } });
    } });
  });

  /* ---------- bento stagger ---------- */
  document.querySelectorAll(".bento").forEach(function (b) {
    gsap.from(b.querySelectorAll(".card"), { y: 40, opacity: 0, duration: .9, stagger: .06, ease: "power3.out", scrollTrigger: { trigger: b, start: "top 80%", once: true } });
  });

  /* ---------- timeline (outlets page) ---------- */
  var tl = document.querySelector(".timeline");
  if (tl) {
    var years = tl.querySelectorAll(".tl-year"), lays = tl.querySelectorAll(".tl-media .layer"), dots = tl.querySelectorAll(".tl-line i"), count = tl.querySelector(".tl-media .count");
    function setYear(i) {
      years.forEach(function (y, k) { y.classList.toggle("on", k === i); });
      lays.forEach(function (l, k) { l.classList.toggle("on", k === i); });
      dots.forEach(function (d, k) { d.classList.toggle("on", k <= i); });
      if (count) count.textContent = (i + 1) + " / " + years.length;
      var v = lays[i] && lays[i].querySelector("video"); if (v) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
    }
    setYear(0);
    ScrollTrigger.create({ trigger: tl.querySelector(".tl-scroll"), start: "top bottom", end: "bottom bottom", scrub: true,
      onUpdate: function (st) { setYear(Math.min(years.length - 1, Math.floor(st.progress * years.length))); } });
  }

  ScrollTrigger.refresh();
})();
