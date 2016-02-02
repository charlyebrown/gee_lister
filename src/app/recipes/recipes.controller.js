(function() {
  'use strict';

  angular
    .module('geeLister')
    .controller('RecipeController', function(RecipeService, GroceryListService, $state){
      var self = this;
      self.recipe = RecipeService.recipe;
      self.groceryList = GroceryListService.groceryList;
      
      self.addToGroceryList = function(GroceryListService){
        var currentIngredients = self.recipe.ingredients;
        for (var i = 0; i < currentIngredients.length; i++) { 
          if (!self.groceryList.includes(currentIngredients[i])) {
            self.groceryList.push(currentIngredients[i]);
          }
        }
        $state.go('groceryList');
      }
    });

})();
