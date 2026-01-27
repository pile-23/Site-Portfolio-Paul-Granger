# Portfolio Paul Granger

Site web portfolio moderne créé pour Paul Granger, étudiant en BUT Informatique.

## 🚀 Installation & Lancement
Il s'agit d'un site statique (HTML/CSS/JS). Vous pouvez le lancer directement :
1. Ouvrez le dossier `c:\xampp\htdocs\Site-Portfolio-Paul-Granger`
2. Double-cliquez sur `index.html` pour l'ouvrir dans votre navigateur.

Pour profiter pleinement des animations AOS en local, l'utilisation d'un petit serveur local (comme Live Server sur VSCode ou XAMPP) est recommandée, mais pas strictement obligatoire.

## ⚙️ Configuration EmailJS
Le formulaire de contact utilise EmailJS. Pour qu'il fonctionne :
1. Créez un compte sur [EmailJS](https://www.emailjs.com/).
2. Créez un **Service** (ex: Gmail) et un **Template** d'email.
3. Ouvrez le fichier `script.js` et remplacez les placeholders suivants par vos valeurs :
   - `YOUR_PUBLIC_KEY`
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`

## 📁 Structure
- `index.html` : Structure de la page.
- `style.css` : Styles et animations.
- `script.js` : Logique (Formulaire, scroll).
- `assets/` : Images (CV, Photo de profil).

## 🌍 Déploiement sur Vercel
1. Poussez ce code sur un dépôt GitHub.
2. Connectez-vous sur Vercel et importez le dépôt.
3. Cliquez sur "Deploy". C'est tout !
