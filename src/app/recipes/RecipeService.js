angular
    .module('geeLister')
.service('RecipeService', function(SearchFactory, RecipesService) {
	var self = this;
	
	self.recipe = [];
	
	self.getRecipe = function(recipe) {
    	self.recipe = recipe;
    };

    self.search = function(searchParams){
		return SearchFactory.get({
			q: searchParams
		})
	    .$promise
		.then(function onSuccess(response) {
			RecipesService.recipes = response.matches;
			console.log(RecipesService.recipes);
		}, function onError(error){
			console.log(error)
		});
	}
})