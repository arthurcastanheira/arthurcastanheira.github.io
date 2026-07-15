/* ============================================================
   All site copy lives here. Edit pt/en values freely —
   every element with a data-i18n attribute is swapped on toggle.
   ============================================================ */

const translations = {
  // ---------- NAV ----------
  "nav.trocae":     { pt: "Trocaê",            en: "Trocaê" },
  "nav.operate":    { pt: "Como opero",        en: "How I operate" },
  "nav.background": { pt: "Trajetória",        en: "Background" },
  "nav.beyond":     { pt: "Além do trabalho",  en: "Beyond work" },
  "nav.contact":    { pt: "Contato",           en: "Contact" },

  // ---------- HERO ----------
  "hero.eyebrow": {
    pt: "Founder & Operator",
    en: "Founder & Operator"
  },
  "hero.positioning": {
    pt: "Fundador de 25 anos que constrói empresas sozinho, e lança rápido com IA.",
    en: "25-year-old founder who builds companies solo, and ships fast with AI."
  },
  "hero.pitch": {
    pt: "Criei a Trocaê do zero: produto, parcerias, financeiro e crescimento. Antes disso, um histórico comercial de recordes. Não espero condições ideais, construo com o que existe.",
    en: "I built Trocaê from scratch: product, partnerships, finance and growth. Before that, a record-setting commercial track record. I don't wait for perfect conditions, I build with what's in front of me."
  },
  "hero.location": {
    pt: "Belo Horizonte, Brasil · Aberto a presencial e remoto",
    en: "Belo Horizonte, Brazil · Open to on-site and remote"
  },
  "hero.ctaTrocae": { pt: "Ver Trocaê",  en: "See Trocaê" },
  "hero.ctaContact": { pt: "Contato",    en: "Get in touch" },
  "hero.ctaCv":     { pt: "Baixar CV ↓", en: "Download CV ↓" },

  // ---------- TROCAÊ ----------
  "trocae.eyebrow": {
    pt: "Projeto próprio — estudo de caso",
    en: "My own venture — case study"
  },
  "trocae.what": {
    pt: "Marketplace seguro de revenda de ingressos. Lançado em 2026 com estratégia city-first, começando por Belo Horizonte.",
    en: "A secure ticket-resale marketplace. Launched in 2026 with a city-first strategy, starting in Belo Horizonte."
  },
  "trocae.soloTitle": {
    pt: "O que eu fiz — sozinho",
    en: "What I did — solo"
  },
  "trocae.item1": {
    pt: "<strong>Construí a empresa inteira sozinho</strong> — produto, comercial, financeiro e operação.",
    en: "<strong>Built and developed the entire company alone</strong> — product, sales, finance and operations."
  },
  "trocae.item2": {
    pt: "<strong>Resolvi o cold-start de marketplace bilateral</strong> redesenhando a aquisição em torno de escassez real de inventário — eventos esgotados como porta de entrada.",
    en: "<strong>Solved the two-sided marketplace cold-start problem</strong> by redesigning acquisition around real inventory scarcity — sold-out events as the wedge."
  },
  "trocae.item3": {
    pt: "<strong>Estruturei parcerias B2B</strong> com produtoras e promoters de eventos via pitch deck e negociação direta, ancoradas em proteção de marca e controle do mercado secundário.",
    en: "<strong>Structured B2B partnerships</strong> with event producers and promoters through pitch decks and direct negotiation, anchored on brand protection and secondary-market control."
  },
  "trocae.item4": {
    pt: "<strong>Modelei cenários financeiros</strong> (GMV, take rate, resale rate) para validar precificação e viabilidade das parcerias.",
    en: "<strong>Modeled financial scenarios</strong> (GMV, take rate, resale rate) to validate pricing and partnership viability."
  },
  "trocae.item5": {
    pt: "<strong>Geri uma agência de desenvolvimento externa</strong> em retainer, priorizando o roadmap técnico com zero orçamento adicional.",
    en: "<strong>Managed an external dev agency</strong> on retainer, prioritizing the technical roadmap with zero additional budget."
  },
  "trocae.live": {
    pt: "Ver ao vivo — trocae.com.br ↗",
    en: "See it live — trocae.com.br ↗"
  },

  // ---------- HOW I OPERATE ----------
  "operate.eyebrow": {
    pt: "Evidência, não adjetivos",
    en: "Evidence, not adjectives"
  },
  "operate.title": {
    pt: "Como eu opero",
    en: "How I operate"
  },
  "operate.stat1": {
    pt: "reuniões de vendas realizadas",
    en: "sales meetings held"
  },
  "operate.stat2": {
    pt: "reuniões em um único mês — recorde da empresa",
    en: "meetings in a single month — company record"
  },
  "operate.stat3": {
    pt: "das metas batidas",
    en: "of targets hit"
  },
  "operate.stat4": {
    pt: "de no-show — uma das menores taxas do time",
    en: "no-show rate — one of the lowest on the team"
  },
  "operate.card1Title": {
    pt: "AI-native",
    en: "AI-native"
  },
  "operate.card1Body": {
    pt: "Construo com Claude e Claude Code no centro do processo — do produto ao pitch. Treinamentos da Anthropic concluídos e cursos de empreendedorismo com o G4 Educação.",
    en: "I build with Claude and Claude Code at the center of the process — from product to pitch. Completed Anthropic training and entrepreneurship courses with G4 Educação."
  },
  "operate.card2Title": {
    pt: "Força comercial",
    en: "Commercial firepower"
  },
  "operate.card2Body": {
    pt: "Mais de 600 reuniões de vendas, recorde de 36 reuniões em um mês, 100% das metas batidas e uma das menores taxas de no-show (5,1%). Vender é o que destrava todo o resto.",
    en: "600+ sales meetings, a record 36 meetings in a single month, 100% of targets hit and one of the lowest no-show rates (5.1%). Selling is what unlocks everything else."
  },
  "operate.card3Title": {
    pt: "Viés de ação",
    en: "Bias to action"
  },
  "operate.card3Body": {
    pt: "Lancei um marketplace inteiro sem time e sem orçamento extra. Quando falta recurso, eu redesenho o problema — não espero aprovação para começar.",
    en: "I launched an entire marketplace with no team and no extra budget. When resources are missing, I redesign the problem — I don't wait for permission to start."
  },
  "operate.card4Title": {
    pt: "Muitos chapéus",
    en: "Many hats"
  },
  "operate.card4Body": {
    pt: "No início da carreira, assumi um departamento financeiro inteiro e organizei mais de 1.100 pastas de clientes. Hoje, na Trocaê, sou produto, vendas, finanças e operação ao mesmo tempo.",
    en: "Early in my career I ran an entire finance department and organized 1,100+ client files. Today at Trocaê I'm product, sales, finance and operations at once."
  },

  // ---------- BACKGROUND ----------
  "background.eyebrow": {
    pt: "Versão condensada — o CV completo está no PDF",
    en: "Condensed version — the full resume is in the PDF"
  },
  "background.title": {
    pt: "Trajetória",
    en: "Background"
  },
  "background.now": { pt: "hoje", en: "now" },
  "background.job1Role": { pt: "Founder & CEO", en: "Founder & CEO" },
  "background.job1Desc": {
    pt: "Marketplace de revenda segura de ingressos. Construído solo, do zero.",
    en: "Secure ticket-resale marketplace. Built solo, from zero."
  },
  "background.job2Role": { pt: "SDR", en: "SDR" },
  "background.job2Desc": {
    pt: "Recorde histórico da empresa: 36 reuniões realizadas em um único mês.",
    en: "All-time company record: 36 meetings held in a single month."
  },
  "background.job3Role": { pt: "Estagiário de SDR", en: "SDR Intern" },
  "background.job3Desc": {
    pt: "600+ reuniões, 100% das metas batidas, gestão da rede de parcerias estratégicas.",
    en: "600+ meetings, 100% of targets hit, managed the strategic-partnerships network."
  },
  "background.job4Role": { pt: "Assistente Administrativo", en: "Administrative Assistant" },
  "background.job4Desc": {
    pt: "Responsável por todo o setor financeiro e pela organização de 1.100+ pastas de clientes.",
    en: "Ran the entire finance department and organized 1,100+ client files."
  },
  "background.eduTitle": { pt: "Formação", en: "Education" },
  "background.eduBody": {
    pt: "Administração de Empresas — UNISUL / IBMEC",
    en: "Business Administration — UNISUL / IBMEC"
  },
  "background.langTitle": { pt: "Idiomas", en: "Languages" },
  "background.langBody": {
    pt: "Português (nativo) · Inglês (avançado) · Espanhol (básico)",
    en: "Portuguese (native) · English (advanced) · Spanish (basic)"
  },

  // ---------- BEYOND WORK ----------
  "beyond.eyebrow": {
    pt: "Sinal real de founder-fit",
    en: "A real founder-fit signal"
  },
  "beyond.title": {
    pt: "Além do trabalho",
    en: "Beyond work"
  },
  "beyond.card1Title": {
    pt: "Eventos & noite",
    en: "Events & nightlife"
  },
  "beyond.card1Body": {
    pt: "Mais de 5 anos organizando eventos. Rede real na cena de eventos e vida noturna — o mesmo mercado que a Trocaê atende.",
    en: "5+ years organizing events. A real network in the events and nightlife scene — the same market Trocaê serves."
  },
  "beyond.card2Title": { pt: "DJ", en: "DJ" },
  "beyond.card2Body": {
    pt: "DJ nas horas livres. Energia alta e leitura de público — habilidades que valem tanto no palco quanto numa negociação.",
    en: "DJ in my free time. High energy and reading the room — skills that work on stage and in a negotiation."
  },
  "beyond.card3Title": { pt: "MMA", en: "MMA" },
  "beyond.card3Body": {
    pt: "Anos de boxe e muay thai, agora jiu-jitsu. Disciplina, pressão e consistência — treino que se transfere direto para ambientes early-stage de ritmo alto.",
    en: "Years of boxing and muay thai, now jiu-jitsu. Discipline, pressure and consistency — training that transfers directly to high-tempo, early-stage environments."
  },

  // ---------- CONTACT ----------
  "contact.title": {
    pt: "Vamos conversar",
    en: "Let's talk"
  },
  "contact.closing": {
    pt: "Se você está construindo algo ambicioso e precisa de alguém que executa de ponta a ponta, me chama. Respondo rápido.",
    en: "If you're building something ambitious and need someone who executes end to end, reach out. I reply fast."
  },
  "contact.phone": { pt: "Telefone", en: "Phone" },
  "contact.cv": { pt: "Baixar CV ↓", en: "Download CV ↓" },

  // ---------- FOOTER ----------
  "footer.built": {
    pt: "Feito com Claude Code",
    en: "Built with Claude Code"
  }
};

/* ============ Language toggle ============ */

const LANG_KEY = "site-lang";

function setLanguage(lang) {
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const entry = translations[el.dataset.i18n];
    if (entry && entry[lang] !== undefined) {
      el.innerHTML = entry[lang];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch (_) { /* private mode — ignore */ }
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

let initialLang = "pt";
try {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved === "en" || saved === "pt") initialLang = saved;
} catch (_) { /* ignore */ }
setLanguage(initialLang);

/* ============ Fade-in on scroll ============ */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
