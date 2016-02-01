(function() {
  'use strict';
  var results = null;

  angular
    .module('geeLister')

    .controller('SearchController', function (RecipesService, RecipeService){
    	console.log('SearchController');
    	var self = this;
    	if (results === null){
    	} else {
    		self.recipes = results;
    	}

    	self.getRecipe = RecipeService.getRecipe;
    	
    	self.getRecipes = function(){ self.recipes = RecipesService.recipes};

    	self.search = function() {
    		RecipeService.search(self.searchParams)
    		.$promise
			.then(function onSuccess(response) {
				RecipesService.recipes = response.matches;
				results = RecipesService.recipes;
				self.recipes = results;
			}, function onError(error){
				console.log(error)
			}); 
    	
    	};
	})
})();
