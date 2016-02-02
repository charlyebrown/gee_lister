(function() {
  'use strict';

  angular
    .module('geeLister')
    .controller('GroceryListController', function(GroceryListService, RecipeService, RecipesService, $state){
      var self = this;
      self.groceryList = GroceryListService.groceryList;
      self.searchForMoreItems = function() {
      	console.log('checked items: ' + self.checkedGroceryItems);
      	RecipeService.search(self.checkedGroceryItems)
      	.then(function(){
      		console.log()
      		$state.go('home');
      	}) 	
      };
      self.deleteItem = function(item) {
        var index = self.groceryList.indexOf(item);
        self.groceryList.splice(index, 1);
      };
      self.addItem = function(){
        console.log('item to add to the grocery list is: ' + self.itemToAdd);
        if (self.addItemToForm.$valid) {
          self.groceryList.push(self.itemToAdd);
          self.itemToAdd = "";
          self.addItemToForm.$setPristine();
        } 
      }
    });

})();
