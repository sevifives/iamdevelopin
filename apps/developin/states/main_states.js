sc_require('states/core_states');

Developin.statechart.addState('application', {
  parentState: 'rootState',

  initialSubstate: 'loading'
});

Developin.statechart.addState('loading', {
  parentState: 'application',

  enterState: function () {
    console.log('hey there from loading app!');
  },

  finishedLoadingResources: function () {
    this.gotoState('userOverview');
  }
});

Developin.statechart.addState('userOverview', {

  parentState: 'application',

  enterState: function () {
    // append the user overview
  }
});