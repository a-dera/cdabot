
/*------ -------------Section main--------*/
var mainPular = function() {
  botui.action.button({
    delay: 1000,
    action: [{
      text: 'Sini onone djiddi pamtinodone no dum yarata',
      _icon: 'info',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'cda'
    }, {
      text: 'Naatugol',
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
        text: 'Fornyude',
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
      content: 'Cluster walatana enterpiriisidji no kawritiri e no andira haddi ley salla adunaru fu.Nadde ley Cluster, na hoytinana one no djewtirdone salla ande mone e gollidibe mon, e no bindir done dabaredji e mabe.Fa handene, nade ley cluster yo lémnude Afirikki.'
      }).then(function () {
    return botui.action.button({
    delay: 1000,
    action: [{
      text: 'Laamu',
      _icon: 'crown',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'gouvernance'
    }, {
      text: 'Birol nadaraniibe golleéji',
      _icon: 'pen',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'bureau'
    },{
      text: 'Ekip',
      _icon: 'team',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'team'
    },{
        text: 'Fornyude',
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
        mainPular();
      }
  })
  });

}

var gouvernance = function() {
  botui.message.bot({
    delay: 500,
    type:'html',
    content: '<ul><li><strong>Hooreejo </strong>Amadou DIAWARA</li>\
                  <li><strong>Hooreejo teddinaado </strong>Mossadeck BALLY</li>\
                  <li><strong>Hooreejo teddinaado </strong>Mme Mbaranga Gasarabwe</li>\
                  <li><strong>Hooreejo teddinaado </strong>Messaoud Prosper AMOUYAL</li>\
                  <li><strong>Ndewtudo Hooreejo </strong>Patrick GIVANOVICTH</li>\
                  <li><strong>Ndewtudo Hooreejo teddinaado</strong>Kacem AIYTYALLA</li>\
                  <li><strong>Ndewtudo Hooreejo teddinaado</strong>Balkissa Idé SIDDO</li>\
                  <li><strong>Ndewtudo Hooreejo teddinaado</strong>Diane Malikane Sugira</li>\
                  <li><strong>Ndewtudo Hooreejo teddinaado</strong>Diadié dit Amadou SANKARE</li>\
                  <li><strong>Ndewtudo Hooreejo teddinaado</strong>Alima DIAWARA</li>\
                  <li><strong>Ndewtudo Hooreejo teddinaado</strong>Djénéba GORY</li>\
                  <li><strong>Ndewtudo Hooreejo teddinaado</strong>Mouminatou KANTE/li>\
                  <li><strong>Ndewtudo Hooreejo teddinaado</strong>Fatoumata TRAORE</li><br>\
              </ul>'
      }).then(function () {
      return botui.message.bot({
        delay: 1000,
        loading: true,
        type:'html',
        content: '<a href="https://clusterdigitalafrica.com/gouvernance/" target="_blank"> So no woodi ko one pamtinaki,gnoddje ndo.</a>'
      });
    }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Fornyude',
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
    content: '<ul><li><strong>Hooreejo </strong>Amadou DIAWARA</li>\
                  <li><strong>Sekerter jeneral </strong>Karim RAHHAOUI</li>\
                  <li><strong>Kawjido djawdi </strong>Mamadou DOUMBIA</li>\
                  <li><strong>Kordinater jeneral </strong>Binatou Coulibaly</li>\
              </ul>'
      }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Fornyude',
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
        text: 'Fornyude',
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
      text: 'Noy natirte ?',
      _icon: 'how',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'how'
    }, {
      text: 'Kossabi natude ?',
      _icon: 'question',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'why'
    },{
      text: 'Sardi natirdi',
      _icon: 'list',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'conditions'
    },{
        text: 'Fornyude',
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
        mainPular();
      }
  });

}

var comment = function() {



}

var pourquoi = function() {

  botui.message.bot({ // TODO #2 #1 Correction des icones
    delay: 500,
    type:'html',
    content: '<ul><li><span class="icon"><i class="fas fa-minus"></i></span>Hokkugol yiede ley, leydi ndewgu, leyde adunaaru antarpiriisi djimone</li>\
                  <li><span class="icon"><i class="fas fa-minus"></i></span>Barjeede sarwiisi kebinadi, formason dji lobbi</li>\
                  <li><span class="icon"><i class="fas fa-minus"></i></span>Hebde gollidibe walirobe tchede (kalissi)</li>\
                  <li><span class="icon"><i class="fas fa-minus"></i></span>Balla et dowtol ley mawningol antarpiriisi djimone</li>\
                  <li><span class="icon"><i class="fas fa-minus"></i></span>Batodone gollidibe mone ley Afrik fou.</li></ul>'
      }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Djewe sardi natirdi',
        value: 'conditions'
      },{
        text: 'Fornyude',
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
    content: '<ul><li><strong>Naatugol djabanagol</strong><br>Neddo e waldere fu na wawi filagol nadde cluster digital na djey nildu de demande natirgol, hebita formulaire bindi. Gado dum fo naati nde waldere.</li></ul>'
      }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Fornyude',
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

