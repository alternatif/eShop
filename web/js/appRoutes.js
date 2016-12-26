angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

$routeProvider

//home
.when('/', {
  templateUrl: 'views/home.html',
  controller: 'MainController'
})

.when('/products', {
  templateUrl: 'views/products.html',
  controller: 'ProductsController'
})

.when('/cart', {
  templateUrl: 'views/cart.html',
  controller: 'CartController'
});


$locationProvider.html5Mode(true);

}]);
