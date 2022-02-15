var app = angular.module('myApp', [], ['ui.bootstrap']);
var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
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


app.controller('FirstController', function($scope) {
    $scope.message = 'The Railway Administration reserves seats, berths, compartments, or carriage in accordance with the rules and conditions published in the Coaching Tariff. A passenger seeking reservation of berth or seats should purchase tickets from the Railway Reservation Offices/Authorised Travel Agency only.Advance reservations are made generally up to 120 days in advance for all classes and all trains. The period of advance reservation (ARP) is exclusive of the day of departure of the train.At intermediate stations where the train arrives on the following day, such reservations can be done more than 120 days in advance of date of journey from the intermediate station. ARP is in relation to the date of journey from train originating station. In case of some Inter-city day trains, the ARP is less.An individual can book only up to six passengers on one requisition form provided all passengers are for the same destination and for the same train.w.e.f. 01-12-2012,any one of the passenger booked on a PNR for undertaking journey in any class will have to produce any one of the 10 prescribed proofs of identity in original) during the journey failing which all  the passengers booked on that ticket will be treated as traveling  without ticket and charged accordingly. (ref. Railway Board letter no.2011/TG-I/20/P/ID dated 01-11-2012) 1.Voter Photo identity card issued by Election Commision of India. 2.Passport. ';
});

app.controller('SecondController', function($scope, $http) {
    $http.get('https://subhajitmishra04.github.io/hospital-management/record.json')
        .success(function(response) {
            $scope.names = response.records;
        });
});

app.controller('ThirdController', function($scope, $http) {
    $http.get('https://subhajitmishra04.github.io/hospital-management/record.json')
        .success(function(response) {
            $scope.names = response.records;
            $scope.rowlimit = 6;
        });
});