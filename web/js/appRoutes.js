angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

$routeProvider

//home
.when('/', {
  templateUrl: 'views/home.html',
  controller: 'ProductsController'
})

.when('/products', {
  templateUrl: 'views/products.html',
  controller: 'ProductsController'
})

.when('/product_new', {
  templateUrl: 'views/product_new.html',
  controller: 'ProductsAddController'
})


.when('/register', {
  templateUrl: 'views/register.html',
  controller: 'RegisterController'
})

.when('/cart', {
  templateUrl: 'views/cart.html',
  controller: 'CartController'
});


$locationProvider.html5Mode(true);

}]);
