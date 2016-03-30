(function(){
    angular
        .module("ConverterApp")
        .factory("ConverterService", converterService);

    function converterService($http) {
        var api = {
            createConverter: createConverter
        };
        return api;

        function createConverter(converter) {
            return $http.post("/api/converter", converter);
        }
    }
})();