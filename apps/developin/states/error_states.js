sc_require('states/core_states');

Developin.statechart.addState('errorBase', {
  parentState: 'rootState',

  initialSubstate: 'noError'
});

Developin.statechart.addState('noError', {
  parentState: 'errorBase',
  
  enterState: function () {
    console.log('no errors');
  }
});