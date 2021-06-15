/*------ -------------Section --------*/
var chitchat = function() {    
    botui.message.bot({ 
        loading:true,
        delay: 1000,
        content: 'Saisissez votre requête ou discuter avec moi 😀'
    }).then(function () {
        return botui.message.bot({
            delay: 500,
            loading: true,
            content: 'Je suis amusant 🙂 et convivial 😌'
        })
    }).then(function () {
        return botui.message.bot({
            delay: 500,
            loading: true,
            content: 'Pour quitter ce mode, taper \"quitter\" ou simplement \"q\" '
        })
    }).then(function () { 
            return start_bot()
    });
      
     
} 
var start_bot = function() {  
    botui.action.text({
          delay: 1000,
          action: {
            icon: 'search',
            placeholder: 'Taper quelque chose ✍️...'
          }
        }).then(function (res) {

         if(res.value == 'quitter' || res.value == 'q') {
          mainFrench();
        } else  {
         return botui.message.bot({ 
            delay: 500,
            content: 'Oups,😟 je n\'ai pas bien compris votre recherche 🤔'
          }).then(function () { 
            return start_bot()
          })      
        }
      })
      ;
}
