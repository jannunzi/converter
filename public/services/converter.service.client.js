(function(){
    angular
        .module("ConverterApp")
        .factory("ConverterService", converterService);

    function converterService($http) {
        var api = {
            createConverter: createConverter,
            findAllConverters: findAllConverters,
            findConverterById: findConverterById,
            updateConverter: updateConverter,
            removeConverter: removeConverter
        };
        return api;

        function removeConverter(converter) {
            return $http.delete("/api/converter/"+converter._id);
        }

        function updateConverter(converter) {
            return $http.put("/api/converter/"+converter._id, converter);
        }

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