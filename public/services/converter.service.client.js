(function(){
    angular
        .module("ConverterApp")
        .factory("ConverterService", converterService);

    function converterService($http) {
        var api = {
            createConverter: createConverter,
            findAllConverters: findAllConverters,
            findConverterById: findConverterById
        };
        return api;

        function findConverterById(converterId) {
            return $http.get("/api/converter/"+converterId);
        }

        function findAllConverters() {
            return $http.get("/api/converter");
        }

        function createConverter(converter) {
            return $http.post("/api/converter", converter);
        }
    }
})();