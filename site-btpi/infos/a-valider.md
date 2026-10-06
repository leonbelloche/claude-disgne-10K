# À corriger ou valider avant la mise en ligne

## Bloquant

- **E-mail de contact** : la maquette affiche `info@btpi.ch`. C'est l'adresse de *BTPI Suisse* (Givisiez),
  une autre société. Remplacez-la par l'adresse de BTPI France : `site/content.js`, champ `contact.email`.
- **Témoignage** : il a été inventé pour la maquette (la citation, « 9500 m² », « Entrepôt logistique, Moselle »).
  Remplacez-le par un vrai avis client, avec son accord, ou retirez-le. Publier un faux avis est une pratique commerciale trompeuse.
- **Mentions légales** : elles sont obligatoires pour un site professionnel en France (loi LCEN).
  Le template n'en prévoit pas : il faut ajouter une page.
- **Aperçu de partage** : le titre écrit en dur dans `site/index.html` est encore « Template Site Immersif ».
  C'est ce qui s'affiche quand on partage le lien (LinkedIn, WhatsApp…). Il faut le corriger et ajouter
  une image d'aperçu et une icône d'onglet.

## Recommandé (RGPD)

- Retirer de `site/index.html` les 32 adresses d'images d'exemple (picsum.photos) : les navigateurs des
  visiteurs les appellent au chargement, avant que le site les remplace.
- Héberger les polices sur le site plutôt que chez Google Fonts.

Ces corrections demandent de modifier `index.html`, ce que le skill « Site Immersif » interdit.

## À confirmer par le client (voir `mail-client.md`)

- Coordonnées : e-mail, téléphone, adresse.
- Certifications (APSAD R1 / R5…).
- Zone d'intervention et types de clients.
- Engagements affichés : « réponse sous 48 h », « devis gratuit, sans engagement », « pas de jargon »,
  « pas de devis flou », « pas de visite oubliée ».
- Logo, réseaux sociaux, nom de domaine.
- Informations légales pour les mentions légales.

## Hors mail, pour plus tard

- **Photos** : le site utilise 30 photos de banques d'images (Unsplash, Pexels) et 2 images générées par IA
  (Higgsfield). Si le client fournit les siennes, il faudra les remplacer. Détail dans `sources-images.md`.
- **Liens du pied de page** : itinéraire Google Maps et fiche Pappers, car aucun réseau social n'a été trouvé.
