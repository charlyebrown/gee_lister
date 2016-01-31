(function() {
  'use strict';

  angular
    .module('geeLister')
    .controller('RecipeController', function(RecipeService){
      var self = this;
      self.recipe = RecipeService.recipe;
      console.log('recipe is: ' + self.recipe.recipeName);
      console.log("Recipe Controller");
    });

})();
