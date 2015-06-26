angular.module('starter.services', [])

.factory('Chats',['$http',function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data

   var API_KEY = "d6cf10c1163530ab0ea5be2cb44f6691";
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    },
    getTodaysForcast:function(city){
        this.city = city;

        var req = {
            method: 'GET',
            url: "http://api.openweathermap.org/data/2.5/weather?q=" +city +',' +'IN'+'&units=metric'

        }
      return $http(req);
    },

    getFutureForcast:function(){
      var city = this.city;
      var req = {
        method: 'GET',
        url: "http://api.openweathermap.org/data/2.5/forecast/daily?q=" +city +',' + '&units=metric'

      };

      return $http(req);
    }

  };
}]);
