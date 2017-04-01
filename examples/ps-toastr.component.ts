// TODO: implement a $timeout to auto-close the pageslide
angular.module("app").component('psToastr', {
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
        ps-toastr
    </a>
    <div pageslide 
            ps-side="bottom" 
            ps-open="vm.checked"
            ps-key-listener="true"
            ps-body-class="true"
            ps-auto-close="true>
        <div style="padding:20px" id="demo-right" >
                <h2>ps-toastr</h2>           
                <div ng-if="vm.checked">
                  <div>toastr messages</div>
                  <ol>
                    <li>invoke from current view as error handler</li>
                    <li>invoke from $window.onerror in nav.component</li>
                  </ol>
                  <div>[ nav, esc, click ] to dismiss</div>   
                </div>                             
            </div>
        </div>
`
});
/*

 */