// ---- Menu hamburguer ----
function toggleMenu(){
  const menu = document.getElementById("menuOpcoes");
  const btn = document.querySelector(".menu-toggle");
  const aberto = menu.classList.toggle("aberto");
  btn.classList.toggle("aberto", aberto);
  btn.setAttribute("aria-expanded", aberto);
}

// ---- Tema claro/escuro ----
function initTheme(){
  const btn = document.getElementById("themeToggle");
  if(!btn) return;
  const root = document.documentElement;

  btn.addEventListener("click", () => {
    const estaEscuro = root.getAttribute("data-theme") === "dark";
    if(estaEscuro){
      root.removeAttribute("data-theme");
      localStorage.setItem("caneta3d-theme", "light");
    } else {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("caneta3d-theme", "dark");
    }
  });
}

// ---- Reveal ao rolar a página (evita animar tudo de uma vez no load) ----
function initScrollReveal(){
  const els = document.querySelectorAll(".animar");
  if(!("IntersectionObserver" in window)){
    els.forEach(el => el.classList.add("in-view"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  els.forEach((el, i) => {
    // aplica um pequeno escalonamento automático caso não haja delay manual definido
    if(!el.style.transitionDelay){
      el.style.transitionDelay = Math.min(i * 60, 300) + "ms";
    }
    io.observe(el);
  });
}

// ---- Slider comparador (antes / depois) ----
function initCompareSlider(){
  const wrap = document.getElementById("compareSlider");
  if(!wrap) return;
  const handle = document.getElementById("compareHandle");
  const after = document.getElementById("compareAfter");
  let dragging = false;

  function setPosition(pct){
    pct = Math.min(100, Math.max(0, pct));
    after.style.clipPath = `inset(0 0 0 ${pct}%)`;
    handle.style.left = pct + "%";
    handle.setAttribute("aria-valuenow", Math.round(pct));
  }

  function pctFromClientX(clientX){
    const rect = wrap.getBoundingClientRect();
    return ((clientX - rect.left) / rect.width) * 100;
  }

  handle.addEventListener("pointerdown", (e) => {
    dragging = true;
    handle.setPointerCapture(e.pointerId);
  });
  wrap.addEventListener("pointerdown", (e) => {
    if(e.target === handle || handle.contains(e.target)) return;
    setPosition(pctFromClientX(e.clientX));
  });
  window.addEventListener("pointermove", (e) => {
    if(!dragging) return;
    setPosition(pctFromClientX(e.clientX));
  });
  window.addEventListener("pointerup", () => { dragging = false; });

  handle.addEventListener("keydown", (e) => {
    const current = parseFloat(handle.style.left) || 50;
    if(e.key === "ArrowLeft"){ setPosition(current - 3); e.preventDefault(); }
    if(e.key === "ArrowRight"){ setPosition(current + 3); e.preventDefault(); }
  });

  setPosition(50);
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initScrollReveal();
  initCompareSlider();
});
