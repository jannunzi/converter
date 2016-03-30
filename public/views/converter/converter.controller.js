(function(){
    angular
        .module("ConverterApp")
        .controller("ConverterListController", converterListController)
        .controller("NewConverterController", newConverterController);

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