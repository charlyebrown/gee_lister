(function() {
  'use strict';

  angular
    .module('geeLister')
    .controller('GroceryListController', function(GroceryListService){
      var self = this;
      self.groceryList = GroceryListService.groceryList
      console.log(self.groceryList);
    });

})();
