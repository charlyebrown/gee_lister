(function() {
  'use strict';

  angular
    .module('geeLister')
    .controller('RecipeController', function($stateParams, RecipesService){
      var self = this;
      console.log($stateParams);
      self.recipes = RecipesService.recipes;
      console.log(self.recipes);
    })
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
      // .state('results', {
      //   url: '/resultsList',
      //   templateUrl: 'app/results/results.html',
      //   controller: 'ResultsController',
      //   controllerAs: 'ctrl'
      // })
      .state('groceryList', {
        url: '/grocerylist',
        templateUrl: 'app/groceryList/groceryList.html',
        controller: 'GroceryListController',
        controllerAs: 'ctrl'
      })
      .state('recipe', {
        url: '/recipe/:recipeId',
        templateUrl: 'app/results/recipe.html',
        controller: 'RecipeController',
        controllerAs: 'ctrl'
      });

    $urlRouterProvider.otherwise('/');
  }
})();
