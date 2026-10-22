/* Radhe Dhokla — floating Menu mini-app
   Flow: choose state → city → outlet → browse menu by category → add per plate / per kg → Order on WhatsApp */
(function () {
  "use strict";
  var LS = "rd_menu_v1";
  var state = { step: "state", stateId: null, cityId: null, outletId: null, cat: null, cart: {}, view: "menu" };
  try { var saved = JSON.parse(localStorage.getItem(LS) || "null"); if (saved && saved.outletId) { state = Object.assign(state, saved, { step: "menu", view: "menu" }); } } catch (e) {}
  function save() { try { localStorage.setItem(LS, JSON.stringify({ stateId: state.stateId, cityId: state.cityId, outletId: state.outletId, cart: state.cart })); } catch (e) {} }

  /* ---------- DOM ---------- */
  var root = document.createElement("div");
  root.innerHTML =
    '<button class="fab" id="rdFab" aria-label="Open menu"><span class="dot">મે</span><span>Menu</span><span class="cnt" id="rdCnt">0</span></button>' +
    '<div class="mapp" id="rdApp" role="dialog" aria-modal="true" aria-label="Radhe Dhokla menu">' +
    '<div class="mapp-bg" id="rdBg"></div>' +
    '<div class="mapp-panel">' +
    '<div class="mapp-head"><div class="t"><span class="gu">મેનુ</span><div><b id="rdTitle">Menu</b><small id="rdSub">Browse &amp; order on WhatsApp</small></div></div>' +
    '<div style="display:flex;gap:8px"><button id="rdCartBtn" title="Cart">🧺</button><button id="rdClose" aria-label="Close">✕</button></div></div>' +
    '<div class="mapp-body" id="rdBody"></div>' +
    '<div class="mapp-foot" id="rdFoot"></div>' +
    "</div></div>";
  document.body.appendChild(root);
  var $ = function (id) { return document.getElementById(id); };
  var app = $("rdApp"), body = $("rdBody"), foot = $("rdFoot"), cnt = $("rdCnt");

  function open() { app.classList.add("open"); document.body.style.overflow = "hidden"; if (RD.lenis) RD.lenis.stop(); render(); }
  function close() { app.classList.remove("open"); document.body.style.overflow = ""; if (RD.lenis) RD.lenis.start(); }
  $("rdFab").addEventListener("click", open); $("rdClose").addEventListener("click", close); $("rdBg").addEventListener("click", close);
  $("rdCartBtn").addEventListener("click", function () { if (state.outletId) { state.view = state.view === "cart" ? "menu" : "cart"; render(); } });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  document.querySelectorAll("[data-open-menu]").forEach(function (b) { b.addEventListener("click", function (e) { e.preventDefault(); open(); }); });

  /* ---------- helpers ---------- */
  var outlet = function () { return RD.outlets.find(function (o) { return o.id === state.outletId; }); };
  var city = function () { return RD.cities[state.cityId]; };
  function priceOf(item) { var c = city(); if (c && c.price === "surat" && item.surat) return item.surat; return item.p; }
  function cartCount() { return Object.keys(state.cart).reduce(function (a, k) { return a + state.cart[k].q; }, 0); }
  function cartTotal() { return Object.keys(state.cart).reduce(function (a, k) { return a + state.cart[k].q * state.cart[k].price; }, 0); }
  function rupee(n) { return "₹" + n.toLocaleString("en-IN"); }
  function updateFab() { var n = cartCount(); cnt.textContent = n; cnt.classList.toggle("show", n > 0); }
  updateFab();
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  /* ---------- render ---------- */
  function render() {
    if (!state.stateId) return renderState();
    if (!state.cityId) return renderCity();
    if (!state.outletId) return renderOutlet();
    if (state.view === "cart") return renderCart();
    renderMenu();
  }
  function head(t, s) { $("rdTitle").textContent = t; $("rdSub").innerHTML = s; }
  function crumbs() {
    var parts = [];
    if (state.stateId) parts.push('<button data-go="state">' + esc(RD.states.find(function (s) { return s.id === state.stateId; }).name) + "</button>");
    if (state.cityId) parts.push('<button data-go="city">' + esc(city().name) + "</button>");
    if (state.outletId) parts.push("<b>" + esc(outlet().name) + "</b>");
    return '<div class="crumbs">' + parts.join(" › ") + "</div>";
  }
  function renderState() {
    head("Where are you?", "Pick your state to see your local menu");
    body.innerHTML = '<div class="where"><div><span class="eyebrow">Step 1 of 3</span><h3>Which state are you ordering from?</h3></div>' +
      '<div class="choices">' + RD.states.map(function (s) {
        return '<button data-state="' + s.id + '"><span class="gu">' + s.gu + "</span>" + esc(s.name) + "<small>" + s.cities.length + (s.cities.length > 1 ? " cities" : " city") + "</small></button>";
      }).join("") + "</div>" +
      '<p style="font-size:13px;color:var(--ink-soft)">Not in Gujarat or Maharashtra yet? <a href="https://wa.me/' + RD.whatsappCentral + '" style="color:var(--red);font-weight:700">Message our central line</a> and we will help.</p></div>';
    foot.innerHTML = "";
  }
  function renderCity() {
    var s = RD.states.find(function (x) { return x.id === state.stateId; });
    head("Which city?", "Step 2 of 3");
    body.innerHTML = '<div class="where">' + crumbs() + '<div><h3>Choose your city</h3></div><div class="choices">' + s.cities.map(function (c) {
      var cc = RD.cities[c], n = RD.outletsByCity(c).length;
      return '<button data-city="' + c + '"><span class="gu">' + cc.gu + "</span>" + esc(cc.name) + "<small>" + n + (n > 1 ? " outlets" : " outlet") + (cc.note ? " · " + cc.note : "") + "</small></button>";
    }).join("") + "</div></div>";
    foot.innerHTML = "";
  }
  function renderOutlet() {
    var os = RD.outletsByCity(state.cityId);
    head("Nearest outlet", "Step 3 of 3 · your order goes to this outlet's WhatsApp");
    body.innerHTML = '<div class="where">' + crumbs() + "<div><h3>Pick the outlet closest to you</h3></div>" +
      '<div class="choices" style="grid-template-columns:1fr">' + os.map(function (o) {
        return '<button data-outlet="' + o.id + '"><span style="display:flex;justify-content:space-between;width:100%;align-items:center"><span>' + esc(o.name) + '<small style="display:block">' + esc(o.area) + " · " + o.hours + '</small></span><span class="rate" style="background:var(--red);color:var(--white);border-radius:999px;padding:5px 10px;font-size:12px">★ ' + o.rating + "</span></span></button>";
      }).join("") + "</div></div>";
    foot.innerHTML = "";
  }
  function renderMenu() {
    var o = outlet(), c = city();
    if (!state.cat) state.cat = RD.menu[0].id;
    head("Menu · " + o.name, c.name + " prices · tap + to add");
    var cat = RD.menu.find(function (m) { return m.id === state.cat; });
    body.innerHTML =
      '<div class="store"><div><small>Ordering from</small><b>' + esc(o.name) + ", " + esc(c.name) + "</b><small>" + o.hours + " · " + esc(o.display) + '</small></div><button data-go="state">Change</button></div>' +
      '<div class="cats">' + RD.menu.map(function (m) { return '<button data-cat="' + m.id + '"' + (m.id === state.cat ? ' class="on"' : "") + ">" + esc(m.name) + "</button>"; }).join("") + "</div>" +
      '<div class="cat-title">' + esc(cat.name) + "<small>" + cat.gu + "</small></div>" + (cat.note ? '<div class="cat-note">' + esc(cat.note) + "</div>" : "") +
      '<div class="items">' + cat.items.map(function (it, i) { return itemHtml(cat, it, i); }).join("") + "</div>" +
      '<p class="wa-note">Prices indicative · 5% GST extra · farsan parcels min. 250 g · packed in 300 / 500 / 1000 ml containers</p>';
    renderFoot();
  }
  function itemHtml(cat, it, i) {
    var pr = priceOf(it), key0 = cat.id + ":" + i;
    var opts = Object.keys(pr).map(function (u) {
      var key = key0 + ":" + u, q = state.cart[key] ? state.cart[key].q : 0;
      return '<span class="opt' + (q ? " has" : "") + '"><span>' + (RD.unitLabel[u] || u) + '</span><span class="pr">' + rupee(pr[u]) + '</span><span class="q">' +
        (q ? '<button data-dec="' + key + '">−</button><span>' + q + "</span>" : "") + '<button class="add" data-add="' + key + '" data-cat="' + cat.id + '" data-i="' + i + '" data-u="' + u + '">+</button></span></span>';
    }).join("");
    var pic = it.img ? '<img src="assets/img/' + it.img + '-sm.webp" alt="" loading="lazy">' : "રા";
    return '<div class="item"><div class="pic">' + pic + '</div><div><div class="nm">' + esc(it.n) + (it.sub ? "<small>" + esc(it.sub) + "</small>" : "") + '</div><div class="opts">' + opts + "</div></div></div>";
  }
  function renderFoot() {
    var n = cartCount();
    foot.innerHTML = '<div class="cart-bar"><div class="tot"><small>' + (n ? n + " item" + (n > 1 ? "s" : "") + " in your parcel" : "Your parcel is empty") + "</small><b>" + rupee(cartTotal()) + "</b></div>" +
      (state.view === "cart"
        ? '<a class="btn btn-red" id="rdOrder" href="#" target="_blank" rel="noopener"' + (n ? "" : ' style="opacity:.5;pointer-events:none"') + '>Order on WhatsApp ↗</a>'
        : '<button class="btn btn-maroon" id="rdReview"' + (n ? "" : ' style="opacity:.5;pointer-events:none"') + ">Review &amp; order →</button>") + "</div>";
    if (state.view === "cart" && n) $("rdOrder").href = waLink();
    updateFab();
  }
  function renderCart() {
    var o = outlet();
    head("Your parcel", "Goes to " + o.name + " on WhatsApp");
    var keys = Object.keys(state.cart);
    body.innerHTML = '<button class="back" data-go="menu">← Back to menu</button>' +
      (keys.length ? '<div class="cart-list">' + keys.map(function (k) {
        var r = state.cart[k];
        return '<div class="cart-row"><div><b>' + esc(r.name) + "</b><small>" + esc(r.unit) + " × " + r.q + " · " + rupee(r.price) + ' each</small></div><div class="q"><button data-dec="' + k + '">−</button><span>' + r.q + '</span><button data-inc="' + k + '">+</button></div><b>' + rupee(r.q * r.price) + "</b></div>";
      }).join("") + "</div>" +
        '<div class="store"><div><small>Pickup / delivery from</small><b>' + esc(o.name) + "</b><small>" + esc(o.address) + "</small></div></div>" +
        '<p class="wa-note">Tapping “Order on WhatsApp” opens a ready-made message to ' + esc(o.display) + ". The outlet confirms availability, timing and the final bill.</p>"
        : '<div class="empty"><span class="gu">ખાલી!</span>Nothing in your parcel yet.<br><button class="btn btn-sand" data-go="menu" style="margin-top:14px">Browse the menu</button></div>');
    renderFoot();
  }
  function waLink() {
    var o = outlet(), c = city(), lines = [];
    lines.push("Namaste Radhe Dhokla " + o.name + " 🙏");
    lines.push("I would like to order the following:");
    lines.push("");
    var i = 1;
    Object.keys(state.cart).forEach(function (k) { var r = state.cart[k]; lines.push(i++ + ". " + r.name + " — " + r.unit + " × " + r.q + " (" + rupee(r.price * r.q) + ")"); });
    lines.push("");
    lines.push("Approx. total: " + rupee(cartTotal()) + " (+ GST)");
    lines.push("City: " + c.name + " · Outlet: " + o.name);
    lines.push("Please confirm availability, pickup time and the final amount. Thank you!");
    lines.push("— sent from radhedhokla.in");
    return "https://wa.me/" + o.phone + "?text=" + encodeURIComponent(lines.join("\n"));
  }

  /* ---------- events (delegated) ---------- */
  app.addEventListener("click", function (e) {
    var t = e.target.closest("button,[data-go]"); if (!t) return;
    var d = t.dataset;
    if (d.state) { state.stateId = d.state; state.cityId = null; state.outletId = null; render(); }
    else if (d.city) { state.cityId = d.city; state.outletId = null; render(); }
    else if (d.outlet) { state.outletId = d.outlet; state.view = "menu"; save(); render(); }
    else if (d.go === "state") { state.stateId = null; state.cityId = null; state.outletId = null; state.view = "menu"; save(); render(); }
    else if (d.go === "city") { state.cityId = null; state.outletId = null; save(); render(); }
    else if (d.go === "menu") { state.view = "menu"; render(); }
    else if (d.cat) { state.cat = d.cat; renderMenu(); body.scrollTop = 0; }
    else if (d.add) {
      var cat = RD.menu.find(function (m) { return m.id === d.cat; }), it = cat.items[d.i | 0], pr = priceOf(it);
      if (!state.cart[d.add]) state.cart[d.add] = { name: it.n, unit: RD.unitLabel[d.u] || d.u, price: pr[d.u], q: 0 };
      state.cart[d.add].q++; save(); renderMenuKeepScroll();
    }
    else if (d.inc) { state.cart[d.inc].q++; save(); state.view === "cart" ? renderCart() : renderMenuKeepScroll(); }
    else if (d.dec) { if (--state.cart[d.dec].q <= 0) delete state.cart[d.dec]; save(); state.view === "cart" ? renderCart() : renderMenuKeepScroll(); }
    else if (t.id === "rdReview") { state.view = "cart"; render(); }
  });
  function renderMenuKeepScroll() { var s = body.scrollTop; renderMenu(); body.scrollTop = s; }
})();
