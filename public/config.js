(function(){
    angular
        .module("ConverterApp")
        .config(Configuration);

    function Configuration($routeProvider) {
        $routeProvider
            .when("/converter", {
                templateUrl: "views/converter/converter-list.view.html",
                controller: "ConverterListController",
                controllerAs: "model"
            })
            .when("/converter/new", {
                templateUrl: "views/converter/converter-new.view.html",
                controller: "NewConverterController",
                controllerAs: "model"
            })
            .when("/converter/:converterId", {
                templateUrl: "views/converter/converter-edit.view.html",
                controller: "EditConverterController",
                controllerAs: "model"
            })
            .otherwise({
                redirectTo: "/converter"
            })
    }
})();