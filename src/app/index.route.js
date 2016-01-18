(function() {
  'use strict';

  angular
    .module('geeLister')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/search/search.html',
        controller: 'SearchController',
        controllerAs: 'ctrl'
      })
      .state('results', {
        url: '/resultsList',
        templateUrl: 'app/search/search.html',
        controller: 'ResultsController',
        controllerAs: 'ctrl'
      })
      .state('groceryList', {
        url: '/grocerylist',
        templateUrl: 'app/search/search.html',
        controller: 'GroceryListController',
        controllerAs: 'ctrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
