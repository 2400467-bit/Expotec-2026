const traducoes = {
  pt: {
    "nav.inicio": "Início",
    "nav.sobre": "Sobre o Projeto",
    "nav.participantes": "Participantes do Projeto",
    "theme.toggle": "Alternar tema claro/escuro",
    "index.hero.eyebrow": "Projeto escolar · Tecnologia & Design",
    "index.hero.sub": "Uma ferramenta que transforma ideias em objetos, camada por camada.",
    "index.video.label": "Protótipo em vídeo",
    "index.compare.intro": "Arraste a barra para comparar o projeto desmontado com a caneta em uso.",
    "compare.before": "Antes · Desmontado",
    "compare.after": "Depois · Em uso",
    "compare.aria": "Arraste para comparar antes e depois",
    "project.label": "O projeto",
    "project.card1.title": "O que é o projeto?",
    "project.card1.text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste et tempore nam aliquid obcaecati odio ducimus veritatis asperiores modi. Inventore, magnam molestias quidem eligendi similique tempora quibusdam accusamus officia possimus?",
    "project.card2.title": "Benefícios do projeto",
    "project.card2.text": "Através da smart pen é possível ajudar indivíduos em sua fisioterapia. Com ela, o paciente poderá realizar desenhos de formas geométricas a mando do profissional a fim de analisar sua condição física. Assim será possível ler velocidade, pressão, direção, precisão e outros. Será possível transformar a análise em brincadeiras e jogos, permitindo o engajamento do paciente e diminuindo seu estresse em longos períodos. Poderá ser obtido dados precisos da condição do indivíduo e ajudar na recuperação progressiva do movimento corporal.",
    "images.label": "Imagens do projeto",
    "image.placeholder": "Imagem do projeto",
    "footer.text": "Caneta 3D — Expotec 2026",
    "sobre.hero.title": "Sobre",
    "participantes.hero.title": "Participantes"
  },
  en: {
    "nav.inicio": "Home",
    "nav.sobre": "About the Project",
    "nav.participantes": "Project Participants",
    "theme.toggle": "Toggle light/dark theme",
    "index.hero.eyebrow": "School project · Technology & Design",
    "index.hero.sub": "A tool that turns ideas into objects, layer by layer.",
    "index.video.label": "Video prototype",
    "index.compare.intro": "Drag the bar to compare the disassembled project with the pen in use.",
    "compare.before": "Before · Disassembled",
    "compare.after": "After · In use",
    "compare.aria": "Drag to compare before and after",
    "project.label": "The project",
    "project.card1.title": "What is the project?",
    "project.card1.text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste et tempore nam aliquid obcaecati odio ducimus veritatis asperiores modi. Inventore, magnam molestias quidem eligendi similique tempora quibusdam accusamus officia possimus?",
    "project.card2.title": "Benefits of the project",
    "project.card2.text": "With the smart pen, it's possible to help individuals in their physiotherapy. With it, the patient can draw geometric shapes as directed by the professional in order to analyze their physical condition. This makes it possible to read speed, pressure, direction, precision, and more. The analysis can be turned into games and playful activities, boosting patient engagement and reducing stress over long sessions. Precise data on the individual's condition can be obtained, helping with the progressive recovery of body movement.",
    "images.label": "Project images",
    "image.placeholder": "Project image",
    "footer.text": "Caneta 3D — Expotec 2026",
    "sobre.hero.title": "About",
    "participantes.hero.title": "Participants"
  },
  es: {
    "nav.inicio": "Inicio",
    "nav.sobre": "Sobre el Proyecto",
    "nav.participantes": "Participantes del Proyecto",
    "theme.toggle": "Alternar tema claro/oscuro",
    "index.hero.eyebrow": "Proyecto escolar · Tecnología y Diseño",
    "index.hero.sub": "Una herramienta que transforma ideas en objetos, capa por capa.",
    "index.video.label": "Prototipo en video",
    "index.compare.intro": "Arrastra la barra para comparar el proyecto desmontado con el bolígrafo en uso.",
    "compare.before": "Antes · Desmontado",
    "compare.after": "Después · En uso",
    "compare.aria": "Arrastra para comparar antes y después",
    "project.label": "El proyecto",
    "project.card1.title": "¿Qué es el proyecto?",
    "project.card1.text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste et tempore nam aliquid obcaecati odio ducimus veritatis asperiores modi. Inventore, magnam molestias quidem eligendi similique tempora quibusdam accusamus officia possimus?",
    "project.card2.title": "Beneficios del proyecto",
    "project.card2.text": "Con el smart pen es posible ayudar a personas en su fisioterapia. Con ella, el paciente podrá realizar dibujos de formas geométricas según las indicaciones del profesional para analizar su condición física. Así será posible leer velocidad, presión, dirección, precisión y otros datos. El análisis podrá transformarse en juegos y actividades lúdicas, aumentando la participación del paciente y reduciendo su estrés en sesiones largas. Se podrán obtener datos precisos sobre la condición del individuo, ayudando en la recuperación progresiva del movimiento corporal.",
    "images.label": "Imágenes del proyecto",
    "image.placeholder": "Imagen del proyecto",
    "footer.text": "Caneta 3D — Expotec 2026",
    "sobre.hero.title": "Acerca de",
    "participantes.hero.title": "Participantes"
  }
};

function aplicarIdioma(lang){
  const dict = traducoes[lang] || traducoes.pt;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const chave = el.getAttribute('data-i18n');
    if (dict[chave]) el.textContent = dict[chave];
  });

  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    el.getAttribute('data-i18n-attr').split(',').forEach(par => {
      const [atributo, chave] = par.split(':');
      if (dict[chave]) el.setAttribute(atributo, dict[chave]);
    });
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('ativo', btn.dataset.lang === lang);
  });

  document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : lang);
  localStorage.setItem('caneta3d-lang', lang);
}

function trocarIdioma(lang){
  aplicarIdioma(lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const salvo = localStorage.getItem('caneta3d-lang') || 'pt';
  aplicarIdioma(salvo);
});