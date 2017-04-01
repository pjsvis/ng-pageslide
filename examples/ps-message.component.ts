// TODO: Host a bunch of components here.
angular.module("app").component('psMessage', {
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
        ps-message
    </a>
    <div pageslide 
            ps-side="top" 
            ps-open="vm.checked"
            ps-body-class="true"
            ps-key-listener="true"
            ps-auto-close="true>
        <div style="padding:20px" id="demo-right" >
            <h2>ps-message</h2>
                <div ng-if="vm.checked">  
                  <div>message components</div>
                  <ol>
                    <li>[ nav, esc, click ] to dismiss</li>
                  </ol>
                </div>
        </div>
    </div>
</div>
`
});
