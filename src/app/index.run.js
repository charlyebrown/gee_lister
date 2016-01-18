(function() {
  'use strict';

  angular
    .module('geeLister')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
