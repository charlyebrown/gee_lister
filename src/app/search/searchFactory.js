angular
    .module('geeLister')
.factory('SearchFactory', function($resource){
	var self = this;
	self.app_id = 'b2260229';
	self.app_key = '0f456d1129209b1c8cb5094aaf5c7388'
    return $resource('http://api.yummly.com/v1/api/recipes?_app_id=' + self.app_id + "&_app_key=" + self.app_key)
})