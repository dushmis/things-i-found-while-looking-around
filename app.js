var foundApp = angular.module('thingsIFound', []);

foundApp.controller('FoundCtrl', function ($scope, $http) {
  //yup, that's my domain
  $http.get('http://assignto.appspot.com/posts.json').success(function(data) {
    $scope.posts = data.AllPosts;
  });

  $scope.orderProp = 'Date';
});
