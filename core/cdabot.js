var botui = new BotUI('cdabot');
//importation
document.write("<script language='JavaScript' src='core/droits.js'></script>");
document.write("<script language='JavaScript' src='core/french/main.js'></script>");
document.write("<script language='JavaScript' src='core/english/main.js'></script>");
document.write("<script language='JavaScript' src='core/pular/main.js'></script>");

  botui.message.bot({
    content: 'Bonjour 👋!'
  }).then(function () {
        Vue.use(Toasted)
        Vue.toasted.show('<div class="control"><div class="tags has-addons"><span class="tag is-primary is-light">CDA BOT</span><span class="tag is-info is-light">V0.1-beta.1</span></div></div><span class="tag is-info is-rounded">Proposé par A. DERA et E. GUIRE<span>',{
            theme: "outline", 
            position: "top-center", 
            duration : 3000
        });
    }).then(function () {
      return botui.message.bot({
        delay: 1000,
        content: 'Je peux vous aider à trouver plus rapidement ce que vous chercher'
      });
    }).then(function () {
      return start(); // fonction de démarrage: sélection de la langue
    });


/*------------------------- Section start--------------------------------*/
var start = function(){
  botui.message.bot({
    loading:true,
    delay: 2000,
    content: 'Sélectionner une langue pour commencer',
  })
    .then(function () {
      return botui.action.button({
        delay: 1000,
        action: [{
          text: 'English',
          _icon: 'check',
          get icon() {
            return this._icon;
          },
          set icon(value) {
            this._icon = value;
          },
          value: 'english'
        }, {
          text: 'Pular',
          _icon: 'check',
          get icon() {
            return this._icon;
          },
          set icon(value) {
            this._icon = value;
          },
          value: 'pular'
        },{
          text: 'Continuer en Français',
          _icon: 'check',
          get icon() {
            return this._icon;
          },
          set icon(value) {
            this._icon = value;
          },
          value: 'french'
        }]
      })
  }).then(function (res) {
    if(res.value == 'english') {
      mainEnglish();
    } else if(res.value == 'pular') {
      mainPular(); 
    } else if(res.value == 'pular') {
      mainFrench(); 
    } else {
      mainFrench(); 
    }
  });
}
/*-------------------------------- fin section start------------------------------------*/

