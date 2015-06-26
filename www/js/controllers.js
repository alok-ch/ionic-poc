angular.module('starter.controllers', [])

.controller('DashCtrl',['$scope','Chats',function($scope,Chats) {



     $scope.getCityData = function(city){
         if(city.length < 4){
             return;
         }
         Chats.getTodaysForcast(city)
             .then(function(response){
                 if(response.status !== 200){
                     return;
                 }
                 $scope.data = response.data;
                 console.log(response);
             },function(error){
                 console.log(error)
             })
     }


    }])

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
     Chats.getFutureForcast()
        .then(function(response){
            $scope.forcast = response.data;
        })


  

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
