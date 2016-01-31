(function() {
  'use strict';

  angular
    .module('geeLister')
    .controller('RecipeController', function(RecipeService, GroceryListService){
      var self = this;
      self.recipe = RecipeService.recipe;
      self.groceryList = GroceryListService.groceryList;
      self.addToGroceryList = function(GroceryListService){
      	self.groceryList.push(self.recipe.ingredients);
      }
    });

})();
