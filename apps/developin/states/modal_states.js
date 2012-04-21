sc_require('states/core_states');

Developin.statechart.addState('modalBase', {
  parentState: 'rootState',

  initialSubstate: 'noModal'
});

Developin.statechart.addState('noModal', {
  parentState: 'modalBase',

  enterState: function () {
    console.log('no modal');
  }
});