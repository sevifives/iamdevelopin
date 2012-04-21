sc_require('states/core_states');

Developin.statechart.addState('userBase', {
  parentState: 'rootState',
  initialSubstate: 'noUser'
});

Developin.statechart.addState('noUser', {
  parentState: 'userBase',

  enterState: function () {
    
  },

  loadUser: function (userId) {
    // Developin.userController.set('content', userId);
    this.gotoState('userOverview');
  }
});

Developin.statechart.addState('userOverview', {
  parentState: 'userBase',

  enterState: function () {
    // append user overview
  },

  showUserProjects: function () {
    // show user projects
  },

  showUserInformation: function () {
    // show user information
  }
});