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
        templateUrl: 'app/results/results.html',
        controller: 'ResultsController',
        controllerAs: 'ctrl'
      })
      .state('groceryList', {
        url: '/grocerylist',
        templateUrl: 'app/groceryList/groceryList.html',
        controller: 'GroceryListController',
        controllerAs: 'ctrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
