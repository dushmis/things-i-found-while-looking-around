var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope, $http) {
  $http.get('http://assignto.appspot.com/posts.json').success(function(data) {
    $scope.phones = data.AllPosts;
  });

  $scope.orderProp = 'age';
});
