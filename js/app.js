var oModul = angular.module('oModul', ['ngRoute']);

oModul.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'predlozak/naslovna.html',
        controller: 'naslovnicaKontroler'
    });

    $routeProvider.when('/taskovi', {
        templateUrl: 'predlozak/taskovi.html',
        controller: 'taskKontroler'
    });
    $routeProvider.when('/trgovina', {
        templateUrl: 'predlozak/trgovina.html',
        controller: 'trgovinaKontroler'
    });
    $routeProvider.otherwise({
        template: "Greska!"
    });
})

//naslovnicaKontoler
oModul.controller('naslovnicaKontroler', function($scope){
    $scope.pozdravnaPoruka = "Nalazimo se na naslovnoj stranici!";
})

oModul.controller('taskKontroler', function($scope){
    $scope.oZadaci = [
        {
            id: 1,
            name: "Proučiti predložak"
        },
        {
            id: 2,
            name: "Položiti blic"
        },
        {
            id: 3, 
            name: "Riješti obavezne zadatke"
        }
    ]
    $scope.task = "";
    $scope.addTask = function()
    {
        $scope.oZadaci.push({
            id: $scope.oZadaci.length + 1,
            name: $scope.task
        });
    };

    $scope.Delete = function(index)
    {
        index = $scope.oZadaci.indexOf(index.zadatak), 1;
        $scope.oZadaci.splice(index, 1);
    }
})


oModul.controller('trgovinaKontroler', function($scope){
    $scope.oProizvodi = [
        {
            name: "Čokolada",
            price: 5,
            quantity: 10 
        },
        {
            name: "Brašno",
            price: 10,
            quantity: 15
        },
        {
            name: "Mlijeko",
            price: 6,
            quantity: 20 
        }
    ]
    $scope.Kosarica = [];
    $scope.Dodaj = function(index){
        $scope.Kosarica.push({
            s_name : index.proizvod.name,
            s_price : index.proizvod.price,
            s_quantity : 0,
            first_quantity : index.proizvod.quantity
        });
    }
    
    $scope.ukupno = 0;
    $scope.DohvatiCijenu = function(){
        $scope.ukupno = 0;
        angular.forEach($scope.Kosarica, function(element){
            $scope.ukupno += element.s_price * element.s_quantity;
            console.log("Količina: ", element.s_quantity);
            console.log("Cijena: ", element.s_price);

        })
        console.log($scope.ukupno);
        return $scope.ukupno;
    }


})