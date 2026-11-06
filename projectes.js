/* =====================================================================
   ✏️ DADES DELS PROJECTES — edita aquí els textos i les imatges
   ---------------------------------------------------------------------
   - Cada text es pot escriure en tres idiomes: { ca: '…', es: '…', en: '…' }
     (si només poses un text normal entre cometes, es farà servir en tots).
   - "portada": imatge gran de la graella.
   - "galeria": imatges (o vídeos .mp4) que surten a la finestra.
   - Si una imatge encara no existeix, la web mostra un requadre provisional.
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
      titol: { ca: 'Projecte acadèmic 1', es: 'Proyecto académico 1', en: 'Academic project 1' },
      categoria: { ca: '[Categoria]', es: '[Categoría]', en: '[Category]' },
      any: '[Any]',
      carpeta: 'assets/projectes/academics/projecte-1/',
      portada: 'portada.jpg',
      galeria: ['1.jpg', '2.jpg', '3.jpg'],
      descripcio:  { ca: '[Explicació breu del projecte]', es: '[Explicación breve del proyecto]', en: '[Short description of the project]' },
      objectiu:    { ca: '[Objectiu del projecte]', es: '[Objetivo del proyecto]', en: '[Project goal]' },
      concepte:    { ca: '[Concepte creatiu]', es: '[Concepto creativo]', en: '[Creative concept]' },
      contribucio: { ca: '[La meva contribució]', es: '[Mi contribución]', en: '[My contribution]' }
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
