angular.module('RegisterCtrl', [])
  .controller('RegisterController', function ($scope, $locationProvider, auth) {
    $scope.onSubmit = function () {
  auth
    .register(formRegister)
    .error(function(err){
      alert(err);
    })
    .then(function(){
      $locationProvider.path('profile');
    });
};
  });
