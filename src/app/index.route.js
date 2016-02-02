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
      .state('groceryList', {
        url: '/grocerylist',
        templateUrl: 'app/groceryList/groceryList.html',
        controller: 'GroceryListController',
        controllerAs: 'ctrl'
      })
      .state('recipe', {
        url: '/recipe/:recipeId',
        templateUrl: 'app/recipes/recipe.html',
        controller: 'RecipeController',
        controllerAs: 'ctrl'
      });

    $urlRouterProvider.otherwise('/');
  }
})();
