// ==========================================================================
// Project:   Developin
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Developin */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//

sc_require('states/core_states');

Developin.main = function main() {
  Developin.statechart.initStates({
    'default': 'rootState'
  });

  Stativus.State.gotoState = Stativus.State.goToState;
  
  Developin.getPath('mainPage.mainPane').append() ;

} ;

function main() { Developin.main(); }
