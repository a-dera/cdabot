document.write("<script language='JavaScript' src='assets/core/french/chitchat.js'></script>");
document.write("<script language='JavaScript' src='assets/core/french/tag.js'></script>");
document.write("<script language='JavaScript' src='core/rivescript.js'></script>");
/*------ -------------Section main--------*/
var mainFrench = function() {
  botui.action.button({
    delay: 500,
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
        presentationFrench();
      } else if(res.value == 'adhesion') {
        adhesionFrench(); 
      } else if(res.value == 'search') {
        chitchatFrench(); 
      } else {
        start(); 
      }
  });


}

/*-------------------------------- fin section -----------------------------------*/


/*------ -------------Section  Infoarmtations générales sur CDA-------*/
var presentationFrench = function() {

    botui.message.bot({ // TODO #2 #1 Correction des icones
    delay: 500,
    type:'html',
    content: 'Le Cluster permet aux entreprises de se regrouper et d’être représentées vis-à -vis de l’écosystème institutionnel. Adhérer le Cluster, c’est vous permettre de partager vos expériences & vos actualités avec le collectif et parfois élaborer des programmes collectifs. Adhérer le cluster, c’est valoriser l’excellence Numérique en Afrique.'
      }).then(function () {
    return botui.action.button({
    delay: 1000,
    action: [{
      text: 'Gouvernance',
      _icon: 'hat',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'gouvernance'
    }, {
      text: 'Bureau exécutif',
      _icon: 'pencil',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'bureau'
    },{
      text: 'Equipe',
      _icon: 'users',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'team'
    },{
      text: 'Contacter le Cluster',
      _icon: 'phone',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'contact'
    },{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }]
  }).then(function (res) {
      if(res.value == 'gouvernance') {
        gouvernanceFrench();
      } else if(res.value == 'bureau') {
        bureauFrench(); 
      } else if(res.value == 'team') {
        teamFrench(); 
      } else if(res.value == 'contact') {
        contactFrench(); 
      } else {
        mainFrench(); 
      }
  })
  });

}

var gouvernanceFrench = function() {
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
    presentationFrench();
  } else{
    presentationFrench();
  }
  });
}

var bureauFrench = function() {
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
    presentationFrench();
  } else{
    presentationFrench();
  }
  });
}

var teamFrench = function() {
  botui.message.bot({
        delay: 1000,
        loading: true,
        type:'html',
        content: '<a href="https://clusterdigitalafrica.com/team/" target="_blank"> Cliquez vpour vous rendre à la page dédié </a>'
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
    presentationFrench();
  } else{
    presentationFrench();
  }
  });
}

var contactFrench = function() {
  botui.message.bot({
        delay: 1000,
        loading: true,
        type:'html',
        content: '<div class="control">\
        <div class="tags has-addons">\
          <span class="tag is-primary is-light">Sotuba Aci, prés de la clinique ALMED</span>\
          </div></div><br>\
          <span class="tag is-info is-rounded">info@clusterdigitalafrica.com</span><br><br>\
          <span class="tag is-info is-rounded">(+223) - 6675 - 3636</span>'
      }).then(function () {
      return botui.message.bot({
        delay: 1000,
        loading: true,
        type:'html',
        content: '<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=Group%20Famib%20-%20%C3%A0%20la%20hauteur%20de%20vos%20attentes&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="Group Famib - à la hauteur de vos attentes" aria-label="Group Famib - à la hauteur de vos attentes"></iframe>'
      });
    })/*.then(function () {
      return botui.message.bot({
        delay: 1000,
        loading: true,
        type:'embed',
        content: 'https://maps.google.com/maps?q=Group%20Famib%20-%20%C3%A0%20la%20hauteur%20de%20vos%20attentes&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" '
      });
    })*/.then(function () {
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
    presentationFrench();
  } else{
    presentationFrench();
  }
  });
}



/*------ -------------Section  Renseignement pour adhérer--------*/
var adhesionFrench = function() {
     botui.action.button({
    delay: 1000,
    action: [{
      text: 'Comment adhérer?',
      _icon: 'question',
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
        commentFrench();
      } else if(res.value == 'why') {
        pourquoiFrench(); 
      } else if(res.value == 'conditions') {
        conditionsFrench(); 
      } else {
        mainFrench(); 
      }
  });

}

var commentFrench = function() {
  botui.message.bot({
    delay: 500,
    type:'html',
    content: '<ul><li>L’adhésion au Cluster Digital Africa se fait à travers une demande préalable au moyen d’un formulaire de demande d’adhésion. Celle-ci est conditionnée par l\'acceptation du Bureau exécutif du cluster digital Africa. Et est valable pour l’année civile en cours. Après l’acceptation par la structure de validation des candidatures, le postulant est automatiquement considéré comme membre du cluster tout en acceptant les termes de la charte du Cluster Digital Africa. </li>\
                  <li><strong>L’adhésion au Cluster Digital Africa implique: </strong><br> L’engagement à respecter les Statuts de l’organisme. Si toutefois un membre ne souhaite pas/plus renouveler son adhésion au réseau, il devra en informer le Cluster (par courrier ou par email) dans un délai d’un mois (30jours). </li></ul>'
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
    adhesionFrench();
  } else{
    adhesionFrench();
  }
  });
}

var pourquoiFrench = function() {

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
    conditionsFrench();
  } else{
    adhesionFrench();
  }
  });
}

var conditionsFrench = function() {
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
    adhesionFrench();
  } else{
    adhesionFrench();
  }
  });
}

