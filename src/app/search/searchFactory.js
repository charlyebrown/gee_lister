angular.module("SearchFactory", ['ngResource'])
.factory("SearchDTO", function($resource, searchParams){
	var url = 'https://api.yummly.com/recipes?';
	var app_id = 'b2260229';
	var app_key = '0f456d1129209b1c8cb5094aaf5c7388'
	var completeUrl = url + "_app_id=" + app_id + "&_app_key=" + app_key
	return $resource(completeUrl + "q=" + searchParams);
})