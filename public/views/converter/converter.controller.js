(function(){
    angular
        .module("ConverterApp")
        .controller("NewConverterController", newConverterController);

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