(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ShoppingListController', ShoppingListController)
.controller('BuyController', BuyController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ShoppingListController.$inject = ['ShoppingListCheckOffService'];
function ShoppingListController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getItemsAvailable();
  toBuy.buy = function(index) {
    ShoppingListCheckOffService.buyItem(index);
  };
}

BuyController.$inject = ['ShoppingListCheckOffService'];
function BuyController(ShoppingListCheckOffService) {
  var bought = this;
  bought.items = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService() {
  var service = this;
  var toBuyItems = [
    { name: "cookies", quantity: 10 },
    { name: "milk", quantity: 7 },
    { name: "chips", quantity: 5 },
    { name: "soda", quantity: 6 },
    { name: "cake", quantity: 1 }];

  var boughtItems = [];

  service.buyItem = function(index) {
    boughtItems.push(toBuyItems[index]);
    toBuyItems.splice(index, 1);
  };

  service.getItemsAvailable = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
