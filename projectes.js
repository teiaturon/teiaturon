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
      titol: { ca: 'Projecte acadèmic 2', es: 'Proyecto académico 2', en: 'Academic project 2' },
      categoria: { ca: '[Categoria]', es: '[Categoría]', en: '[Category]' },
      any: '[Any]',
      carpeta: 'assets/projectes/academics/projecte-2/',
      portada: 'portada.jpg',
      galeria: ['1.jpg', '2.jpg', '3.jpg'],
      descripcio:  { ca: '[Explicació breu del projecte]', es: '[Explicación breve del proyecto]', en: '[Short description of the project]' },
      objectiu:    { ca: '[Objectiu del projecte]', es: '[Objetivo del proyecto]', en: '[Project goal]' },
      concepte:    { ca: '[Concepte creatiu]', es: '[Concepto creativo]', en: '[Creative concept]' },
      contribucio: { ca: '[La meva contribució]', es: '[Mi contribución]', en: '[My contribution]' }
    },
    {
      titol: { ca: 'Projecte acadèmic 3', es: 'Proyecto académico 3', en: 'Academic project 3' },
      categoria: { ca: '[Categoria]', es: '[Categoría]', en: '[Category]' },
      any: '[Any]',
      carpeta: 'assets/projectes/academics/projecte-3/',
      portada: 'portada.jpg',
      galeria: ['1.jpg', '2.jpg', '3.jpg'],
      descripcio:  { ca: '[Explicació breu del projecte]', es: '[Explicación breve del proyecto]', en: '[Short description of the project]' },
      objectiu:    { ca: '[Objectiu del projecte]', es: '[Objetivo del proyecto]', en: '[Project goal]' },
      concepte:    { ca: '[Concepte creatiu]', es: '[Concepto creativo]', en: '[Creative concept]' },
      contribucio: { ca: '[La meva contribució]', es: '[Mi contribución]', en: '[My contribution]' }
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
