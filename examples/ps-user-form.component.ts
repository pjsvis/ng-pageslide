angular.module("app").component('psUserForm', {
    bindings: {

    },
    controllerAs: 'vm',
    controller: function (DataService: IDataService) {
        let vm = this;
        vm.checked = false;
        vm.size = '100px';

        vm.add = add;
        vm.remove = remove;

        this.$onInit = function () {
            vm.availableTestSuites = DataService.availableTestSuites;
            vm.testSuites = DataService.testSuites;
        }
        vm.toggle = function () {
            vm.checked = !vm.checked
        }

        function add(suite: ITestSuite) {
            let testSuites: ITestSuite[] = angular.copy(vm.testSuites);
            testSuites.push(suite);
            vm.testSuites = testSuites

            let index = vm.availableTestSuites.indexOf(suite);
            vm.availableTestSuites.splice(index, 1);
        }

        function remove(suite: ITestSuite) {
            let availableTestSuites: ITestSuite[] = angular.copy(vm.availableTestSuites);
            availableTestSuites.push(suite);
            vm.availableTestSuites = availableTestSuites;

           let index = vm.testSuites.indexOf(suite);
            vm.testSuites = vm.testSuites.splice(index, 1);
        }


    },
    template: `
    <style>
    .panel-body {
        max-height: 75vh;
        overflow-y: auto;
        padding: 0;
    }

    .pointer {
        cursor: pointer;
    }

    .list-group-item-active {
        background-color: #F8D904;
    }
</style>
<div>
    <a class="btn btn-info btn-sm" href="" ng-click="vm.toggle()">Manage Test Suites</a>
    <div pageslide ps-size="800px" ps-open="vm.checked" ps-body-class="true" ps-click-outside="false">
        <div id="demo-right" style="padding:1em;">
            <h2>
                <div class="pull-right">
                    <button class="btn btn-info btn-sm" ng-click="vm.checked=false">Ok</button>
                    <button class="btn btn-info btn-sm" ng-click="vm.checked=false">Cancel</button>
                </div>

                Manage Test Suites</h2>
            <div class="alert alert-info">
                <p> Add and remove test suites for simulator <strong>Clear2Pay AMEX GCAG ISO - October 2015</strong></p>
                <p>Note that if you remove a test suite from a simulator it will affect all users of that simulator.</p>
            </div>
            <div ng-if="vm.checked">
                <div class="row">
                    <div class="col-md-6">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <span class="panel-title">
Active Test Suites
                </span>
                            </div>
                            <div class="panel-body no-pad">
                                <ul class="list-group">
                                    <li class="list-group-item pointer" ng-repeat="ts in vm.testSuites track by ts.Id">
                                        <button class="btn btn-info btn-sm space-below" ng-click="vm.remove(ts)">
                                                <i class="glyphicon glyphicon-arrow-right"></i>
                                        </button> {{ts.Name}}

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <span class="panel-title">
                                    Available Test Suites
                                </span>
                            </div>
                            <div class="panel-body no-pad">
                                <ul class="list-group">
                                    <li class="list-group-item pointer" ng-repeat="ts in vm.availableTestSuites track by ts.Id">
                                        <button class="btn btn-info btn-sm space-right" ng-click="vm.add(ts)">
                                                <i class="glyphicon glyphicon-arrow-left"></i>
                                        </button> <span class="space-right">{{ts.Name}}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
    `
});
// TODO: Get some data