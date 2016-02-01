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
	})}
})