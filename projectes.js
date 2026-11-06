/* =====================================================================
   ✏️ DADES DELS PROJECTES — edita aquí els textos i les imatges
   ---------------------------------------------------------------------
   - Cada text es pot escriure en tres idiomes: { ca: '…', es: '…', en: '…' }
     (si només poses un text normal entre cometes, es farà servir en tots).
   - "portada": imatge gran de la graella.
   - "galeria": imatges (o vídeos .mp4) que surten a la finestra.
   - Si una imatge encara no existeix, la web mostra un requadre provisional.
   - "enfoc" (opcional): quina part de la portada es veu a la targeta,
     per exemple 'center top' (dalt), 'center' (mig) o 'center bottom' (baix).
   - "sencera: true" (opcional): la imatge de la targeta es veu sencera, sense retallar;
     "fons" és el color que omple el marc al voltant.
   - "document" (opcional): un PDF que s'obre en una pestanya nova des de la finestra del projecte.
   ===================================================================== */

const PROJECTES = {

  /* ---------- 2 PROJECTES PROFESSIONALS ---------- */
  professionals: [
    {
      titol: { ca: 'Carnet Jove · Puja de nivell', es: 'Carnet Jove · Puja de nivell', en: 'Carnet Jove · Level Up' },
      categoria: { ca: 'Actriu · Campanya publicitària', es: 'Actriz · Campaña publicitaria', en: 'Actress · Advertising campaign' },
      any: '2025',
      carpeta: 'assets/projectes/professionals/projecte-1/',
      portada: 'portada.jpg',
      galeria: [
        'https://www.youtube.com/watch?v=9w3DgJkT8Q0',   // espot final
        'espot-formacio.jpg', 'marquesina.jpg', 'autobus-2.jpg', 'autobus-1.jpg', 'presentacio.jpg',
        'https://www.youtube.com/watch?v=KlsNxD-eNKk'    // making of
      ],
      descripcio: {
        ca: "Vaig ser una de les protagonistes de l'espot 2025 del Carnet Jove de la Generalitat de Catalunya, «Puja de nivell». La campanya es va difondre per tot Catalunya.",
        es: 'Fui una de las protagonistas del spot 2025 del Carnet Jove de la Generalitat de Catalunya, «Puja de nivell». La campaña se difundió por toda Cataluña.',
        en: 'I was one of the leads in the 2025 Carnet Jove spot for the Government of Catalonia, “Puja de nivell” (“Level Up”). The campaign ran all over Catalonia.'
      },
      objectiu: {
        ca: 'Donar a conèixer els avantatges del Carnet Jove entre el públic jove de Catalunya.',
        es: 'Dar a conocer las ventajas del Carnet Jove entre el público joven de Cataluña.',
        en: 'To promote the benefits of the Carnet Jove youth card among young people in Catalonia.'
      },
      concepte: {
        ca: "«Puja de nivell amb el Carnet Jove»: una estètica de videojoc que barreja persones reals i personatges 3D per mostrar com el carnet t'ajuda a pujar de nivell en formació, viatges, cultura i oci.",
        es: '«Puja de nivell amb el Carnet Jove»: una estética de videojuego que mezcla personas reales y personajes 3D para mostrar cómo el carnet te ayuda a subir de nivel en formación, viajes, cultura y ocio.',
        en: '“Level up with the Carnet Jove”: a video-game look that mixes real people and 3D characters to show how the card helps you level up in education, travel, culture and leisure.'
      },
      contribucio: {
        ca: "Vaig actuar a l'espot com a una de les protagonistes. Vaig aparèixer a la televisió, la ràdio, l'email màrqueting, les xarxes socials i la publicitat exterior (marquesines i autobusos) per tot Catalunya.",
        es: 'Actué en el spot como una de las protagonistas. Aparecí en televisión, radio, email marketing, redes sociales y publicidad exterior (marquesinas y autobuses) por toda Cataluña.',
        en: 'I acted in the spot as one of the leads. I appeared on TV, radio, email marketing, social media and outdoor advertising (bus shelters and buses) all over Catalonia.'
      }
    },
    {
      titol: { ca: 'Projecte professional 2', es: 'Proyecto profesional 2', en: 'Professional project 2' },
      categoria: { ca: '[Categoria]', es: '[Categoría]', en: '[Category]' },
      any: '[Any]',
      carpeta: 'assets/projectes/professionals/projecte-2/',
      portada: 'portada.jpg',
      galeria: ['1.jpg', '2.jpg', '3.jpg'],
      descripcio:  { ca: '[Explicació breu del projecte]', es: '[Explicación breve del proyecto]', en: '[Short description of the project]' },
      objectiu:    { ca: '[Objectiu del projecte]', es: '[Objetivo del proyecto]', en: '[Project goal]' },
      concepte:    { ca: '[Concepte creatiu]', es: '[Concepto creativo]', en: '[Creative concept]' },
      contribucio: { ca: '[La meva contribució]', es: '[Mi contribución]', en: '[My contribution]' }
    }
  ],

  /* ---------- 6 PROJECTES ACADÈMICS ---------- */
  academics: [
    {
      titol: 'Urban Fabrics',
      categoria: { ca: 'Disseny editorial', es: 'Diseño editorial', en: 'Editorial design' },
      any: '2024',
      carpeta: 'assets/projectes/academics/projecte-1/',
      portada: 'portada.jpg',
      enfoc: 'center 45%',   // quina part de la portada es veu a la targeta
      document: {             // botó per obrir un PDF del projecte
        fitxer: 'revista-urban-fabrics.pdf',
        text: { ca: 'Llegeix la revista', es: 'Lee la revista', en: 'Read the magazine' }
      },
      galeria: [
        'revista-1.jpg', 'revista-2.jpg', 'revista-3.jpg', 'revista-4.jpg', 'revista-5.jpg', 'revista-6.jpg', 'revista-7.jpg',
        'making-of-1.jpg', 'making-of-2.jpg', 'making-of-3.jpg', 'making-of-4.jpg', 'making-of-5.jpg'
      ],
      descripcio: {
        ca: "Revista de moda creada en equip a 2n de carrera. Vam fer nosaltres mateixos les fotografies i vam maquetar la revista amb InDesign, Photoshop i Illustrator.",
        es: 'Revista de moda creada en equipo en 2.º de carrera. Hicimos nosotros mismos las fotografías y maquetamos la revista con InDesign, Photoshop e Illustrator.',
        en: 'A fashion magazine created as a team in my second year at university. We shot all the photographs ourselves and laid out the magazine in InDesign, Photoshop and Illustrator.'
      },
      objectiu: {
        ca: "Crear una revista de moda completa, des de la sessió de fotos fins a la maquetació final.",
        es: 'Crear una revista de moda completa, desde la sesión de fotos hasta la maquetación final.',
        en: 'To create a complete fashion magazine, from the photo shoot to the final layout.'
      },
      concepte: {
        ca: "Una revista de tendències urbanes amb el lema «Be Unique, Be UF!»: l'almost-total black, la samarreta sporty, les botes rockstar o els pantalons de lli.",
        es: 'Una revista de tendencias urbanas con el lema «Be Unique, Be UF!»: el almost-total black, la camiseta sporty, las botas rockstar o los pantalones de lino.',
        en: 'An urban trends magazine with the slogan “Be Unique, Be UF!”: almost-total black, the sporty tee, rockstar boots and linen trousers.'
      },
      contribucio: {
        ca: "Vaig formar part de l'equip de sis persones: vam produir i fer la sessió de fotos (en la qual també vaig fer de model) i vam maquetar la revista.",
        es: 'Formé parte del equipo de seis personas: produjimos y realizamos la sesión de fotos (en la que también hice de modelo) y maquetamos la revista.',
        en: 'I was part of a six-person team: we produced and shot the photo session (where I also modelled) and laid out the magazine.'
      }
    },
    {
      titol: 'Valentes i Acompanyades',
      categoria: { ca: 'Spot audiovisual', es: 'Spot audiovisual', en: 'Video spot' },
      any: '2024',
      carpeta: 'assets/projectes/academics/projecte-2/',
      portada: 'making-of-3.jpg',
      galeria: [
        'https://www.youtube.com/watch?v=3F-JGPksnVY',   // el vídeo es pot veure dins la finestra
        'making-of-1.jpg', 'making-of-2.jpg', 'making-of-3.jpg', 'making-of-4.jpg', 'making-of-5.jpg'
      ],
      descripcio: {
        ca: "Spot per a Valentes i Acompanyades, una ONG que lluita contra els matrimonis forçats. El vam gravar i editar en equip l'any 2024.",
        es: 'Spot para Valentes i Acompanyades, una ONG que lucha contra los matrimonios forzados. Lo grabamos y editamos en equipo en 2024.',
        en: 'A spot for Valentes i Acompanyades, an NGO fighting against forced marriage. We shot and edited it as a team in 2024.'
      },
      objectiu: {
        ca: 'Donar veu a la causa de Valentes i Acompanyades i sensibilitzar sobre els matrimonis forçats.',
        es: 'Dar voz a la causa de Valentes i Acompanyades y sensibilizar sobre los matrimonios forzados.',
        en: 'To give a voice to the cause of Valentes i Acompanyades and raise awareness about forced marriage.'
      },
      concepte: '',   // ✏️ afegeix-hi el concepte creatiu quan el tinguis
      contribucio: {
        ca: 'Vaig ser la segona directora del projecte i vaig participar en la gravació i el muntatge del spot.',
        es: 'Fui la segunda directora del proyecto y participé en la grabación y el montaje del spot.',
        en: 'I was the assistant director of the project and took part in shooting and editing the spot.'
      }
    },
    {
      titol: 'Visit West Pomerania',
      categoria: { ca: 'Campanya digital · COIL', es: 'Campaña digital · COIL', en: 'Digital campaign · COIL' },
      any: '2024-25',
      carpeta: 'assets/projectes/academics/projecte-4/',
      portada: 'portada.jpg',
      document: {
        fitxer: 'campanya-pomerania.pdf',
        text: { ca: 'Veure la presentació', es: 'Ver la presentación', en: 'View the presentation' }
      },
      galeria: [
        'diapo-01.jpg', 'diapo-02.jpg', 'diapo-03.jpg', 'diapo-04.jpg', 'diapo-05.jpg', 'diapo-06.jpg', 'diapo-07.jpg',
        'diapo-08.jpg', 'diapo-09.jpg', 'diapo-10.jpg', 'diapo-11.jpg', 'diapo-12.jpg', 'diapo-13.jpg'
      ],
      descripcio: {
        ca: "Projecte COIL (Collaborative Online International Learning) entre la Universitat de Girona i la Universitat de Szczecin, a Polònia. Vam desenvolupar una campanya digital per donar a conèixer la regió de Pomerània Occidental com a destinació turística.",
        es: 'Proyecto COIL (Collaborative Online International Learning) entre la Universitat de Girona y la Universidad de Szczecin, en Polonia. Desarrollamos una campaña digital para dar a conocer la región de Pomerania Occidental como destino turístico.',
        en: 'A COIL (Collaborative Online International Learning) project between the University of Girona and the University of Szczecin in Poland. We developed a digital campaign to promote West Pomerania as a tourist destination.'
      },
      objectiu: {
        ca: "Fer visible la Pomerània Occidental, que gairebé no apareix a Google, i atreure turistes d'Itàlia, Espanya i França amb la seva natura, arquitectura, cultura i paisatges.",
        es: 'Dar visibilidad a Pomerania Occidental, que casi no aparece en Google, y atraer turistas de Italia, España y Francia con su naturaleza, arquitectura, cultura y paisajes.',
        en: 'To make West Pomerania visible (it barely shows up on Google) and attract tourists from Italy, Spain and France with its nature, architecture, culture and landscapes.'
      },
      concepte: {
        ca: "«Explore Pomerania»: una estratègia digital completa amb millores SEO al web Visit Pomerania, anuncis de Google Ads, una landing page traduïda, newsletters per a cada mercat, contingut per a Instagram, Facebook i TikTok i col·laboracions amb influencers de viatges.",
        es: '«Explore Pomerania»: una estrategia digital completa con mejoras SEO en la web Visit Pomerania, anuncios de Google Ads, una landing page traducida, newsletters para cada mercado, contenido para Instagram, Facebook y TikTok y colaboraciones con influencers de viajes.',
        en: '“Explore Pomerania”: a complete digital strategy with SEO improvements to the Visit Pomerania website, Google Ads, a translated landing page, newsletters for each market, content for Instagram, Facebook and TikTok, and partnerships with travel influencers.'
      },
      contribucio: {
        ca: "Amb la Marina Sánchez, per part de la UdG, vam fer la recerca prèvia, la definició dels públics objectiu, les accions digitals (SEO, SEM, xarxes socials i email màrqueting), el pressupost, el calendari i els KPI. Les estudiants de Szczecin van aportar les activitats i atraccions de la regió.",
        es: 'Con Marina Sánchez, por parte de la UdG, hicimos la investigación previa, la definición de los públicos objetivo, las acciones digitales (SEO, SEM, redes sociales y email marketing), el presupuesto, el calendario y los KPI. Las estudiantes de Szczecin aportaron las actividades y atracciones de la región.',
        en: 'Together with Marina Sánchez, on behalf of the UdG, I carried out the preliminary research, defined the target audiences and planned the digital actions (SEO, SEM, social media and email marketing), the budget, the calendar and the KPIs. The Szczecin students contributed the region’s activities and attractions.'
      }
    },
    {
      titol: 'Girocleta',
      categoria: { ca: 'Campanya gràfica', es: 'Campaña gráfica', en: 'Print campaign' },
      any: '2025',
      carpeta: 'assets/projectes/academics/projecte-3/',
      portada: 'portada.jpg',
      sencera: true,          // la imatge de la targeta es veu sencera, sense retallar
      fons: '#ffffff',        // color del marc al voltant de la imatge
      galeria: [
        'campanya-1.jpg', 'campanya-2.jpg',
        'cartell-1.jpg', 'cartell-2.jpg', 'cartell-3.jpg', 'cartell-4.jpg', 'cartell-5.jpg', 'cartell-6.jpg'
      ],
      descripcio: {
        ca: "Campanya fictícia per a la Girocleta, el servei de bicicleta compartida de Girona. Dues línies de cartells que conviden a deixar les excuses i a moure's per la ciutat en bici.",
        es: 'Campaña ficticia para la Girocleta, el servicio de bicicleta compartida de Girona. Dos líneas de carteles que invitan a dejar las excusas y a moverse por la ciudad en bici.',
        en: 'A fictional campaign for Girocleta, the bike-sharing service in Girona. Two poster series that invite people to drop the excuses and get around the city by bike.'
      },
      objectiu: {
        ca: "Animar la gent de Girona a fer servir la Girocleta per moure's per la ciutat.",
        es: 'Animar a la gente de Girona a usar la Girocleta para moverse por la ciudad.',
        en: 'To encourage people in Girona to use Girocleta to get around the city.'
      },
      concepte: {
        ca: "Dues línies: «No vinguis amb excuses, vine amb Girocleta!», que respon amb humor a les excuses de cada dia per no venir, i una sèrie que compara Girona amb grans ciutats («A Nova York toquen el clàxon, a Girona, la campaneta»).",
        es: 'Dos líneas: «No vinguis amb excuses, vine amb Girocleta!», que responde con humor a las excusas de cada día para no venir, y una serie que compara Girona con grandes ciudades («A Nova York toquen el clàxon, a Girona, la campaneta»).',
        en: 'Two series: “No vinguis amb excuses, vine amb Girocleta!” (“No excuses, come by Girocleta!”), which answers everyday excuses with humour, and a series comparing Girona with big cities (“In New York they honk the horn, in Girona, the bike bell”).'
      },
      contribucio: ''   // ✏️ explica què vas fer tu en aquest projecte
    },
    {
      titol: "Devesa't",
      categoria: { ca: 'Xarxes socials · Instagram', es: 'Redes sociales · Instagram', en: 'Social media · Instagram' },
      any: '',   // ✏️ posa-hi l'any del projecte
      carpeta: 'assets/projectes/academics/projecte-5/',
      portada: 'portada.jpg',
      document: {
        fitxer: 'presentacio-devesat.pdf',
        text: { ca: 'Veure la presentació', es: 'Ver la presentación', en: 'View the presentation' }
      },
      galeria: [
        'diapo-01.jpg', 'diapo-02.jpg', 'diapo-03.jpg', 'diapo-04.jpg', 'diapo-05.jpg', 'diapo-06.jpg', 'diapo-07.jpg', 'diapo-08.jpg',
        'diapo-09.jpg', 'diapo-10.jpg', 'diapo-11.jpg', 'diapo-12.jpg', 'diapo-13.jpg', 'diapo-14.jpg', 'diapo-15.jpg', 'diapo-16.jpg'
      ],
      descripcio: {
        ca: "Perfil d'Instagram (i TikTok) creat en un equip de deu persones per promocionar el parc de la Devesa de Girona entre els joves.",
        es: 'Perfil de Instagram (y TikTok) creado en un equipo de diez personas para promocionar el parque de la Devesa de Girona entre los jóvenes.',
        en: 'An Instagram (and TikTok) profile created by a team of ten to promote Girona’s Devesa park among young people.'
      },
      objectiu: {
        ca: "Fer que els joves de 13 a 17 anys descobreixin la Devesa i la visquin com un espai d'oci, esport i trobada, i fomentar-ne la participació a través de les xarxes socials.",
        es: 'Hacer que los jóvenes de 13 a 17 años descubran la Devesa y la vivan como un espacio de ocio, deporte y encuentro, y fomentar su participación a través de las redes sociales.',
        en: 'To get 13–17-year-olds to discover the Devesa and enjoy it as a place for leisure, sport and meeting up, and to encourage them to take part through social media.'
      },
      concepte: {
        ca: "«Devesa't»: una marca pròpia amb identitat visual jove i tres reptes al parc (Girocatching, Art de Nadal i Mems), amb classificació en directe, premis, stories interactives, col·laboracions amb creadors de contingut, un pòdcast i una entrevista a la televisió.",
        es: '«Devesa\'t»: una marca propia con identidad visual joven y tres retos en el parque (Girocatching, Art de Nadal y Mems), con clasificación en directo, premios, stories interactivas, colaboraciones con creadores de contenido, un pódcast y una entrevista en televisión.',
        en: '“Devesa’t”: our own brand with a youthful visual identity and three challenges in the park (Girocatching, Christmas Art and Memes), with a live leaderboard, prizes, interactive stories, collaborations with content creators, a podcast and a TV interview.'
      },
      contribucio: ''   // ✏️ explica què vas fer tu en aquest projecte
    },
    {
      titol: { ca: 'Jens · Assistent virtual', es: 'Jens · Asistente virtual', en: 'Jens · Virtual assistant' },
      categoria: { ca: 'Design Thinking · Erasmus a Siena', es: 'Design Thinking · Erasmus en Siena', en: 'Design Thinking · Erasmus in Siena' },
      any: '2025-26',
      carpeta: 'assets/projectes/academics/projecte-6/',
      portada: 'portada-jens.jpg',
      sencera: true,          // la imatge de la targeta es veu sencera, sense retallar
      fons: '#ffffff',
      document: {
        fitxer: 'presentacio-siena.pdf',
        text: { ca: 'Veure la presentació', es: 'Ver la presentación', en: 'View the presentation' }
      },
      galeria: [
        'diapo-01.jpg', 'diapo-02.jpg', 'diapo-03.jpg', 'diapo-04.jpg', 'diapo-05.jpg', 'diapo-06.jpg',
        'diapo-07.jpg', 'diapo-08.jpg', 'diapo-09.jpg', 'diapo-10.jpg', 'diapo-11.jpg', 'diapo-12.jpg'
      ],
      descripcio: {
        ca: "Projecte de Design Thinking fet durant el meu Erasmus a la Universitat de Siena, juntament amb estudiants italians. Vam desenvolupar Jens, un assistent virtual que ajuda els estudiants internacionals a comunicar-se en italià al menjador universitari.",
        es: 'Proyecto de Design Thinking realizado durante mi Erasmus en la Universidad de Siena, junto con estudiantes italianos. Desarrollamos Jens, un asistente virtual que ayuda a los estudiantes internacionales a comunicarse en italiano en el comedor universitario.',
        en: 'A Design Thinking project carried out during my Erasmus at the University of Siena, together with Italian students. We developed Jens, a virtual assistant that helps international students communicate in Italian at the university canteen.'
      },
      objectiu: {
        ca: "Convertir el menjador universitari en un espai inclusiu i intercultural, reduint les barreres lingüístiques i l'aïllament que viuen els estudiants internacionals.",
        es: 'Convertir el comedor universitario en un espacio inclusivo e intercultural, reduciendo las barreras lingüísticas y el aislamiento que viven los estudiantes internacionales.',
        en: 'To turn the university canteen into an inclusive, intercultural space by reducing the language barriers and isolation international students face.'
      },
      concepte: {
        ca: "Jens, «el teu company de llengua»: un humà digital amb xat i veu que tradueix en temps real, explica menús, ingredients i al·lèrgens, fa de mediador cultural i anima a aprendre italià cada dia. No substitueix el personal, sinó que l'acompanya.",
        es: 'Jens, «tu compañero de idioma»: un humano digital con chat y voz que traduce en tiempo real, explica menús, ingredientes y alérgenos, hace de mediador cultural y anima a aprender italiano cada día. No sustituye al personal, sino que lo acompaña.',
        en: 'Jens, “your local language buddy”: a digital human with chat and voice that translates in real time, explains menus, ingredients and allergens, acts as a cultural mediator and encourages daily Italian learning. It supports staff rather than replacing them.'
      },
      contribucio: {
        ca: "Vaig formar part de l'equip de quatre persones en totes les fases del procés de Design Thinking: recerca (shadowing, service safari, cultural probes), definició dels usuaris, ideació, prototip de Jens i test amb vuit usuaris.",
        es: 'Formé parte del equipo de cuatro personas en todas las fases del proceso de Design Thinking: investigación (shadowing, service safari, cultural probes), definición de los usuarios, ideación, prototipo de Jens y test con ocho usuarios.',
        en: 'I was part of the four-person team through every stage of the Design Thinking process: research (shadowing, service safari, cultural probes), defining users, ideation, prototyping Jens and testing it with eight users.'
      }
    }
  ]
};
