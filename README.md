# BTPI — site vitrine « Site Immersif »

Site one-page animé pour **BTPI (Bellicini Tuyauterie Protection Incendie)** — sprinklers et RIA,
Norroy-lès-Pont-à-Mousson (54). Il est généré à partir du template *Site Immersif* : scroll scrubé,
scènes épinglées, zoom-texte, rideau de lames et bande d'accent.

## Voir le site en local

```bash
node .claude/serve-btpi.mjs
# → http://localhost:4385
```

(Un simple double-clic sur `index.html` ne suffit pas : le site doit être servi en HTTP.)

## Modifier le contenu

- **Textes et images** : uniquement dans `btpi/content.js` (partie haute, `window.SITE_CONTENT`).
  La partie basse « INJECTION » ne se modifie pas.
- **Nouvelles photos** : les déposer dans `btpi/images/`, puis mettre à jour leur chemin dans `content.js`.
- `index.html` et `app.js` sont le moteur du template, copiés à l'identique. Il ne faut pas les modifier.

## Choix appliqués

- Thème **sombre** (`<html data-theme="dark">`).
- Accent **rouge** `#e1251b`, texte blanc sur l'accent (contraste 4,7:1).
- Section preuve en **bento** : Conception · Sprinklers · RIA · Entretien & réparation.
- `styles.css` : en plus des deux valeurs prévues par le template (accent, visuel « animations réduites »),
  un correctif de 2 lignes pour le bento sous 480 px. Sans lui, deux tuiles étaient écrasées dans une colonne de 26 px.

## À valider avant la mise en ligne

- **Témoignage** (section « preuve sociale ») : c'est un **exemple inventé**. Il faut le remplacer par un vrai avis client, ou le retirer.
- **E-mail** `info@btpi.ch` : c'est l'adresse de *BTPI Suisse* (Givisiez), une autre société. Il faut la remplacer par l'adresse de BTPI France.
- Engagements affichés (« réponse sous 48 h, devis gratuit », « Pas de devis flou », « Pas de visite oubliée »).
- Liens du pied de page : itinéraire Google Maps et fiche Pappers. Aucun réseau social n'a été trouvé ; à remplacer si la société en a.
- Provenance des images : `btpi/images/SOURCES.md` (2 images générées par IA, les autres viennent d'Unsplash et de Pexels).
