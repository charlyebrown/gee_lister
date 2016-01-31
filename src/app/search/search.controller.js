(function() {
  'use strict';

  angular
    .module('geeLister')

    .controller('SearchController', function (SearchFactory, RecipesService){
    	console.log('SearchController');
    	var self = this;
    	self.results = false;
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
