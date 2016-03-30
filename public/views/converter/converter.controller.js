(function(){
    angular
        .module("ConverterApp")
        .controller("EditConverterController", editConverterController)
        .controller("ConverterListController", converterListController)
        .controller("NewConverterController", newConverterController);

    function editConverterController($location, $routeParams, ConverterService) {

        var vm = this;

        vm.updateConverter = updateConverter;
        vm.removeConverter = removeConverter;

        function init() {
            ConverterService
                .findConverterById($routeParams.converterId)
                .then(
                    function(response) {
                        vm.data = response.data;
                    },
                    function(err) {
                        vm.error = err;
                    }
                );
        }
        init();

        function removeConverter(converter) {
            ConverterService
                .removeConverter(converter)
                .then(
                    function() {
                        $location.url("/converter");
                    },
                    function(err) {
                        vm.error = err;
                    }
                );
        }

        function updateConverter(converter) {
            ConverterService
                .updateConverter(converter)
                .then(
                    function() {
                        $location.url("/converter");
                    },
                    function(err) {
                        vm.error = err;
                    }
                );
        }
    }

    function converterListController(ConverterService) {

        var vm = this;

        function init() {
            ConverterService
                .findAllConverters()
                .then(
                    function(response) {
                        vm.data = response.data;
                    },
                    function(err) {
                        vm.error = err;
                    }
                );
        }
        init();
    }

    function newConverterController(ConverterService, $location) {

        var vm = this;

        vm.createConverter = createConverter;

        function createConverter(converter) {
            ConverterService
                .createConverter(converter)
                .then(
                    function() {
                        $location.url("/converter");
                    },
                    function(err) {
                        vm.error = err;
                    }
                );
        }
    }
})();