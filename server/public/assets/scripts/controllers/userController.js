myApp.controller('UserController', ['$scope', '$http', '$window', '$location', 'FantasyFactory', function($scope, $http, $window, $location, FantasyFactory) {
  // This happens after view/controller loads -- not ideal
  console.log('checking user');
  $scope.fantasyFactory = FantasyFactory;
  $scope.user = {};

  if ($scope.fantasyFactory.factoryGetUserData() === undefined) {
    $scope.fantasyFactory.factoryRefreshUserData().then(function() {

        $scope.user = $scope.fantasyFactory.factoryGetUserData();
        console.log('User Data: ', $scope.user);

        if ($scope.user == {}) {
          $location.path('/home');
        }

    });
  } else {

        $scope.user = $scope.fantasyFactory.factoryGetUserData();

        if ($scope.user == {}) {
          $location.path('/home');
        }

  }



  $scope.logout = function() {
    $http.get('/user/logout').then(function(response) {
      console.log('logged out');
      $location.path("/home");
    });
  }

  
}]);
