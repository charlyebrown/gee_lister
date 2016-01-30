(function() {
  'use strict';

  angular
    .module('geeLister')
    .factory('SearchFactory', function($resource){
    	return $resource('http://api.yummly.com/v1/api/recipes')
    })
    .directive('glRecipeDirective', function(){
    	return {
    		templateUrl: 'app/results/results.html'
    	}
    })
    .directive('glSingleRecipeDirective', function(){
    	return {
    		templateUrl: 'app/results/singleResult.html'
    	}
    })
    .controller('SearchController', function (SearchFactory){
    	var self = this;
    	self.results = false;
    	
    	console.log('SearchController');
		
		var app_id = 'b2260229';
		
		var app_key = '0f456d1129209b1c8cb5094aaf5c7388'
		
		self.search = function(){
			self.results = true;
			SearchFactory.get({
			_app_id: app_id,
			_app_key: app_key,
			q: self.searchParams
		})
		.$promise
		.then(function onSuccess(response) {
			self.recipes = response.matches;
		}, function onError(error){
			console.log(error)
		})}; 
    })
})();
