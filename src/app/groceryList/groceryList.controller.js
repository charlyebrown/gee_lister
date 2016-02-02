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
      	.$promise
			.then(function onSuccess(response) {
				RecipesService.recipes = response.matches;
				$state.go('home');
			}, function onError(error){
				console.log(error)
			});
      }

    });

})();
