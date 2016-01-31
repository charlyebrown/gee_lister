(function() {
  'use strict';

  angular
    .module('geeLister')

    .controller('SearchController', function (SearchFactory, RecipesService, RecipeService){
    	console.log('SearchController');
    	var self = this;
    	self.results = false;
    	self.getRecipe = function(recipe) {
    		RecipeService.recipe = recipe;
    	}
		self.search = function(){
			console.log('Searching...')
			self.results = true;
			SearchFactory.get({
			q: self.searchParams
		})
		.$promise
		.then(function onSuccess(response) {
			RecipesService.recipes = response.matches;
			self.recipes = RecipesService.recipes;
		}, function onError(error){
			console.log(error)
		})}; 
	})
})();
