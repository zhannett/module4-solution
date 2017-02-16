(function () {
  'use strict';

  angular.module('data')
    .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['menuCategories'];
  function CategoriesController(menuCategories) {
    var menu = this;
    menu.menuCategories = menuCategories.data;
  }

})();
