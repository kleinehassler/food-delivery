// this will be the Angular Controller for the Menu Tab

(function () {

    angular.module('food-delivery.menu',[])
        .controller('Menu', MenuCtrl);


    function MenuCtrl($scope, $state, $http) {

        console.log('Menu!');

        // the notification that the menu data has been got
        $scope.onReceived = function() {
            console.log('onReceived!');
        };

        $scope.goCart = function() {
            $state.go('cart');
        }
    }

})();


