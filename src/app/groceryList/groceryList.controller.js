(function() {
  'use strict';

  angular
    .module('geeLister')
    .controller('GroceryListController', function(GroceryListService, RecipeService){
      var self = this;
      self.groceryList = GroceryListService.groceryList;
      self.searchForMoreItems = function() {
      	RecipeService.search(self.checkedGroceryItems);
      }

    });

})();
