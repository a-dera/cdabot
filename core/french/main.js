
/*------ -------------Section main--------*/
var mainFrench = function() {
  botui.action.button({
    delay: 1000,
    action: [{
      text: 'En savoir plus sur Cluster Digital Africa',
      _icon: 'info',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'cda'
    }, {
      text: 'Adhésion',
      _icon: 'rocket',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'adhesion'
    },{
      text: 'Je ne trouve pas ce que je cherche',
      _icon: 'search',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'search'
    },{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }]
  }).then(function (res) {
      if(res.value == 'cda') {
        presentation();
      } else if(res.value == 'adhesion') {
        adhesion(); 
      } else if(res.value == 'search') {
        chitchat(); 
      } else {
        start(); 
      }
  });


}

/*-------------------------------- fin section -----------------------------------*/


/*------ -------------Section  Infoarmtations générales sur CDA-------*/
var presentation = function() {

    botui.message.bot({ // TODO #2 #1 Correction des icones
    delay: 500,
    type:'html',
    content: 'Le Cluster permet aux entreprises de se regrouper et d’être représentées vis-à -vis de l’écosystème institutionnel. Adhérer le Cluster, c’est vous permettre de partager vos expériences & vos actualités avec le collectif et parfois élaborer des programmes collectifs. Adhérer le cluster, c’est valoriser l’excellence Numérique en Afrique.'
      }).then(function () {
    return botui.action.button({
    delay: 1000,
    action: [{
      text: 'Gouvernance',
      _icon: 'crown',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'gouvernance'
    }, {
      text: 'Bureau exécutif',
      _icon: 'pen',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'bureau'
    },{
      text: 'Equipe',
      _icon: 'team',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'team'
    },{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }]
  }).then(function (res) {
      if(res.value == 'gouvernance') {
        gouvernance();
      } else if(res.value == 'bureau') {
        bureau(); 
      } else if(res.value == 'team') {
        team(); 
      } else {
        mainFrench(); 
      }
  })
  });

}

var gouvernance = function() {
  botui.message.bot({
    delay: 500,
    type:'html',
    content: '<ul><li><strong>President </strong>Amadou DIAWARA</li>\
                  <li><strong>President d\'honneur </strong>Mossadeck BALLY</li>\
                  <li><strong>President d\'honneur </strong>Mme Mbaranga Gasarabwe</li>\
                  <li><strong>President d\'honneur </strong>Messaoud Prosper AMOUYAL</li>\
                  <li><strong>Vice-President </strong>Patrick GIVANOVICTH</li>\
                  <li><strong>Vice-President honorifique</strong>Kacem AIYTYALLA</li>\
                  <li><strong>Vice-Presidente d\'honneur</strong>Balkissa Idé SIDDO</li>\
                  <li><strong>Vice-Presidente d\'honneur</strong>Diane Malikane Sugira</li>\
                  <li><strong>Vice-Presidente d\'honneur</strong>Diadié dit Amadou SANKARE</li>\
                  <li><strong>Vice-Presidente d\'honneur</strong>Alima DIAWARA</li>\
                  <li><strong>Vice-Presidente d\'honneur</strong>Djénéba GORY</li>\
                  <li><strong>Vice-Presidente d\'honneur</strong>Mouminatou KANTE/li>\
                  <li><strong>Vice-Presidente d\'honneur</strong>Fatoumata TRAORE</li><br>\
              </ul>'
      }).then(function () {
      return botui.message.bot({
        delay: 1000,
        loading: true,
        type:'html',
        content: '<a href="https://clusterdigitalafrica.com/gouvernance/" target="_blank"> Plus de détails sur la gouvernance ici</a>'
      });
    }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }
    ]
    })
  }).then(function (res) {
  if(res.value == 'skip') {
    presentation();
  } else{
    presentation();
  }
  });
}

var bureau = function() {
   botui.message.bot({
    delay: 500,
    type:'html',
    content: '<ul><li><strong>President </strong>Amadou DIAWARA</li>\
                  <li><strong>Secretaire general </strong>Karim RAHHAOUI</li>\
                  <li><strong>Tresorier </strong>Mamadou DOUMBIA</li>\
                  <li><strong>Coordinatrice general </strong>Binatou Coulibaly</li>\
              </ul>'
      }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }
    ]
    })
  }).then(function (res) {
  if(res.value == 'skip') {
    presentation();
  } else{
    presentation();
  }
  });
}

var team = function() {
  botui.message.bot({
        delay: 1000,
        loading: true,
        type:'html',
        content: '<a href="https://clusterdigitalafrica.com/gouvernance/" target="_blank"> Cliquez vpour vous rendre à la page dédié </a>'
      }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }
    ]
    })
  }).then(function (res) {
  if(res.value == 'skip') {
    presentation();
  } else{
    presentation();
  }
  });
}



/*------ -------------Section  Renseignement pour adhérer--------*/
var adhesion = function() {
     botui.action.button({
    delay: 1000,
    action: [{
      text: 'Comment adhérer?',
      _icon: 'how',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'how'
    }, {
      text: 'Pourquoi adhérer?',
      _icon: 'question',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'why'
    },{
      text: 'Conditions d\'adhésion',
      _icon: 'list',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'conditions'
    },{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }]
  }).then(function (res) {
      if(res.value == 'how') {
        comment();
      } else if(res.value == 'why') {
        pourquoi(); 
      } else if(res.value == 'conditions') {
        condions(); 
      } else {
        mainFrench(); 
      }
  });

}

var comment = function() {
    
  

}

var pourquoi = function() {

  botui.message.bot({ // TODO #2 #1 Correction des icones
    delay: 500,
    type:'html',
    content: '<ul><li><span class="icon"><i class="fas fa-minus"></i></span>Donnez une visibilité régionale, nationale et internationale à votre entreprise.</li>\
                  <li><span class="icon"><i class="fas fa-minus"></i></span>Bénéficiez de services sur-mesure et de formations spécialisées.</li>\
                  <li><span class="icon"><i class="fas fa-minus"></i></span>Accédez à des partenaires financiers.</li>\
                  <li><span class="icon"><i class="fas fa-minus"></i></span>Accompagnement et renforcement de la croissance dans votre entreprise.</li>\
                  <li><span class="icon"><i class="fas fa-minus"></i></span>Soyez plus proche de vos collaborateurs partout en Afrique.</li></ul>'
      }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Voir les conditions d\'adhésion',
        value: 'conditions'
      },{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }
    ]
    })
  }).then(function (res) {
  if(res.value == 'conditions') {
    conditions();
  } else{
    adhesion();
  }
  });
}

var conditions = function() {
  botui.message.bot({
    delay: 500,
    type:'html',
    content: '<ul><li><strong>Adhésion sur agrément</strong><br>Peut demander à y être membre du cluster digital, toute personne physique ou morale ayant cette passion de la transformation dans le monde du numérique, doit envoyer au préalable une demande d’adhésion en remplissant un formulaire d’inscription et dès lors, il devient automatiquement un membre postulant et dispose d’un délai raisonnable pour son admission.</li>\
                  <li><strong>Adhésion de plein droit</strong><br>Les entreprises dotées d’une personnalité morale, ayant leurs activités qui relèvent du secteur du développement numérique et dont le siège ou un établissement se trouvent sur le territoire africain. Toutefois, l’adhésion est soumise à une ratification par le bureau exécutif à la majorité simple.</li></ul>'
      }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }
    ]
    })
  }).then(function (res) {
  if(res.value == 'skip') {
    adhesion();
  } else{
    adhesion();
  }
  });
}

