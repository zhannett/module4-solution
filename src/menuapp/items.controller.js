(function () {
  'use strict';

  angular.module('data')
    .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['menuItems'];
  function ItemsController(menuItems) {
    var itemsCtrl = this;
    itemsCtrl.menuItems = menuItems.data.menu_items;
}

})();
