(function () {
  const STORAGE_KEY = 'site-lang';

  const translations = {
    'meta.title': {
      fr: 'Xiaoou Wang — TAL & Humanités numériques',
      en: 'Xiaoou Wang — NLP & Digital Humanities'
    },
    'meta.description': {
      fr: 'Site personnel de Xiaoou Wang — TAL, humanités numériques et prototypes pour la recherche.',
      en: 'Personal website of Xiaoou Wang — NLP, digital humanities and research prototypes.'
    },
    'lang.switch': {
      fr: 'English',
      en: 'Français'
    },
    'about.title': { fr: 'À propos', en: 'About Me' },
    'about.alt': {
      fr: 'Photo de profil de Xiaoou Wang',
      en: 'Profile photo of Xiaoou Wang'
    },
    'about.phd': {
      fr: 'Doctorat en Informatique, spécialisé en Traitement Automatique des Langues, réalisé au <a href="https://www.i3s.unice.fr/" target="_blank" class="text-decoration-none text-info">Laboratoire d\'Informatique, Signaux et Systèmes (i3S)</a> & <a href="https://www.inria.fr/fr" target="_blank" class="text-decoration-none text-info">Inria</a>',
      en: 'PhD in Computer Science, specializing in Natural Language Processing, completed at the <a href="https://www.i3s.unice.fr/en/" target="_blank" class="text-decoration-none text-info">Computer Science, Signals and Systems Laboratory (i3S)</a> & <a href="https://www.inria.fr/en" target="_blank" class="text-decoration-none text-info">Inria</a>'
    },
    'about.role': {
      fr: 'Ingénieur à la <a href="https://mshs.univ-cotedazur.fr/" target="_blank" class="text-decoration-none fw-bold text-info">MSHS Sud-Est</a>, accompagnant <a href="https://mshs.univ-cotedazur.fr/recherche/laboratoires-membres" target="_blank" class="text-decoration-none text-info">plus de 18 laboratoires</a> dans le développement de projets en humanités numériques.',
      en: 'Engineer at <a href="https://mshs.univ-cotedazur.fr/" target="_blank" class="text-decoration-none fw-bold text-info">MSHS Sud-Est</a>, supporting <a href="https://mshs.univ-cotedazur.fr/recherche/laboratoires-membres" target="_blank" class="text-decoration-none text-info">18+ labs</a> in developing digital humanities projects.'
    },
    'about.areas': {
      fr: 'Principaux domaines de recherche à MSHS Sud-Est',
      en: 'Main research areas at MSHS Sud-Est'
    },
    'about.phd-interests': {
      fr: 'Centres d\'intérêt de recherche pendant mon doctorat',
      en: 'Research Interests during my PhD'
    },
    'about.interest1': { fr: 'Argumentation computationnelle', en: 'Computational Argumentation' },
    'about.interest2': {
      fr: 'Évaluation assistée par IA de la production écrite des étudiants',
      en: 'AI-assisted Evaluation of Students\' Written Production'
    },
    'about.interest3': {
      fr: 'Classification avancée des erreurs des apprenants du français (Transformers)',
      en: 'Transformer-based Advanced French Learner Error Classification'
    },
    'about.interest4': {
      fr: 'Jeux de données de référence & protocoles d\'évaluation',
      en: 'Benchmark Datasets & Evaluation Protocols'
    },
    'area.env': { fr: 'Sciences de l\'environnement', en: 'Environmental Sciences' },
    'area.motricity': { fr: 'Motricité et perception', en: 'Motricity and Perception' },
    'area.cognitive': { fr: 'Sciences cognitives', en: 'Cognitive Science' },
    'area.political': { fr: 'Science politique', en: 'Political Science' },
    'area.arts': { fr: 'Arts, littérature et langues', en: 'Arts, Literature and Languages' },
    'area.law': { fr: 'Droit, économie et gestion', en: 'Law, Economics and Management' },
    'area.info': { fr: 'Information et communication', en: 'Information and Communication' },
    'area.education': { fr: 'Sciences de l\'éducation', en: 'Education Sciences' },
    'area.philosophy': { fr: 'Philosophie', en: 'Philosophy' },
    'area.sociology': { fr: 'Sociologie et anthropologie', en: 'Sociology and Anthropology' },
    'area.history': { fr: 'Histoire et archéologie', en: 'History and Archaeology' },
    'proto.title': {
      fr: 'Humanités numériques à la MSHS Sud-Est',
      en: 'Digital Humanities at MSHS Sud-Est'
    },
    'proto.aria': {
      fr: 'Humanités numériques à la MSHS Sud-Est',
      en: 'Digital Humanities at MSHS Sud-Est'
    },
    'proto.intro': {
      fr: 'Prototypes interactifs conçus et développés à la <a href="https://mshs.univ-cotedazur.fr/" target="_blank" class="text-decoration-none">MSHS Sud-Est</a> dans le cadre de mes missions, pour soutenir la recherche, l\'enseignement et la médiation en humanités numériques.',
      en: 'Interactive prototypes designed and developed at <a href="https://mshs.univ-cotedazur.fr/" target="_blank" class="text-decoration-none">MSHS Sud-Est</a> as part of my role, to support research, teaching, and outreach in digital humanities.'
    },
    'proto.safe.tag': { fr: 'Vérification des faits', en: 'Fact-checking' },
    'proto.safe.subtitle': {
      fr: 'Argumentation structurée pour la vérification des faits avec explications',
      en: 'Structured Argumentation for Fact-checking with Explanations'
    },
    'proto.safe.desc': {
      fr: 'Résumés structurés en arguments, récupération de preuves et étiquettes de véracité explicables.',
      en: 'Argument-structured summaries, evidence retrieval, and explainable truthfulness labels.'
    },
    'proto.singer.tag': { fr: 'Apprentissage des langues', en: 'Language learning' },
    'proto.singer.subtitle': {
      fr: 'Plateforme interactive d\'apprentissage des langues par le chant',
      en: 'An Interactive Platform for Singing-Based Language Learning'
    },
    'proto.singer.desc': {
      fr: 'Paroles synchronisées, boucles et modes d\'étude qui transforment les clips musicaux en salle de classe interactive.',
      en: 'Synchronized lyrics, looping, and study modes that turn music videos into an interactive classroom.'
    },
    'proto.theatre.tag': { fr: 'Théâtre · RAG', en: 'Theatre · RAG' },
    'proto.theatre.subtitle': {
      fr: 'Livre sonore interactif avec question-réponse augmentée par récupération',
      en: 'An Interactive Audiobook with Retrieval-Augmented Question Answering'
    },
    'proto.theatre.desc': {
      fr: 'Un livre sonore actif pour explorer les archives théâtrales de la BnF par une écoute guidée.',
      en: 'A livre sonore actif for exploring BnF theatre archives with guided listening.'
    },
    'proto.incognito.tag': { fr: 'Confidentialité · Anonymisation', en: 'Privacy · Anonymization' },
    'proto.incognito.subtitle': {
      fr: 'Anonymisation de textes respectueuse de la vie privée, dans votre navigateur',
      en: 'Privacy-first text anonymization in your browser'
    },
    'proto.incognito.desc': {
      fr: 'Détection d\'entités, relecture des occurrences et export de rapports d\'audit anonymisés en local.',
      en: 'Detect entities, review occurrences, and export anonymized audit reports locally.'
    },
    'proto.open': { fr: 'Ouvrir la démo', en: 'Open demo' },
    'proto.alt.safe': {
      fr: 'Capture d\'écran de la démo SAFE',
      en: 'Screenshot of the SAFE fact-checking demo interface'
    },
    'proto.alt.singer': {
      fr: 'Capture d\'écran de la plateforme Singer',
      en: 'Screenshot of the Singer language-learning platform'
    },
    'proto.alt.theatre': {
      fr: 'Capture d\'écran du livre sonore Dialogues sur le théâtre',
      en: 'Screenshot of Dialogues sur le théâtre interactive audiobook'
    },
    'proto.alt.incognito': {
      fr: 'Capture d\'écran de l\'outil Incognito',
      en: 'Screenshot of the Incognito anonymization tool'
    },
    'dh.title': { fr: 'Formations à la MSHS Sud-Est', en: 'Training at MSHS Sud-Est' },
    'dh.subtitle': {
      fr: 'Webinaires et ateliers dans le cadre de mes missions de diffusion des bonnes pratiques en humanités numériques.',
      en: 'Webinars and workshops as part of my missions to promote best practices in digital humanities.'
    },
    'dh.w1.title': {
      fr: '30 avril — <a href="https://mshs.univ-cotedazur.fr/webinaire" target="_blank" class="text-decoration-none">Les enjeux actuels de la gestion des données de recherche</a>',
      en: 'April 30 — <a href="https://mshs.univ-cotedazur.fr/webinaire" target="_blank" class="text-decoration-none">Current challenges in data management for research in digital humanities</a>'
    },
    'dh.w2.title': {
      fr: '28 mai — <a href="https://mshs.univ-cotedazur.fr/webinaire-choisir-un-entrepot-de-confiance-les-principes-fair-en-pratique-avec-nakala" target="_blank" class="text-decoration-none">Choisir un entrepôt de confiance : les principes FAIR en pratique avec Nakala</a>',
      en: 'May 28 — <a href="https://mshs.univ-cotedazur.fr/webinaire-choisir-un-entrepot-de-confiance-les-principes-fair-en-pratique-avec-nakala" target="_blank" class="text-decoration-none">Choosing a trustworthy data repository: the FAIR principles in practice with Nakala</a>'
    },
    'dh.w3.title': {
      fr: '24 juin — <a href="https://printempsdeladonnee.fr/events/atelier-pratique-danonymisation-des-donnees-en-shs/" target="_blank" class="text-decoration-none">Atelier sur l\'anonymisation des données (dans le cadre du Printemps de la Donnée)</a>',
      en: 'June 24 — <a href="https://printempsdeladonnee.fr/events/atelier-pratique-danonymisation-des-donnees-en-shs/" target="_blank" class="text-decoration-none">Workshop on Data Anonymization (as part of the national Printemps de la Donnée series)</a>'
    },
    'dh.program': { fr: 'Programme provisoire pour le reste de l\'année', en: 'Temporary program for the rest of the year' },
    'dh.next': { fr: 'Prochain atelier', en: 'Next workshop' },
    'dh.soon': { fr: 'À venir', en: 'Coming soon' },
    'dh.p1.date': { fr: '24 juillet', en: 'July 24' },
    'dh.p1.title': {
      fr: 'Et si votre corpus pouvait répondre à vos questions ? Créez votre assistant IA à partir de vos données de recherche',
      en: 'What if your corpus could answer your questions? Build your AI assistant from your research data'
    },
    'dh.p2.date': { fr: '25 septembre', en: 'September 25' },
    'dh.p2.title': {
      fr: 'Atelier sur les applications du Deep Learning en littérature',
      en: 'Workshop on Applications of Deep Learning in Literature'
    },
    'dh.p3.date': { fr: '23 octobre', en: 'October 23' },
    'dh.p3.title': {
      fr: 'Atelier sur l\'IA, l\'histoire et l\'archéologie',
      en: 'Workshop on AI, History and Archaeology'
    },
    'dh.p4.date': { fr: '20 novembre', en: 'November 20' },
    'dh.p4.title': {
      fr: 'Atelier sur l\'annotation assistée par apprentissage automatique avec Label Studio',
      en: 'Workshop on Machine learning-assisted annotation with Label Studio'
    },
    'dh.p5.date': { fr: '22 décembre', en: 'December 22' },
    'dh.p5.title': {
      fr: 'Atelier sur la construction de votre propre base de données avec Heurist et Omeka',
      en: 'Workshop on building your own database with Heurist and Omeka'
    },
    'dh.p6.date': { fr: '28 janvier 2027', en: 'January 28, 2027' },
    'dh.p6.title': {
      fr: 'Atelier sur l\'analyse et la visualisation de données géospatiales (QGIS, GeoPandas et Leaflet)',
      en: 'Workshop on Geospatial Data Analysis and Visualization (QGIS, GeoPandas and Leaflet)'
    },
    'link.slides': { fr: 'Slides', en: 'Slides' },
    'link.video': { fr: 'Vidéo', en: 'Video' },
    'link.video-faq': { fr: 'Vidéo (session FAQ non incluse)', en: 'Video (FAQ session not included)' },
    'link.transcript': { fr: 'Transcription du webinaire', en: 'Transcript of the talk' },
    'link.transcript-pdf': { fr: 'Transcription (PDF)', en: 'Transcript (PDF)' },
    'pub.title': { fr: 'Publications', en: 'Publications' },
    'pub.industry': { fr: 'Industrie', en: 'Industry' },
    'pub.research': { fr: 'Articles de recherche', en: 'Research Papers' },
    'pub.demotal': { fr: 'Vulgarisation scientifique — DemoTal', en: 'Popular science — DemoTal' },
    'pub.demotal-intro': {
      fr: 'Promotion et démocratisation d\'une intelligence artificielle digne de confiance, interprétable et socialement bénéfique pour <a href="http://www.demotal.fr" target="_blank" rel="noopener noreferrer">DemoTal</a> (projet soutenu par le ministère de la Culture).',
      en: 'Promoting/democratizing trustworthy, interpretable and socially beneficial Artificial Intelligence for <a href="http://www.demotal.fr" target="_blank" rel="noopener noreferrer">DemoTal</a> (project supported by the French Ministry of Culture).'
    },
    'pub.demotal1': {
      fr: 'Exploitation semi-automatique des textes biomédicaux',
      en: 'Semi-automatic analysis of biomedical texts'
    },
    'pub.demotal2': {
      fr: 'Mieux comprendre les correcteurs orthographiques pour faire des choix éclairés',
      en: 'Better understand spell checkers to make informed decisions'
    },
    'pub.demotal3': {
      fr: 'Argumenter au lieu de bloquer : modérer des commentaires en ligne tout en promouvant le débat',
      en: 'Argue instead of blocking: moderating online comments while promoting debate'
    },
    'pub.demotal4': {
      fr: 'Au-delà de la dichotomie positif-négatif : l\'analyse de sentiments à base d\'aspects (ABSA)',
      en: 'Beyond the simple positive-negative dichotomy, discover the aspect-based sentiment analysis (ABSA)'
    },
    'pub.demotal5': {
      fr: 'Extraire des réponses à des questions de prospects à partir des avis clients',
      en: 'Extractive question answering from customer reviews'
    },
    'pub.demotal6': {
      fr: 'Que faire en cas de données insuffisantes ? De la qualité des données au zero-shot learning',
      en: 'Conducting POCs with limited data? From data quality to zero-shot learning'
    },
    'link.download-hal': { fr: 'Télécharger sur HAL', en: 'Download on HAL' },
    'link.download-ijcai': { fr: 'Télécharger sur IJCAI', en: 'Download on IJCAI' },
    'link.download-sage': { fr: 'Télécharger sur Sage Publishing', en: 'Download on Sage Publishing' },
    'link.download': { fr: 'Télécharger', en: 'Download' },
    'link.seo': { fr: 'Lien pour un meilleur référencement', en: 'Link for better SEO' },
    'link.slides-talk': { fr: 'Slides de ma présentation', en: 'Slides of my talk' },
    'link.slides-talk2': { fr: 'Slides de la présentation', en: 'Slides of the talk' },
    'link.download-acl': { fr: 'Télécharger sur ACL Anthology', en: 'Download on ACL Anthology' },
    'link.dataset': { fr: 'Jeu de données', en: 'Dataset' },
    'link.download-article': { fr: 'Télécharger l\'article', en: 'Download the article' },
    'link.download-poster': { fr: 'Télécharger l\'affiche', en: 'Download the poster' },
    'link.download-gipsa': { fr: 'Télécharger sur GIPSA-lab', en: 'Download on GIPSA-lab' },
    'pub.disclaimer': {
      fr: 'Cette version de la contribution a été acceptée pour publication, après évaluation par les pairs (le cas échéant), mais n\'est pas la Version of Record et ne reflète pas les améliorations post-acceptation ni d\'éventuelles corrections. La Version of Record est disponible en ligne : https://doi.org/10.1007/978-3-031-35320-8_37. L\'utilisation de cette Accepted Version est soumise aux conditions d\'utilisation des manuscrits acceptés de l\'éditeur : https://www.springernature.com/gp/open-research/policies/accepted-manuscript-terms',
      en: 'This version of the contribution has been accepted for publication, after peer review (when applicable) but is not the Version of Record and does not reflect post-acceptance improvements, or any corrections. The Version of Record is available online at: https://doi.org/10.1007/978-3-031-35320-8_37. Use of this Accepted Version is subject to the publisher\'s Accepted Manuscript terms of use https://www.springernature.com/gp/open-research/policies/accepted-manuscript-terms'
    },
    'footer': {
      fr: 'Conception / CSS du site : Xiaoou Wang',
      en: 'Design/CSS of this website: Xiaoou Wang'
    }
  };

  function getLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'en' ? 'en' : 'fr';
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    applyTranslations(lang);
    updateToggle(lang);
  }

  function t(key, lang) {
    return translations[key] ? translations[key][lang] : null;
  }

  function applyTranslations(lang) {
    document.title = t('meta.title', lang);
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = t('meta.description', lang);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const value = t(el.dataset.i18n, lang);
      if (value !== null) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const value = t(el.dataset.i18nHtml, lang);
      if (value !== null) el.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const value = t(el.dataset.i18nAlt, lang);
      if (value !== null) el.alt = value;
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const value = t(el.dataset.i18nAria, lang);
      if (value !== null) el.setAttribute('aria-label', value);
    });
  }

  function updateToggle(lang) {
    const btn = document.getElementById('lang-toggle');
    if (!btn) return;
    const label = btn.querySelector('[data-i18n="lang.switch"]');
    if (label) label.textContent = t('lang.switch', lang);
    btn.setAttribute('aria-label', lang === 'fr' ? 'Switch to English' : 'Passer en français');
  }

  function featureNextUpcomingEvent() {
    const events = document.querySelectorAll('.upcoming-event[data-event-date]');
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    events.forEach((event) => {
      event.classList.remove('upcoming-event--featured');
      const badge = event.querySelector('.upcoming-event-badge');
      if (badge) badge.hidden = true;
    });

    for (const event of events) {
      const date = new Date(event.dataset.eventDate + 'T00:00:00');
      if (date >= today) {
        event.classList.add('upcoming-event--featured');
        const badge = event.querySelector('.upcoming-event-badge');
        if (badge) badge.hidden = false;
        break;
      }
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const lang = getLang();
    document.documentElement.lang = lang;
    applyTranslations(lang);
    updateToggle(lang);
    featureNextUpcomingEvent();

    const btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.addEventListener('click', () => {
        setLang(getLang() === 'fr' ? 'en' : 'fr');
      });
    }
  });
})();
