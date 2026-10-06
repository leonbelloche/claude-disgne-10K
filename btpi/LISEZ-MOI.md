# Site BTPI

Site vitrine animé, sur une seule page, pour **BTPI (Bellicini Tuyauterie Protection Incendie)** :
sprinklers et RIA en sites industriels, Norroy-lès-Pont-à-Mousson (54). Il a été réalisé avec le
template « Site Immersif ».

## Voir le site

Double-cliquez sur **`index.html`**. Le site s'ouvre dans le navigateur, sans rien installer et sans connexion internet.

## Contenu du dossier

| Élément | Rôle |
|---|---|
| `index.html`, `app.js`, `styles.css`, `content.js` | Le site |
| `images/`, `illustrations/` | Les visuels, dont `images/og-image.jpg`, l'image affichée quand on partage le lien |
| `mentions-legales.html` | La page des mentions légales |
| `fonts/` | Les polices, hébergées sur le site (avec leurs licences libres) |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | Les icônes d'onglet et d'écran d'accueil |
| `infos/mise-en-ligne-ovh.md` | Les étapes pour mettre le site en ligne chez OVH |
| `infos/a-valider.md` | Ce qu'il reste à fournir ou à vérifier avant la mise en ligne |
| `infos/entreprise.md` | Les informations de l'entreprise |
| `infos/mail-client.md` | Le mail envoyé au client |
| `infos/sources-images.md` | La provenance de chaque image |
| `infos/apercu-ordinateur.jpg`, `infos/apercu-telephone.jpg` | Des captures du site |

Pour la mise en ligne, envoyez sur l'hébergeur tout le dossier, sauf `infos/` et ce fichier (voir `infos/mise-en-ligne-ovh.md`).

## Modifier le site

- **Textes et images** : dans `content.js`, partie haute (`window.SITE_CONTENT`).
  La partie basse « INJECTION » ne se modifie pas.
- **Titre et description** : si vous les changez dans `content.js`, changez-les aussi dans l'en-tête
  de `index.html`. C'est ce que lisent LinkedIn, WhatsApp et Facebook pour l'aperçu de partage.
- **Nouvelles photos** : déposez-les dans `images/`, puis mettez à jour leur chemin dans `content.js`.

## Choix appliqués

- Thème sombre, accent rouge `#e1251b` avec texte blanc (contraste 4,7:1).
- Section « preuve » en bento, avec 4 métiers : Conception · Sprinklers · RIA · Entretien & réparation.
  Les illustrations SVG ont été dessinées pour le site.
- Écarts par rapport au skill « Site Immersif » :
  - 2 vraies photos de sprinklers venant de Wikimedia Commons (le skill prévoit Unsplash et Pexels),
    créditées dans les mentions légales ;
  - `styles.css` : un correctif de 2 lignes pour le bento sous 480 px, où deux tuiles étaient
    écrasées dans une colonne de 26 px ;
  - `index.html` : réglages de mise en ligne (titre, description, aperçu de partage, icônes,
    polices locales, suppression des 32 images d'exemple, texte alternatif) ;
  - une page `mentions-legales.html` ajoutée.
