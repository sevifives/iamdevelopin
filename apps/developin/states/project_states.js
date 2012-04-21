sc_require('states/core_states');

Developin.statechart.addState('projectBase', {
  parentState: 'rootState',
  initialSubstate: 'noProject'
});

Developin.statechart.addState('noProject', {
  parentState: 'projectBase',

  enterState: function () {
    
  },

  showProject: function (projectId) {
    // Developin.projectController.set('content',projectId);
    this.gotoState('projectOverview');
  }
});

Developin.statechart.addState('projectOverview', {
  parentState: 'projectBase',

  enterState: function () {
    // append project view
  },

  exitState: function () {
    // remove project view
  },

  editProject: function () {
    this.gotoState('editProject');
  }
});

Developin.statechart.addState('editProject', {
  parentState: 'projectBase',

  enterState: function () {
    // append project edit view
  },

  saveProject: function () {

  },

  cancelEditingProject: function () {
    this.gotoState('projectOverview');
  },

  exitState: function () {
    // remove project edit view
  }
});