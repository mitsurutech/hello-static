# Modèle de site statique : déployer du HTML, du CSS et du JavaScript simples depuis GitHub

[English](README.md) | [Français](README.fr.md) | [日本語](README.ja.md) | [Español](README.es.md)

Un modèle de site statique pour la pile **Site statique** de la [plateforme d’apprentissage
MitsuruTech](https://mitsurutech.co.uk/fr/learning) : du HTML, du CSS et du JavaScript simples, sans rien qui tourne
derrière. Déployez-le gratuitement depuis son adresse GitHub avec
[le déploiement d’une application web depuis GitHub](https://mitsurutech.co.uk/fr/apps), sans compte et sans rien à installer ; le
[guide du déploiement d’applications depuis GitHub](https://mitsurutech.co.uk/fr/help/deploy-app) du manuel en donne les étapes.

Déployez-le depuis l’onglet **Deploy App** avec l’URL de ce dépôt et le langage réglé sur
*Site statique*. Les valeurs par défaut sont :

- **Build :** `test -f index.html || { echo '...'; exit 1; }`
  Il n’y a rien à construire : le build vérifie donc qu’il y a quelque chose à servir. Un
  dépôt dont les pages sont dans un sous-dossier se déploierait sans erreur et répondrait
  404 sur `/`, ce qui vous laisserait avec une adresse qui fonctionne et rien à déboguer.
- **Start :** `python3 -m http.server $PORT`
  Il sert le contenu du dépôt. Si vos pages sont dans un sous-dossier, ajoutez
  `--directory public` plutôt que de les déplacer.

## Les fichiers

| Fichier | À quoi il sert |
| --- | --- |
| `index.html` | La page elle-même. Elle doit être à la racine du dépôt, sinon changez la commande de démarrage. |
| `style.css` | Lié depuis la page : le voir servi prouve que les feuilles de style sont trouvées. |
| `script.js` | Affiche l’heure et compte les appuis sur le bouton, pour que vous voyiez que JavaScript s’exécute vraiment. |

## Ce qu’il n’a pas

Pas d’étape de build, pas de dépendances et pas de fichier de paquets, et c’est voulu : c’est
la seule pile dont le build n’atteint que GitHub.

## Licence

Cette œuvre est sous licence [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Vous pouvez la partager et l’adapter pour apprendre et enseigner, à condition de citer Mitsuru Technologies Ltd, de ne pas l’utiliser commercialement et de partager tout ce que vous en tirez sous la même licence. Le texte complet est dans le fichier `LICENSE`. Elle couvre les fichiers de ce dépôt.

## À propos

Réalisé par [Mitsuru Technologies](https://mitsurutech.co.uk) pour la
[plateforme d’apprentissage MitsuruTech](https://mitsurutech.co.uk/fr/learning) : Python, Java, Go, Node, SQL et
Linux dans le navigateur pour les écoles et les établissements, avec des labs de conteneurs, des applications web déployées depuis GitHub et des
quiz qui se corrigent tout seuls. Essayez du code sans compte dans le
[bac à sable](https://mitsurutech.co.uk/fr/playground).
