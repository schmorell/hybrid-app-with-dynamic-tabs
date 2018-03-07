(function () {
    'use strict';

    angular.module('app').component('ng1HeavyStuff', {
        templateUrl: './ng1/components/ng1-heavy-stuff.html',
        controller: controller,
        controllerAs: 'vm'
    });

    controller.$inject = [];

    function controller() {
        var vm = this;

        vm.renderNg1Heavy = false;
        vm.testItems = [];
        vm.testArray = [];

        vm.$onInit = onInit;

        function onInit() {
            for (var i = 0; i < 10000; i++) {
                vm.testItems.push(i);
            }

            vm.testArray.push(new Array(1000000).join('x'));
        }
    }
})();
