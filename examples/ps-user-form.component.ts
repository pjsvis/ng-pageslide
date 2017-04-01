angular.module("app").component('psUserForm', {
bindings:{

},
controllerAs: 'vm',
controller: function(){
    let vm = this;
    vm.checked = false;
    vm.size = '100px';

    vm.toggle = function () {
        vm.checked = !vm.checked
    }
},
template:`
<div>
    <a class="tiny button" href="" ng-click="vm.toggle()">Edit User</a>
    <div pageslide 
            ps-open="vm.checked" 
            ps-body-class="true" 
            ps-click-outside="false">
        <div style="padding:20px" id="demo-right" >
            <h2>Edit User</h2>
                <div ng-if="vm.checked">
                    <input autofocus="true" type="text" value="Peter">
                    <br />
                <a ng-click="vm.toggle()" class="button tiny">Ok</a>
                <a ng-click="vm.toggle()" class="button tiny">Cancel</a>
                </div>
                <div>
                    Add/Edit something. You can only exit by clicking ok/cancel.
                </div>
        </div>

    </div>
</div>
`
});
/*

 */