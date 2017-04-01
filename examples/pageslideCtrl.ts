app.controller('pageslideCtrl', function ($scope: any) {

    let vm = this;
    vm.checked = false;
    vm.size = '100px';

    vm.toggle = function () {
        vm.checked = !vm.checked
    }

    vm.mockRouteChange = function () {
        vm.$broadcast('$locationChangeStart');
    }

    vm.onopen = function () {
        alert('Open');
        console.log(this, vm);
    }

    vm.onclose = function () {
        alert('Close');
        console.log($scope);
    }
});