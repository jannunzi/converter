(function(){
    angular
        .module("ConverterApp")
        .factory("UtilService", utilService);

    function utilService() {
        var api = {
            success: success,
            failure: failure,
            setViewModel: setViewModel
        };
        return api;

        function setViewModel(vm) {
            this.vm = vm;
        }

        function success(response) {
            this.vm.data = response.data;
        }

        function failure(err) {
            this.vm.error = err;
        }
    }
})();