(function() {
  'use strict';
  var results = null;

  angular
    .module('geeLister')

    .controller('SearchController', function (RecipesService, RecipeService){
    	console.log('SearchController');
    	var self = this;
    	if (RecipesService.recipes.length > 0){
            results = RecipesService.recipes;
            self.recipes = results;
    	} 

    	self.getRecipe = RecipeService.getRecipe;
    	
    	self.getRecipes = function(){ self.recipes = RecipesService.recipes};

    	self.search = function() {
    		RecipeService.search(self.searchParams)
            .then(function() {
                results = RecipesService.recipes;
                console.log('result: ' + results);
                self.recipes = results;
                self.searchParams = "";
                self.searchForm.$setPristine();
            })
    	};
	})
})();
