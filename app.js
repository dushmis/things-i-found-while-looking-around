var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope, $http) {
  $http.get('http://localhost:8080/posts.json').success(function(data) {
    console.log(data);
    $scope.phones = data.AllPosts;
  });

  $scope.orderProp = 'age';
});
