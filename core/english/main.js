
/*------ -------------Section main--------*/
var mainEnglish = function() {
  botui.action.button({
    delay: 1000,
    action: [{
      text: 'Learn more about Cluster Digital Africa',
      _icon: 'info',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'cda'
    }, {
      text: 'Adhesion',
      _icon: 'rocket',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'adhesion'
    },{
      text: 'I do not find what I\'m looking for',
      _icon: 'search',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'search'
    },{
      text: 'Return',
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


/*------ -------------Section  Informations générales sur CDA-------*/
var presentation = function() {

  botui.message.bot({ // TODO #2 #1 Correction des icones
    delay: 500,
    type:'html',
    content: 'The cluster allows companies to regroup and be represented towards the institutional ecosystem.Adhering the cluster is allowing you to share your experiences & your news with the collective and sometimes develop collective programs.Adhering the cluster is also valuing digital excellence in Africa.'
  }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Governance',
        _icon: 'crown',
        get icon() {
          return this._icon;
        },
        set icon(value) {
          this._icon = value;
        },
        value: 'gouvernance'
      }, {
        text: 'Executive Office',
        _icon: 'pen',
        get icon() {
          return this._icon;
        },
        set icon(value) {
          this._icon = value;
        },
        value: 'bureau'
      },{
        text: 'Team',
        _icon: 'team',
        get icon() {
          return this._icon;
        },
        set icon(value) {
          this._icon = value;
        },
        value: 'team'
      },{
        text: 'Return',
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
        mainEnglish();
      }
    })
  });

}

var gouvernance = function() {
  botui.message.bot({
    delay: 500,
    type:'html',
    content: '<ul><li><strong>President </strong>Amadou DIAWARA</li>\
    <li><strong>Honorary President </strong>Mossadeck BALLY</li>\
    <li><strong>Honorary President </strong>Mme Mbaranga Gasarabwe</li>\
    <li><strong>Honorary President </strong>Messaoud Prosper AMOUYAL</li>\
    <li><strong>Vice-President </strong>Patrick GIVANOVICTH</li>\
    <li><strong>Honorary Vice-President </strong>Kacem AIYTYALLA</li>\
    <li><strong>Honorary Vice-President </strong>Balkissa Idé SIDDO</li>\
    <li><strong>Honorary Vice-President </strong>Diane Malikane Sugira</li>\
    <li><strong>Honorary Vice-President </strong>Diadié dit Amadou SANKARE</li>\
    <li><strong>Honorary Vice-President </strong>Alima DIAWARA</li>\
    <li><strong>Honorary Vice-President </strong>Djénéba GORY</li>\
    <li><strong>Honorary Vice-President </strong>Mouminatou KANTE/li>\
    <li><strong>Honorary Vice-President </strong>Fatoumata TRAORE</li><br>\
    </ul>'
  }).then(function () {
    return botui.message.bot({
      delay: 1000,
      loading: true,
      type:'html',
      content: '<a href="https://clusterdigitalafrica.com/gouvernance/" target="_blank"> More details on governance here</a>'
    });
  }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Return',
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
    <li><strong>General secretary </strong>Karim RAHHAOUI</li>\
    <li><strong>Treasurer </strong>Mamadou DOUMBIA</li>\
    <li><strong>General coordinator </strong>Binatou Coulibaly</li>\
    </ul>'
  }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Return',
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
    content: '<a href="https://clusterdigitalafrica.com/gouvernance/" target="_blank"> Click to go to the dedicated page </a>'
  }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Return',
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
      text: 'How to join ?',
      _icon: 'how',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'how'
    }, {
      text: 'Why join ?',
      _icon: 'question',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'why'
    },{
      text: 'Membership conditions',
      _icon: 'list',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'conditions'
    },{
      text: 'Return',
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
      mainEnglish();
    }
  });

}

var comment = function() {



}

var pourquoi = function() {

  botui.message.bot({ // TODO #2 #1 Correction des icones
    delay: 500,
    type:'html',
    content: '<ul><li><span class="icon"><i class="fas fa-minus"></i></span>Give regional, national and international visibility to your company.</li>\
    <li><span class="icon"><i class="fas fa-minus"></i></span>Benefit from tailor-made services and specialized training.</li>\
    <li><span class="icon"><i class="fas fa-minus"></i></span>Access financial partners.</li>\
    <li><span class="icon"><i class="fas fa-minus"></i></span>Support and reinforcement of growth in your business.</li>\
    <li><span class="icon"><i class="fas fa-minus"></i></span>Be closer to your collaborators everywhere in Africa.</li></ul>'
  }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'See membership conditions',
        value: 'conditions'
      },{
        text: 'Return',
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
    content: '<ul><li><strong>Membership on approval</strong><br>Can apply to be a member of the digital cluster, any natural or legal person having this passion for transformation in the digital world, must first send a membership request by filling out a registration form and from then on, it automatically becomes a candidate member and has a reasonable period of time for admission.</li>\
    <li><strong>Full membership</strong><br>Companies with legal personality, having their activities which fall within the digital development sector and whose headquarters or establishment are located on African territory. However, membership is subject to ratification by the executive board by simple majority.</li></ul>'
  }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Return',
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

