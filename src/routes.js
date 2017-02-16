(function () {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/menuapp/templates/home.template.html'
      })
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/menuapp/templates/categories.template.html',
        controller: 'CategoriesController',
        controllerAs: 'categoriesCtrl',
        resolve: {
          menuCategories: ['MenuDataService', function(MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })
      .state('items', {
        url: '/categories/{categoryShortName}',
        templateUrl: 'src/menuapp/templates/items.template.html',
        controller: 'ItemsController',
        controllerAs: 'itemsCtrl',
        resolve: {
          menuItems:['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
            }]
          }
        })
      }
    })();
