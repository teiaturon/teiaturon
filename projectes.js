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
      titol: { ca: 'Projecte professional 1', es: 'Proyecto profesional 1', en: 'Professional project 1' },
      categoria: { ca: '[Categoria]', es: '[Categoría]', en: '[Category]' },
      any: '[Any]',
      carpeta: 'assets/projectes/professionals/projecte-1/',
      portada: 'portada.jpg',
      galeria: ['1.jpg', '2.jpg', '3.jpg'],
      descripcio:  { ca: '[Explicació breu del projecte]', es: '[Explicación breve del proyecto]', en: '[Short description of the project]' },
      objectiu:    { ca: '[Objectiu del projecte]', es: '[Objetivo del proyecto]', en: '[Project goal]' },
      concepte:    { ca: '[Concepte creatiu]', es: '[Concepto creativo]', en: '[Creative concept]' },
      contribucio: { ca: '[La meva contribució]', es: '[Mi contribución]', en: '[My contribution]' }
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
      titol: 'Girocleta',
      categoria: { ca: 'Campanya gràfica', es: 'Campaña gráfica', en: 'Print campaign' },
      any: '2025',
      carpeta: 'assets/projectes/academics/projecte-3/',
      portada: 'campanya-1.jpg',
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
      titol: { ca: 'Projecte acadèmic 4', es: 'Proyecto académico 4', en: 'Academic project 4' },
      categoria: { ca: '[Categoria]', es: '[Categoría]', en: '[Category]' },
      any: '[Any]',
      carpeta: 'assets/projectes/academics/projecte-4/',
      portada: 'portada.jpg',
      galeria: ['1.jpg', '2.jpg', '3.jpg'],
      descripcio:  { ca: '[Explicació breu del projecte]', es: '[Explicación breve del proyecto]', en: '[Short description of the project]' },
      objectiu:    { ca: '[Objectiu del projecte]', es: '[Objetivo del proyecto]', en: '[Project goal]' },
      concepte:    { ca: '[Concepte creatiu]', es: '[Concepto creativo]', en: '[Creative concept]' },
      contribucio: { ca: '[La meva contribució]', es: '[Mi contribución]', en: '[My contribution]' }
    },
    {
      titol: { ca: 'Projecte acadèmic 5', es: 'Proyecto académico 5', en: 'Academic project 5' },
      categoria: { ca: '[Categoria]', es: '[Categoría]', en: '[Category]' },
      any: '[Any]',
      carpeta: 'assets/projectes/academics/projecte-5/',
      portada: 'portada.jpg',
      galeria: ['1.jpg', '2.jpg', '3.jpg'],
      descripcio:  { ca: '[Explicació breu del projecte]', es: '[Explicación breve del proyecto]', en: '[Short description of the project]' },
      objectiu:    { ca: '[Objectiu del projecte]', es: '[Objetivo del proyecto]', en: '[Project goal]' },
      concepte:    { ca: '[Concepte creatiu]', es: '[Concepto creativo]', en: '[Creative concept]' },
      contribucio: { ca: '[La meva contribució]', es: '[Mi contribución]', en: '[My contribution]' }
    },
    {
      titol: { ca: 'Projecte acadèmic 6', es: 'Proyecto académico 6', en: 'Academic project 6' },
      categoria: { ca: '[Categoria]', es: '[Categoría]', en: '[Category]' },
      any: '[Any]',
      carpeta: 'assets/projectes/academics/projecte-6/',
      portada: 'portada.jpg',
      galeria: ['1.jpg', '2.jpg', '3.jpg'],
      descripcio:  { ca: '[Explicació breu del projecte]', es: '[Explicación breve del proyecto]', en: '[Short description of the project]' },
      objectiu:    { ca: '[Objectiu del projecte]', es: '[Objetivo del proyecto]', en: '[Project goal]' },
      concepte:    { ca: '[Concepte creatiu]', es: '[Concepto creativo]', en: '[Creative concept]' },
      contribucio: { ca: '[La meva contribució]', es: '[Mi contribución]', en: '[My contribution]' }
    }
  ]
};
