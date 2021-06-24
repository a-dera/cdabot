
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]


<br />
<p align="center">

  <h3 align="center">👽 CDA BOT 🤖</h3>

  <p align="center">
    Chat Bot devéloppé et implémenté dans le cadre du ITAUN-Challenge 2021
    <br />
    <a href="bot-cda.herokuapp.com"><strong>Voir la démonstration »</strong></a>
    <br />
    <br />
    <a href="https://github.com/a-dera/cdabot/issues">Signaler un bug</a>
    ·
    <a href="https://github.com/a-dera/cdabot/issues">Demander une fonctionnalité</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Sommaire</summary>
  <ol>
    <li>
      <a href="#a-propos-du-projet">A propos du projet</a>
      <ul>
        <li><a href="#outils-de-conception">Outils de conception</a></li>
        <li><a href="#ffonctionnalités">Fonctionnalités</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#preréquis">Preréquis</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributions">Contributions</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contributeurs">Contributeurs</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## A propos du projet

Conversational AI is one of the hottest AI trends of 2021 and considered to be the next big technological breakthrough. A key outcome of this innovative technology is chatbots. A Chatbot, or Conversational Agent, is mainly an artificial intelligence software that mimics a human conversation.
The chatbot market is expected to grow by USD 1.11 billion, progressing at a CAGR of almost 29% during the forecast period. Many industries like as e-commerce, retail, and banking are demanding Chatbot technologies. A chatbot discharge humans from repetitive and boring tasks. The use of chatbot technology saves costs and improves customer experience for businesses.

With scarcity of talent in emerging technologies like chatbots, companies are turning to competitive coding contests. Guinness World Record setting TechGig Code Gladiators is one such exciting coding platform where companies can scout for the best chatbot developers in the country.

For colloque Africain de la formation 4.0 CAF4’21, ITAUN has partnered with iCompass, a leading AI-based services company for the Chatbot hackathon. 
The objective of this competition is to create a Chatbot for the CDA website https://www.clusterdigitalafrica.com 

The Chatbot may :
* Help users to search information provided by the website. For example, ask the chatbot “Who are the FAWR Panelists ?”, the chatbot lists the panelists names.
* Replace the “contact” page by a dialogue, to make the site more interactive.
* Offer chitchat conversation. Chitchat is non formal conversation, like when user says “hi”, “by”, “are you a woman ?”, …
* Support multiple languages: English and French,…
* Support African dialects

The chatbot may provide a Web page that may be integrated on the CDA website.

The solution must use publicly-available data on CDA website https://www.clusterdigitalafrica.com
You may use publicly available APIs, like weather, time, and news APIs.
The Solution should be hosted on the Cloud and be publicly available during the evaluation process. If the solution is not available during the evaluation process, the team will be immediately disqualified from the hackathon.
Your solution must not infringe the rights of any third party and you must be legally entitled to assign ownership of all rights of copyright in and to the winning solution code to CDA.


### Outils de conception

Ce bot a été conçu avec un lot d'outils funs et performants
* [BotUi](https:/botui.org)
* [Bulma](https:/bulma.io)
* [Vue](https://vuejs.org)
* [Vue-Toasted](https://shakee93.github.io/vue-toasted/)
* [NodeJs](https://vuejs.org)
* [ExpressJs](https://expressjs.com)
* [Rivescript](https://rivescript.com/)
* [Docker](https://docker.com/)

### Fonctionnalités

Principales fonctionnalités du bot 

* Deux niveaux de navigations : 
* * Navigation guidée : Le bot guide l'utilisateur de façon intuitive
* * Navigation libre : le bot répond aux questions de l'utilisateur à travers une interaction directe
* Interraction multimédia
* * Textes
* * Images
* * Embed : Vidéo intégrée, balise HTML native (iframe, div,...), ...
* * Hypertextes
* Interface utilisateur ergonomique
* Expérience utilisateur fluide et agréable
* Informations sur la date et l'heure en temps réel (Taper date ou temps)
* Intégration de RiveScript _Toujours en cours de devéloppement_

Divers
* Loading :  chargement des réponses pour donner l'impresion d'une réflexion du bot
* Delay: possibilté de mettre des délais pour les réponses
* bot_image : Possibilté de donner un logo ou une icone au bot. Cette image va se placer à gauche des interventions du bot
* Intégration d'emojis via https://getemoji.com
* Intégration d'icones : IonIcons, FontAwesome, FlatIcons,... 
  
A venir 🚀
* API Météo _En cours d'implémentation_
* API de nouvelles (Google News)  _En cours d'implémentation_
* Inclurer plus de langues (surtout africaines)
* Page Admin de paramétrage et visualisation des statistiques et des différentes données récoltées
  
Ultime Goal 
* Commande vocale (en intégrant DialogFlow ou MicroSoft BotFramework) 🤞🏾





<!-- GETTING STARTED -->
## Getting Started

### Preréquis


* NPM
  ```sh
  npm install -g npm@latest
  ```
* Vue
  ```sh
  npm install -g @vue/cli
  ```
* Express
  ```sh
  npm install express --save
  ```
_Refferez-vous aux documentations officielles de chaque outils pour plus de détails_

### Installation

1. Cloner le projet
   ```sh
   git clone https://github.com/a-dera/cdabot.git
   ```
2. Installer les packages
   ```sh
   npm install
   ```
3. Configurer le fichier `index.js` selon vos besoins et lancer le projet
   ```sh
   npm run start
   ```


## Usage

Selon vos besoins, modiefiez les fichiers [core](https://github.com/a-dera/cdabot/assets/core)


<!-- CONTRIBUTING -->
## Contributions

Pour contribuer au projet suivez ces procédures:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

**Toute contribution est la bienvenue**.


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information. 🔓



<!-- CONTACT -->
## Contributeurs

* **[Amédée DERA](https://github.com/a-dera)** - [@P_A_DERA](https://twitter.com/P_A_DERA) 💻 ⚙️ 🪄 📝 
* **[Elisée GUIRE](https://github.com/guireelisee/)** - [@GuireElisee](https://twitter.com/GuireElisee) 💻 📝  🔍

Liste de tous les contributeurs --> [contributors](https://github.com/a-dera/cdabot/contributors) !




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/a-dera/cdabot.svg?style=for-the-badge
[contributors-url]: https://github.com/a-dera/cdabot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/a-dera/cdabot.svg?style=for-the-badge
[forks-url]: https://github.com/a-dera/cdabot/network/members
[stars-shield]: https://img.shields.io/github/stars/a-dera/cdabot.svg?style=for-the-badge
[stars-url]: https://github.com/a-dera/cdabot/stargazers
[issues-shield]: https://img.shields.io/github/issues/a-dera/cdabot.svg?style=for-the-badge
[issues-url]: https://github.com/a-dera/cdabot/issues
[license-shield]: https://img.shields.io/github/license/a-dera/cdabot.svg?style=for-the-badge
[license-url]: https://github.com/a-dera/cdabot/blob/master/LICENSE
[product-screenshot]: images/screenshot.png

