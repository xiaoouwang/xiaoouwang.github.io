# Prototypes — dossier de présentation

Dossier autonome regroupant le code et l’aperçu visuel de la section **Humanités numériques / Prototypes** du site [xiaoouwang.github.io](https://xiaoouwang.github.io/).

## Démarrage rapide

1. Ouvrir **`index.html`** dans un navigateur — page d’accueil avec liens et code source.
2. Ou ouvrir directement **`preview.html`** — aperçu visuel de la section seule.

> Astuce : si le chargement des onglets code échoue (restrictions `file://`), lancer un serveur local :
> ```bash
> cd prototypes-showcase && python3 -m http.server 8080
> ```
> Puis ouvrir http://localhost:8080

## Contenu du dossier

```
prototypes-showcase/
├── index.html          # Page d’accueil (aperçu + code)
├── preview.html        # Aperçu visuel autonome
├── code/
│   ├── section.html    # Fragment HTML de la section
│   ├── prototypes.css  # Styles extraits (layout + prototypes)
│   └── i18n-prototypes.js  # Traductions FR/EN (clés proto.*)
└── img/                # Vignettes des 6 démonstrateurs
```

## Correspondance avec le site principal

| Fichier showcase | Source dans le repo |
|------------------|---------------------|
| `code/section.html` | `index.html` (section Prototypes) |
| `code/prototypes.css` | `css/index.css` (`.prototype-*`, `.prototypes-*`) |
| `code/i18n-prototypes.js` | `js/i18n.js` (clés `proto.*`) |
| `img/*.png` | `img/prototypes/*.png` |

## Architecture de la section

- **Grille 2 colonnes** sur desktop (`prototype-row` + `prototype-item`)
- **Vignettes latérales** qui débordent de la carte (`prototype-bleed`, gauche/droite)
- **Effet hover** : zoom + ombre violette sur les vignettes
- **Mobile** (< 1000 px) : une colonne, vignette au-dessus du texte dans une carte

## Démonstrateurs

| Nom | Tags | URL |
|-----|------|-----|
| Dialogues sur le théâtre | Théâtre · RAG · Archives | https://xiaoouwang.github.io/theatre_rabanel/ |
| Incognito | Confidentialité · Anonymisation · Science ouverte | https://xiaoouwang.github.io/Incognito/ |
| Multimodal LSL Explorer | Psychologie · Multimodal · Visualisation | https://xiaoouwang.github.io/LSLDisplayer/ |
| PDF Splitter | PDF · OCR · Utilitaire | https://xiaoouwang.github.io/pdfsplitter/ |
| Albert OCR | PDF · OCR · Utilitaire | https://xiaoouwang.github.io/albert_pdf_ocr/ |
| Albert Speech-to-text | Audio · Transcription · Relecture | https://xiaoouwang.github.io/albert-speech2text/ |
