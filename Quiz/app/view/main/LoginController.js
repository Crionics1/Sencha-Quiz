Ext.define('SenchaQuiz.view.main.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    /**
     * Called when the view is created
     */

    requires: [
        'SenchaQuiz.view.main.MainLayout'
    ],


    login: async function () {
        var privateId = this.lookupReference('privateId')
        let success = false;
        let userId ;
        
        var resp = await Ext.Ajax.request({
            async: true,
            url: 'http://localhost:5555/login',
            method: 'POST',

            params: {
                privateId: privateId.value
            },

            success: function(response, opts) {
                console.log(response)
                success = true;
                userId = response.responseText
            },

            failure: function(response, opts){
                console.log(response)
            }
        })

        if(success){
            this.getView().destroy()
            
            let mainview = Ext.create('SenchaQuiz.view.main.MainLayout')
            let vm = mainview.getViewModel()
            vm.set('userId',userId)
        }
    }
});