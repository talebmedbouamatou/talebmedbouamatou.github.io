const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
let currentLanguage = 'en';

const copy = {
  en: {
    title: 'Taleb Bouamatou — Electrical Engineering',
    description: 'Portfolio of Taleb Mohamed Bouamatou, electrical engineering student focused on automation and industrial computing.',
    skip: 'Skip to content',
    openMenu: 'Open navigation',
    closeMenu: 'Close navigation',
    chooseLanguage: 'Choose language',
    navigationLabel: 'Main navigation',
    nav: ['About', 'Projects', 'Experience', 'Education', 'Contact'],
    heroEyebrow: 'Electrical Engineering',
    heroLead: 'Electrical engineering student focused on automation and industrial computing, currently pursuing a dual-degree program between ENIT in Tunisia and ESP Nouakchott in Mauritania.',
    explore: 'Explore my work <span aria-hidden="true">↘</span>',
    getInTouch: 'Get in touch <span aria-hidden="true">↗</span>',
    heroMeta: 'Open to engineering opportunities',
    photoAlt: 'Taleb Bouamatou wearing a hard hat during an industrial visit',
    photoCaption: 'Electrical engineering student',
    aboutEyebrow: '01 — About',
    aboutTitle: 'About Me',
    aboutParagraphs: [
      'I am an electrical engineering student with a strong interest in automation, embedded systems and industrial applications. My studies and project work have given me experience across control, programming, instrumentation and power systems.',
      'I am currently completing a dual-degree program between ENIT in Tunis and ESP Nouakchott. I enjoy learning by building, testing and improving practical engineering solutions.'
    ],
    githubProfile: 'View my GitHub profile <span aria-hidden="true">↗</span>',
    projectsEyebrow: '02 — Selected work',
    projectsTitle: 'Projects',
    projectsIntro: 'Academic and engineering projects across automation, robotics, embedded systems and energy.',
    projects: [
      {type:'ROBOTICS · ROS 2',title:'3D PERCEPTION & OBSTACLE AVOIDANCE',description:'Mobile-robot perception using a depth camera to detect obstacles, identify free space and adapt the robot’s path in real time.',tags:['ROS 2','Depth camera','Mobile robotics']},
      {type:'IOT · SUPERVISION',title:'IOT REAL-TIME ENERGY MONITORING',description:'Energy-monitoring solution for measurement, storage and real-time visualisation using connected embedded devices and a dashboard.',tags:['Raspberry Pi','ESP32','MQTT','Node-RED','Grafana']},
      {type:'POWER ELECTRONICS · FPGA',title:'BLDC MOTOR CONTROL ON SOC',description:'Modelled a BLDC motor in MATLAB/Simulink and developed six-step trapezoidal control for a Zybo Z7, with a three-phase MOSFET power board.',tags:['MATLAB / Simulink','Zybo Z7','Motor control']},
      {type:'EMBEDDED CONTROL',title:'SELF-BALANCING BALLBOT',description:'Modelled, simulated and implemented a self-balancing robot with an STM32, encoders and a stabilising control system.',tags:['STM32','Control systems','Encoders']},
      {type:'INDUSTRIAL AUTOMATION',title:'AUTOMATED SORTING LINE',description:'Programmed Siemens and Schneider PLCs for sequential control of a sorting line and manipulator arm using Ladder logic and GRAFCET.',tags:['PLC','Ladder','GRAFCET']},
      {type:'ELECTRICAL ENGINEERING',title:'ELECTRICAL & PV SYSTEM SIZING',description:'Studied residential and industrial electrical installations with Caneco BT and manual checks, and sized and simulated PV systems with PVsyst.',tags:['Caneco BT','PVsyst','Electrical design']},
      {type:'EMBEDDED SYSTEMS',title:'TEMPERATURE CONTROL WITH STM32',description:'Measured temperature and controlled a fan using an STM32 microcontroller, with software developed in STM32CubeIDE and Keil.',tags:['STM32','STM32CubeIDE','Keil']}
    ],
    projectImages: [
      {label:'DEPTH PERCEPTION / ROS 2',svg:[]},
      {label:'IOT ENERGY MONITORING',svg:['ENERGY MONITORING','LIVE DATA']},
      {label:'BLDC MOTOR CONTROL / SOC',svg:['3-PHASE CONTROL','PWM / SIX-STEP']},
      {label:'SELF-BALANCING ROBOT',svg:['STM32','BALANCE']},
      {label:'AUTOMATED SORTING LINE',svg:['PLC SEQUENCE']},
      {label:'ELECTRICAL & PV SYSTEM DESIGN',svg:['PV SYSTEM SIZING']},
      {label:'STM32 TEMPERATURE CONTROL',svg:['TEMPERATURE','FAN CONTROL']}
    ],
    experienceEyebrow: '03 — Experience',
    experienceTitle: 'From theory to<br><em>practice.</em>',
    experiences: [
      {date:'JUL — SEP 2026',location:'Nouadhibou, Mauritania',title:'Engineering Intern',company:'SNIM · National Industrial and Mining Company',description:'Studied an installation equipped with a Schneider Electric Altivar 71 drive; contributed to migration to an Altivar Process ATV930, parameter adaptation, testing and operational checks.'},
      {date:'AUG — SEP 2024',location:'Nouakchott, Mauritania',title:'Discovery Intern',company:'SOMELEC · 180 MW Dual-Fuel Power Plant',description:'Observed power-plant operations, electrical substations, generating sets, transformers and the control room, with an introduction to maintenance, alarm monitoring and industrial safety.'}
    ],
    skillsEyebrow: '04 — Toolbox',
    skillsTitle: 'Skills',
    skillsIntro: 'Tools and methods I have used throughout my coursework, internships and projects.',
    skillGroups:['Programming','Automation & Embedded','Engineering Software','Ways of Working'],
    softSkills:['Adaptability','Teamwork','Time management','Communication','Problem solving'],
    educationEyebrow: '05 — Education',
    educationTitle: 'My path in<br><em>engineering.</em>',
    education: [
      {title:'Dual-Degree Program in Electrical Engineering',school:'École Nationale d’Ingénieurs de Tunis (ENIT) · Tunisia'},
      {title:'Engineering Cycle in Electrical Engineering',school:'École Supérieure Polytechnique de Nouakchott (ESP) · Mauritania'},
      {title:'Preparatory Classes for Engineering Schools · PCSI–PSI',school:'CPGE of Nouakchott · Mauritania'},
      {title:'Scientific Baccalaureate · Mathematics',school:'SABLETTES · Nouakchott, Mauritania'}
    ],
    contactEyebrow: '06 — Contact',
    contactTitle:'Have a project<br>in mind?',
    contactLead:'I would be glad to connect about engineering projects, internships and opportunities.',
    email:'Email me <span aria-hidden="true">↗</span>',
    languages:'<span>Arabic <b>Native</b></span><span>French <b>DELF B2</b></span><span>English <b>TOEIC B2 · EF SET C1</b></span>',
    backToTop:'Back to top ↑'
  },
  fr: {
    title: 'Taleb Bouamatou — Génie électrique',
    description: 'Portfolio de Taleb Mohamed Bouamatou, étudiant en génie électrique spécialisé en automatisme et informatique industrielle.',
    skip: 'Aller au contenu',
    openMenu: 'Ouvrir la navigation',
    closeMenu: 'Fermer la navigation',
    chooseLanguage: 'Choisir la langue',
    navigationLabel: 'Navigation principale',
    nav: ['À propos', 'Projets', 'Expérience', 'Formation', 'Contact'],
    heroEyebrow: 'Génie électrique',
    heroLead: 'Élève-ingénieur en génie électrique, orienté vers l’automatisme et l’informatique industrielle. Je poursuis actuellement un programme de double diplôme entre l’ENIT, en Tunisie, et l’ESP de Nouakchott, en Mauritanie.',
    explore: 'Voir mes projets <span aria-hidden="true">↘</span>',
    getInTouch: 'Me contacter <span aria-hidden="true">↗</span>',
    heroMeta: 'Ouvert aux opportunités en ingénierie',
    photoAlt: 'Taleb Bouamatou portant un casque de sécurité lors d’une visite industrielle',
    photoCaption: 'Élève-ingénieur en génie électrique',
    aboutEyebrow: '01 — À propos',
    aboutTitle: 'À propos de moi',
    aboutParagraphs: [
      'Je suis étudiant en génie électrique et je m’intéresse particulièrement à l’automatisme, aux systèmes embarqués et aux applications industrielles. Ma formation et mes projets m’ont permis d’aborder la commande, la programmation, l’instrumentation et les systèmes électriques.',
      'Je poursuis actuellement un programme de double diplôme entre l’ENIT à Tunis et l’ESP de Nouakchott. J’aime apprendre en réalisant, en testant et en améliorant des solutions d’ingénierie concrètes.'
    ],
    githubProfile: 'Voir mon profil GitHub <span aria-hidden="true">↗</span>',
    projectsEyebrow: '02 — Projets sélectionnés',
    projectsTitle: 'Projets',
    projectsIntro: 'Projets académiques en automatisme, robotique, systèmes embarqués et énergie.',
    projects: [
      {type:'ROBOTIQUE · ROS 2',title:'PERCEPTION 3D ET ÉVITEMENT D’OBSTACLES',description:'Conception d’un système de perception pour robot mobile utilisant une caméra de profondeur afin de détecter les obstacles, repérer les espaces libres et adapter la trajectoire en temps réel.',tags:['ROS 2','Caméra de profondeur','Robotique mobile']},
      {type:'IOT · SUPERVISION',title:'SUPERVISION ÉNERGÉTIQUE IOT EN TEMPS RÉEL',description:'Développement d’une solution de supervision énergétique pour mesurer, stocker et visualiser les données en temps réel à l’aide de dispositifs embarqués connectés et d’un tableau de bord.',tags:['Raspberry Pi','ESP32','MQTT','Node-RED','Grafana']},
      {type:'ÉLECTRONIQUE DE PUISSANCE · FPGA',title:'COMMANDE D’UN MOTEUR BLDC SUR SOC',description:'Modélisation d’un moteur BLDC sous MATLAB/Simulink et développement d’une commande trapézoïdale à six étapes sur Zybo Z7, avec une carte de puissance triphasée à MOSFET.',tags:['MATLAB / Simulink','Zybo Z7','Commande moteur']},
      {type:'COMMANDE EMBARQUÉE',title:'ROBOT BALLBOT AUTO-ÉQUILIBRÉ',description:'Modélisation, simulation et réalisation d’un robot auto-équilibré intégrant une carte STM32, des encodeurs et une commande de stabilisation.',tags:['STM32','Systèmes de commande','Codeurs']},
      {type:'AUTOMATISME INDUSTRIEL',title:'AUTOMATISATION D’UNE CHAÎNE DE TRI',description:'Programmation d’automates Siemens et Schneider pour commander séquentiellement une chaîne de tri et un bras manipulateur en Ladder et GRAFCET.',tags:['API','Ladder','GRAFCET']},
      {type:'GÉNIE ÉLECTRIQUE',title:'DIMENSIONNEMENT ÉLECTRIQUE ET PHOTOVOLTAÏQUE',description:'Étude d’installations électriques résidentielles et industrielles avec Caneco BT et vérifications manuelles, puis dimensionnement et simulation d’installations photovoltaïques avec PVsyst.',tags:['Caneco BT','PVsyst','Conception électrique']},
      {type:'SYSTÈMES EMBARQUÉS',title:'RÉGULATION DE TEMPÉRATURE AVEC STM32',description:'Mesure de la température et commande d’un ventilateur avec un microcontrôleur STM32 ; développement logiciel sous STM32CubeIDE et Keil.',tags:['STM32','STM32CubeIDE','Keil']}
    ],
    projectImages: [
      {label:'PERCEPTION PROFONDE / ROS 2',svg:[]},
      {label:'SUPERVISION ÉNERGÉTIQUE IOT',svg:['SUPERVISION ÉNERGÉTIQUE','DONNÉES EN DIRECT']},
      {label:'COMMANDE MOTEUR BLDC / SOC',svg:['COMMANDE TRIPHASÉE','PWM / SIX ÉTAPES']},
      {label:'ROBOT AUTO-ÉQUILIBRÉ',svg:['STM32','ÉQUILIBRE']},
      {label:'CHAÎNE DE TRI AUTOMATISÉE',svg:['SÉQUENCE API']},
      {label:'DIMENSIONNEMENT ÉLECTRIQUE ET PV',svg:['DIMENSIONNEMENT PV']},
      {label:'RÉGULATION DE TEMPÉRATURE STM32',svg:['TEMPÉRATURE','COMMANDE VENTILATEUR']}
    ],
    experienceEyebrow: '03 — Expérience',
    experienceTitle: 'De la théorie à<br><em>la pratique.</em>',
    experiences: [
      {date:'JUIL. — SEPT. 2026',location:'Nouadhibou, Mauritanie',title:'Stage ingénieur',company:'SNIM · Société Nationale Industrielle et Minière',description:'Étude d’une installation équipée d’un variateur Schneider Electric Altivar 71 ; participation à sa migration vers un Altivar Process ATV930, à l’adaptation des paramètres, aux essais et à la vérification du fonctionnement.'},
      {date:'AOÛT — SEPT. 2024',location:'Nouakchott, Mauritanie',title:'Stage de découverte',company:'SOMELEC · Centrale duale de 180 MW',description:'Observation du fonctionnement de la centrale, des postes électriques, des groupes électrogènes, des transformateurs et de la salle de commande, ainsi que des activités de maintenance, de surveillance des alarmes et de sécurité industrielle.'}
    ],
    skillsEyebrow: '04 — Boîte à outils',
    skillsTitle: 'Compétences',
    skillsIntro: 'Outils et méthodes utilisés pendant ma formation, mes stages et mes projets.',
    skillGroups:['Programmation','Automatisme et systèmes embarqués','Logiciels d’ingénierie','Compétences transversales'],
    softSkills:['Adaptabilité','Travail en équipe','Gestion du temps','Communication','Résolution de problèmes'],
    educationEyebrow: '05 — Formation',
    educationTitle: 'Mon parcours en<br><em>ingénierie.</em>',
    education: [
      {title:'Programme de double diplôme en génie électrique',school:'École Nationale d’Ingénieurs de Tunis (ENIT) · Tunisie'},
      {title:'Cycle ingénieur en génie électrique',school:'École Supérieure Polytechnique de Nouakchott (ESP) · Mauritanie'},
      {title:'Classes préparatoires aux grandes écoles · PCSI–PSI',school:'CPGE de Nouakchott · Mauritanie'},
      {title:'Baccalauréat scientifique · Mathématiques',school:'SABLETTES · Nouakchott, Mauritanie'}
    ],
    contactEyebrow: '06 — Contact',
    contactTitle:'Un projet<br>en tête ?',
    contactLead:'Je serais heureux d’échanger au sujet de projets d’ingénierie, de stages ou d’opportunités professionnelles.',
    email:'M’écrire <span aria-hidden="true">↗</span>',
    languages:'<span>Arabe <b>Langue maternelle</b></span><span>Français <b>DELF B2</b></span><span>Anglais <b>TOEIC B2 · EF SET C1</b></span>',
    backToTop:'Retour en haut ↑'
  }
};

function setHtml(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = value;
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function setBadgeLabel(element, value) {
  const textNode = Array.from(element.childNodes).find((node) => node.nodeType === Node.TEXT_NODE && node.nodeValue.trim());
  if (textNode) textNode.nodeValue = ` ${value}`;
}

function applyLanguage(language) {
  currentLanguage = language === 'fr' ? 'fr' : 'en';
  const t = copy[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.title = t.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = t.description;

  setText('.skip-link', t.skip);
  const mainNav = document.querySelector('.site-header nav');
  if (mainNav) mainNav.setAttribute('aria-label', t.navigationLabel);
  setText('.nav-links a[href="#about"]', t.nav[0]);
  setText('.nav-links a[href="#projects"]', t.nav[1]);
  setText('.nav-links a[href="#experience"]', t.nav[2]);
  setText('.nav-links a[href="#education"]', t.nav[3]);
  setText('.nav-links a[href="#contact"]', t.nav[4]);
  const languageGroup = document.querySelector('.language-switch');
  if (languageGroup) languageGroup.setAttribute('aria-label', t.chooseLanguage);

  setText('.hero .eyebrow', t.heroEyebrow);
  setText('.hero-lead', t.heroLead);
  setHtml('.hero-actions .button-dark', t.explore);
  setHtml('.hero-actions .text-link', t.getInTouch);
  setHtml('.hero-meta', t.heroMeta);
  const profile = document.querySelector('.photo-frame img');
  if (profile) profile.alt = t.photoAlt;
  setText('.photo-caption span:last-child', t.photoCaption);

  setText('.about-section .eyebrow', t.aboutEyebrow);
  setHtml('.about-section h2', t.aboutTitle);
  const aboutParagraphs = document.querySelectorAll('.about-copy p');
  t.aboutParagraphs.forEach((paragraph, index) => { if (aboutParagraphs[index]) aboutParagraphs[index].textContent = paragraph; });
  setHtml('.about-copy .text-link', t.githubProfile);

  setText('.projects-section .eyebrow', t.projectsEyebrow);
  setText('.projects-section h2', t.projectsTitle);
  setText('.projects-section .section-intro', t.projectsIntro);
  document.querySelectorAll('.project-card').forEach((card, index) => {
    const project = t.projects[index];
    if (!project) return;
    setTextFrom(card, '.project-type', project.type);
    setTextFrom(card, 'h3', project.title);
    setTextFrom(card, 'p', project.description);
    const imageInfo = t.projectImages[index];
    const imageLabel = card.querySelector('.image-label');
    if (imageLabel && imageInfo) imageLabel.textContent = imageInfo.label;
    const svgLabels = card.querySelectorAll('.project-image svg .svg-text');
    imageInfo?.svg.forEach((label, labelIndex) => { if (svgLabels[labelIndex]) svgLabels[labelIndex].textContent = label; });
    const tags = card.querySelector('.tags');
    if (tags) tags.innerHTML = project.tags.map((tag) => `<span>${tag}</span>`).join('');
  });

  setText('.experience-section .eyebrow', t.experienceEyebrow);
  setHtml('.experience-section h2', t.experienceTitle);
  document.querySelectorAll('.timeline-item').forEach((item, index) => {
    const experience = t.experiences[index];
    if (!experience) return;
    const date = item.querySelector('.timeline-date');
    if (date) date.innerHTML = `${experience.date}<span>${experience.location}</span>`;
    setTextFrom(item, 'h3', experience.title);
    setTextFrom(item, '.company', experience.company);
    const description = item.querySelector('div:last-child > p:last-child');
    if (description) description.textContent = experience.description;
  });

  setText('.skills-section .eyebrow', t.skillsEyebrow);
  setText('.skills-section h2', t.skillsTitle);
  setText('.skills-section .section-intro', t.skillsIntro);
  document.querySelectorAll('.skill-card-heading h3').forEach((heading, index) => { if (t.skillGroups[index]) heading.textContent = t.skillGroups[index]; });
  const embeddedCBadge = document.querySelector('.skill-card:nth-child(1) .skill-badge:nth-child(4)');
  if (embeddedCBadge) setBadgeLabel(embeddedCBadge, currentLanguage === 'fr' ? 'C embarqué' : 'Embedded C');
  const softBadges = document.querySelectorAll('.skill-card:nth-child(4) .skill-badge');
  t.softSkills.forEach((label, index) => { if (softBadges[index]) setBadgeLabel(softBadges[index], label); });

  setText('.education-section .eyebrow', t.educationEyebrow);
  setHtml('.education-section h2', t.educationTitle);
  document.querySelectorAll('.education-list article').forEach((item, index) => {
    const education = t.education[index];
    if (!education) return;
    setTextFrom(item, 'h3', education.title);
    setTextFrom(item, 'p', education.school);
  });

  setText('.contact-section .eyebrow', t.contactEyebrow);
  setHtml('.contact-section h2', t.contactTitle);
  setText('.contact-lead', t.contactLead);
  setHtml('.contact-section .button-light', t.email);
  setHtml('.languages', t.languages);
  setText('.footer-inner > a:last-child', t.backToTop);

  document.querySelectorAll('.language-switch button').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.language === currentLanguage));
  });
  if (toggle) toggle.setAttribute('aria-label', toggle.getAttribute('aria-expanded') === 'true' ? t.closeMenu : t.openMenu);
}

function setTextFrom(parent, selector, value) {
  const element = parent.querySelector(selector);
  if (element) element.textContent = value;
}

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    navLinks.classList.toggle('open', !isOpen);
    toggle.setAttribute('aria-label', isOpen ? copy[currentLanguage].openMenu : copy[currentLanguage].closeMenu);
  });
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', copy[currentLanguage].openMenu);
      navLinks.classList.remove('open');
    });
  });
}

document.querySelectorAll('.language-switch button').forEach((button) => {
  button.addEventListener('click', () => {
    applyLanguage(button.dataset.language);
    try { localStorage.setItem('portfolio-language', currentLanguage); } catch (_) {}
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelectorAll('.social-icon').forEach((logo) => {
  logo.addEventListener('error', () => { logo.hidden = true; }, { once: true });
});
document.querySelectorAll('.skill-logo').forEach((logo) => {
  const badge = logo.closest('.skill-badge');
  const settleLogo = () => {
    if (logo.naturalWidth > 0) badge.classList.add('logo-ready');
    else logo.hidden = true;
  };
  if (logo.complete) settleLogo();
  else {
    logo.addEventListener('load', settleLogo, { once: true });
    logo.addEventListener('error', () => { logo.hidden = true; }, { once: true });
  }
});

let savedLanguage = 'en';
try { savedLanguage = localStorage.getItem('portfolio-language') || 'en'; } catch (_) {}
applyLanguage(savedLanguage);
