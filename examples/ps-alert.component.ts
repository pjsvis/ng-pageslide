// TODO: implement a $timeout to auto-close the pageslide
angular.module("app").component('psAlert', {
    bindings: {
        title: '<',
        message: '<'
    },
    controllerAs: 'vm',
    controller: function () {
        let vm = this;
        vm.checked = false;
        vm.size = '100px';

        vm.toggle = function () {
            vm.checked = !vm.checked
        }
    },
    template: `
<div>
    <a class="tiny button" href="" ng-click="vm.toggle()">
        ps-alert
    </a>
    <div pageslide 
            ps-side="bottom" 
            ps-open="vm.checked"
            ps-key-listener="true"
            ps-body-class="true"
            ps-auto-close="true>
        <div>
                <h2>ps-alert</h2>           
                <div ng-if="vm.checked">
                  <h4>ps-alert</h4>
                  <ol>
                    <li>TODO: fix height to contents or allow scroll</li>
                    <li>invoke from current view as error handler</li>
                    <li>invoke from $window.onerror in nav.component</li>
                    <li>Add a $timeout to close the pageslide after a few seconds</li>
                    <li>Add a close icon</li>
                  </ol>
                  <h4>params</h4>
                  <ol>
                    <li>title</li>
                    <li>message</li>
                    <li>actions</li>
                  </ol>                  
                  <h4>actions</h4>
                  <ol>
                    <li>fuged it</li>
                    <li>report it</li>
                  </ol>
                  <div>[ nav, esc, click ] to dismiss</div>   
                </div>                             
            </div>
        </div>
`
});
/*

 */