(function() {
  'use strict';
  var results = null;

  angular
    .module('geeLister')

    .controller('SearchController', function (SearchFactory, RecipesService, RecipeService){
    	console.log('SearchController');
    	var self = this;
    	if (results === null){
    	} else {
    		self.recipes = results;
    	}

    	self.getRecipe = function(recipe) {
    		RecipeService.recipe = recipe;
    	}
		self.search = function(){
			console.log('Searching...')
			SearchFactory.get({
			q: self.searchParams
		})
		.$promise
		.then(function onSuccess(response) {
			results = response.matches
			RecipesService.recipes = results;
			self.recipes = RecipesService.recipes;
		}, function onError(error){
			console.log(error)
		})}; 
	})
})();
