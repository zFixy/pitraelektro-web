// Mobilní menu
(function () {
  var b = document.querySelector(".burger"), n = document.getElementById("menu");
  if (!b || !n) return;
  function set(open) {
    n.classList.toggle("open", open);
    b.setAttribute("aria-expanded", open);
  }
  b.addEventListener("click", function () { set(!n.classList.contains("open")); });
  n.addEventListener("click", function (e) { if (e.target.tagName === "A") set(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") set(false); });
  window.addEventListener("resize", function () { if (window.innerWidth > 860) set(false); });
})();

// Rozbalovací nabídka Produkty
(function () {
  var subs = document.querySelectorAll(".has-sub");
  subs.forEach(function (li) {
    var t = li.querySelector(".subtoggle");
    t.addEventListener("click", function () {
      var open = li.classList.toggle("open");
      t.setAttribute("aria-expanded", open);
    });
  });
  function closeAll() {
    subs.forEach(function (li) {
      li.classList.remove("open");
      li.querySelector(".subtoggle").setAttribute("aria-expanded", "false");
    });
  }
  document.addEventListener("click", function (e) { if (!e.target.closest(".has-sub")) closeAll(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeAll(); });
})();
