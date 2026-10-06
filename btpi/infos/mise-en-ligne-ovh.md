# Mettre le site en ligne chez OVH

Le domaine `btpispk.fr`, la messagerie et l'hébergement de BTPI sont chez OVH.
Le site est un site « statique » : il suffit de copier ses fichiers sur l'hébergement.

## 1. Récupérer les accès FTP

Dans l'espace client OVH (compte de BTPI) : **Web Cloud → Hébergements →** l'hébergement de `btpispk.fr`.

- Onglet **« FTP - SSH »**, noter :
  - le **serveur FTP** (de la forme `ftp.clusterXXX.hosting.ovh.net`) ;
  - l'**identifiant FTP** ;
  - le **mot de passe** : s'il n'est pas connu, le changer avec « Modifier le mot de passe ».
    Il vaut mieux le transmettre par téléphone ou SMS que par mail.
- Onglet **« Multisite »** : vérifier que `btpispk.fr` et `www.btpispk.fr` y figurent, avec le dossier
  racine `www`. Sinon, « Ajouter un domaine ou sous-domaine », choisir `btpispk.fr` et cocher `www`.

## 2. Envoyer les fichiers avec FileZilla

1. Installer **FileZilla Client** (gratuit) : https://filezilla-project.org
2. En haut, remplir **Hôte** (serveur FTP), **Identifiant**, **Mot de passe**, **Port** `21`,
   puis cliquer sur « Connexion rapide ».
3. Dans la partie droite (le serveur), ouvrir le dossier **`www`**. Supprimer les fichiers qu'OVH y a
   placés (la page d'attente). Ne rien toucher en dehors de `www`.
4. Dans la partie gauche (l'ordinateur), ouvrir le dossier **`btpi-en-ligne`** (décompressé depuis
   `btpi-en-ligne.zip`), tout sélectionner et faire glisser dans `www`.
   Il doit y avoir `www/index.html`, `www/app.js`, `www/images/`, etc.

## 3. Activer le HTTPS (gratuit)

Dans l'hébergement OVH :
- **« Informations générales » → Certificat SSL → « Commander un certificat SSL » → Let's Encrypt** (gratuit) ;
- dans l'onglet **« Multisite »**, vérifier que la colonne SSL est activée pour `btpispk.fr` et `www.btpispk.fr`.

## 4. Vérifier

Ouvrir **https://btpispk.fr** après quelques minutes. Le certificat peut mettre jusqu'à quelques heures à s'activer.

À vérifier : le site s'affiche, le lien « Mentions légales » fonctionne, et l'aperçu est correct quand on
partage le lien (outil : https://www.linkedin.com/post-inspector/).

## À ne pas envoyer sur l'hébergement

Le dossier `infos/` et le fichier `LISEZ-MOI.md`. Le ZIP `btpi-en-ligne.zip` ne les contient déjà pas.
