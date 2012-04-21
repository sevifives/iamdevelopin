sc_require('states/core_states');

Developin.statechart.addState('messageBase', {
  parentState: 'rootState',

  initialSubstate: 'noMessage'
});

Developin.statechart.addState('noMessage', {
  parentState: 'messageBase',

  enterState: function () {
    console.log('no messages');
  }
});