document.write("<script language='JavaScript' src='assets/core/french/tag.js'></script>");
/*------ -------------Section --------*/
var chitchatFrench = function() {    
    botui.message.bot({ 
        loading:true,
        delay: 1000,
        content: 'Saisissez votre requΓͺte ou discuter avec moi π'
    }).then(function () {
        return botui.message.bot({
            delay: 500,
            loading: true,
            content: 'Je suis amusant π et convivial π'
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
/*var start_bot = function() {  
  botui.action.text({
    delay: 1000,
    action: {
      icon: 'search',
      placeholder: 'Taper quelque chose βοΈ...'
    }
    }).then(function (res) {
      if(res.value == 'quitter' || res.value == 'q') {
      mainFrench();
    } else if(res.value == 'date' || res.value == 'date') {
      date();
    }  else if(res.value == 'ville' || res.value == 'position') {
      ville();
    } else  {
         return botui.message.bot({ 
            delay: 500,
            content: 'Oups,π je n\'ai pas bien compris votre recherche π€'
          }).then(function () { 
            return start_bot()
          })      
        }
  });
}*/
var start_bot = function() {  
  botui.action.text({
    delay: 1000,
    action: {
      icon: 'search',
      placeholder: 'Taper quelque chose βοΈ...'
    }
    }).then(function (res) {
      const mots_cles = res.value.split(' ');

      //if( ) { 
      //for (words in mots_cles) {var matches = words.match(dateTags);}
      if (dateTags.includes(res.value)){
        date();
      } else if (localisationTags.includes(res.value)){
        ville();
      } else if (res.value == 'bonjour' || res.value == 'salut' || res.value == 'Bonjour' || res.value == 'hello' || res.value == 'Salut'){
        return botui.message
          .bot({
            delay: 500,
            content: 'Bonjour, comment allez vous?'
          })
          .then(function () {
            return start_bot();
          });
      } else if (salutationsTags.includes(res.value)){
        salutations();
      }  else if (res.value == 'quitter' || res.value == 'q'){
        mainFrench();
      }  else {
        return botui.message
          .bot({
            delay: 500,
            content: 'Oups,π je n\'ai pas bien compris votre recherche π€'
          })
          .then(function () {
            return start_bot();
          });
      }
  });
}

var salutations = function() {  
 botui.message.bot({ 
    delay: 500,
    content: 'Bonjour'
  }).then(function () { 
    return start_bot()
  })  ; 
}



var dateJour = new Date()
var date = function() {  
  botui.message.bot({ 
    delay: 500,
    content: 'Nous sommes le : ' + dateJour.getDate()+"/"+(dateJour.getMonth()+1)+"/"+dateJour.getFullYear() + ' ' + ' et il est actuellement ' + ' ' + dateJour.getHours()+":"+dateJour.getMinutes()+":"+dateJour.getSeconds()
  }).then(function () { 
    return start_bot()
  })  ;    
 }

 

  


 var ville = function() {  

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    botui.message.bot({ 
        delay: 500,
        type: 'html',
        content:'<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/#map=18"'+latitude+'"/"'+longitude+'"></iframe>'
        /* 
        * api pour rΓ©cuperer les donnΓ©es de faΓ§on embed 'https://www.openstreetmap.org/#map='+latitude+'/'+longitude
        * api pour rΓ©cuperer le site en totalitΓ© 'https://nominatim.geocoding.ai/reverse.html?lat='+latitude+'&lon='+longitude+'&zoom=18&format=jsonv2'
        * pour avoir un json, remplacer le .html du prΓ©cedent lien en .php et procΓ©der Γ  la rΓ©cupΓ©ration des donnΓ©es qui vous interressent de maniΓ¨re spΓ©cifique
        */
      }).then(function () { 
        return start_bot()
      }) ;
  }
  function error() {
    botui.message.bot({ 
    delay: 500,
    content:'Geolocalisation indisponible'
   }).then(function () { 
    return start_bot()
  }) ;
  }
  if (!navigator.geolocation) {
    botui.message.bot({ 
    delay: 500,
    content:'Votre navigateur ne supporte pas la gΓ©olocalisation'
   }).then(function () { 
    return start_bot()
  }) ;
  } else {
    botui.message.bot({ 
    delay: 500,
    content:'Chargement...'
   })
   .then(function () { 
    navigator.geolocation.getCurrentPosition(success, error);
  })
   ;
    
  }
    
 }

//--------------------------------------------------------------------------
/* else  {
         return botui.message.bot({ 
            delay: 500,
            content: 'Oups,π je n\'ai pas bien compris votre recherche π€' res.value
          }).then(function () { 
            return start_bot()
          })      
        }*/

/**
 * else  {
        bot.reply("local-user", res).then(function (reply) {
            botReply(reply);
          }).then(function () { 
            return function botReply(res) {
              botui.message.bot({ 
                content: '' + res.value
              })
          }.then(function () { 
            return start_bot()
          }) 
        }) 
      }
 */