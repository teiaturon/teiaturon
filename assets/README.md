# Carpeta d'assets

Aquí van tots els arxius que fa servir la web. Si poses els arxius amb **aquests noms exactes**, apareixen sols a la web.

## Currículum
- `cv/CV-Teia-Turon-CA.pdf` → CV en català (també es mostra amb la web en castellà).
- `cv/CV-Teia-Turon-EN.pdf` → CV en anglès (amb la web en anglès).

## Fotos de la portada
- `fotos/teia-petita.png` → la foto que es veu primer.
- `fotos/teia-ara.png` → la foto que apareix en passar el ratolí per sobre.

## Projectes
Cada projecte té la seva carpeta:

```
projectes/professionals/projecte-1/
projectes/professionals/projecte-2/
projectes/academics/projecte-1/   … fins a projecte-6/
```

Dins de cada carpeta:
- `portada.jpg` → la imatge gran que es veu a la graella.
- `1.jpg`, `2.jpg`, `3.jpg` → les imatges de la galeria de la finestra.

Vols més imatges, un vídeo o un altre nom d'arxiu? Obre `projectes.js` (a l'arrel del projecte) i edita la llista `galeria` del projecte. Els vídeos han d'acabar en `.mp4`.

Els textos de cada projecte (títol, categoria, any i descripció en català, castellà i anglès) també s'editen a `projectes.js`.
