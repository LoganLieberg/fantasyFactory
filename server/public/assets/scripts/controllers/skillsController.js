myApp.controller('SkillsController', ['$scope', '$http', '$window', '$location', 'FantasyFactory', function($scope, $http, $window, $location, FantasyFactory) {
  $scope.fantasyFactory = FantasyFactory;
  $scope.user = {};
  $scope.skills = [];

  if ($scope.fantasyFactory.factoryGetUserData() === undefined) {
    $scope.fantasyFactory.factoryRefreshUserData().then(function() {

      $scope.user = $scope.fantasyFactory.factoryGetUserData();
      console.log('User Data: ', $scope.user);
      getSkills();

    });
  } else {
    $scope.user = $scope.fantasyFactory.factoryGetUserData();
    getSkills();
  }

  $scope.submitSkill = function () {

    $scope.skill.user_id = $scope.user._id;

    $http.post('/skills', $scope.skill).then(function(response) {
      console.log('yay!');
      getSkills();
    });

  };

  function getSkills() {

    $http.get('/skills/' + $scope.user._id).then(function(response) {
      $scope.skills = response.data;
    });

  }

}]);
