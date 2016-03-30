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
            .otherwise({
                redirectTo: "/converter"
            })
    }
})();