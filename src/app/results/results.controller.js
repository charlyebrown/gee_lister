(function() {
  'use strict';

  angular
    .module('geeLister')
    .controller('RecipeController', function($stateParams, RecipesService){
      var self = this;
      self.recipes = RecipesService.recipes;
      console.log(self.recipes);
    });

})();
