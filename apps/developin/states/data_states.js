sc_require('states/core_states');

Developin.statechart.addState('dataBase', {
  parentState: 'rootState',
  initialSubstate: 'dataReady'
});

Developin.statechart.addState('dataReady', {
  parentState: 'dataBase',

  enterState: function () {
    console.log('data ready');
  }
});