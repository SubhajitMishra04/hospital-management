var app = angular.module('myApp', [], ['ui.bootstrap']);
var app = angular.module('myApp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'about.html',
            controller: 'FirstController'
        })

        .when('/train', {
            templateUrl: 'train.html',
            controller: 'SecondController'
        })

        .when('/trains', {
            templateUrl: 'trains.html',
            controller: 'ThirdController'
        })

        .otherwise({
            redirectTo: '/'
        });
});


app.controller('FirstController', function ($scope) {
    $scope.message = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis quas illo temporibus! Dolor, deserunt dolorum dolores impedit rerum iusto eaque id corrupti pariatur, minus, accusantium aperiam doloribus porro aliquam non! Ad, eius esse unde sit consectetur in amet rem nihil quidem obcaecati aperiam quasi explicabo molestias magni tempora aut laboriosam possimus. Eaque est libero quidem ducimus. Voluptas aliquid nam est nihil veniam ut cupiditate sequi, reprehenderit, similique adipisci tempore magnam ea. Repellat distinctio eos doloremque debitis excepturi quisquam quod molestias, commodi praesentium aliquam inventore vel laboriosam odio culpa error placeat vero unde consequuntur maxime blanditiis. Pariatur deleniti suscipit iste facilis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis quas illo temporibus! Dolor, deserunt dolorum dolores impedit rerum iusto eaque id corrupti pariatur, minus, accusantium aperiam doloribus porro aliquam non! Ad, eius esse unde sit consectetur in amet rem nihil quidem obcaecati aperiam quasi explicabo molestias magni tempora aut laboriosam possimus. Eaque est libero quidem ducimus. Voluptas aliquid nam est nihil veniam ut cupiditate sequi, reprehenderit, similique adipisci tempore magnam ea. Repellat distinctio eos doloremque debitis excepturi quisquam quod molestias, commodi praesentium aliquam inventore vel laboriosam odio culpa error placeat vero unde consequuntur maxime blanditiis. Pariatur deleniti suscipit iste facilis!';
});

app.controller('SecondController', function ($scope, $http) {
    $http.get('https://subhajitmishra04.github.io/hospital-management/record.json')
        .success(function (response) {
            $scope.names = response.records;
        });
});

app.controller('ThirdController', function ($scope, $http) {
    $http.get('https://subhajitmishra04.github.io/hospital-management/record.json')
        .success(function (response) {
            $scope.names = response.records;
            $scope.rowlimit = 6;
        });
});

