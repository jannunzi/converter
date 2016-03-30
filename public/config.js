(function(){
    angular
        .module("ConverterApp")
        .config(Configuration);

    function Configuration($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/converter/converter-list.view.html"
            });
    }
})();