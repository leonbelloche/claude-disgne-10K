# Site BTPI — dossier complet

Site vitrine animé, sur une seule page, pour **BTPI (Bellicini Tuyauterie Protection Incendie)** :
sprinklers et RIA, Norroy-lès-Pont-à-Mousson (54). Il a été réalisé avec le template « Site Immersif ».

## Voir le site

Double-cliquez sur **`site/index.html`**. Le site s'ouvre dans le navigateur, sans rien installer.
Une connexion internet est conseillée pour charger les polices.

Variante avec un serveur local (Node.js requis) : depuis la racine du dépôt, lancez
`node .claude/serve-btpi.mjs`, puis ouvrez http://localhost:4385.

## Contenu du dossier

| Élément | Rôle |
|---|---|
| `site/` | Le site complet, à mettre en ligne tel quel |
| `infos/mail-client.md` | Le mail à envoyer au client pour finaliser le site |
| `infos/a-valider.md` | Ce qu'il reste à corriger ou à valider avant la mise en ligne |
| `infos/entreprise.md` | Ce que les recherches ont trouvé sur BTPI |
| `infos/sources-images.md` | La provenance de chaque image |
| `infos/apercu-ordinateur.jpg`, `infos/apercu-telephone.jpg` | Des captures du site |

## Modifier le site

- **Textes et images** : uniquement dans `site/content.js`, dans la partie haute (`window.SITE_CONTENT`).
  La partie basse « INJECTION » ne se modifie pas.
- **Nouvelles photos** : déposez-les dans `site/images/`, puis mettez à jour leur chemin dans `content.js`.
- `site/index.html` et `site/app.js` sont le moteur du template, copiés à l'identique.

## Choix appliqués

- Thème sombre, accent rouge `#e1251b` avec texte blanc (contraste 4,7:1).
- Section « preuve » en bento, avec 4 métiers : Conception · Sprinklers · RIA · Entretien & réparation.
  Les illustrations SVG ont été dessinées pour le site.
- Écarts par rapport au skill :
  - 2 images générées par IA, à la demande (le skill les interdit) ;
  - un correctif de 2 lignes dans `styles.css` pour le bento sous 480 px : deux tuiles
    étaient écrasées dans une colonne de 26 px.
