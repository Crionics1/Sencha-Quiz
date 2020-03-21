/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Quiz.Application', {
    extend: 'Ext.app.Application',

    name: 'Quiz',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    launch: async function () {
        let loggedIn;

        let token = Ext.util.Cookies.get('token');

        if (token == null) {
            loggedIn = false;
            Ext.create({
                xtype: 'login'
            });
            return
        }

        Ext.Ajax.request({
            url: 'http://localhost:5555/r/checksession'
        })
        .then(function(response, opts) {
            console.log(response);
            Ext.create({
                xtype: 'mainlayout'
            });
        })
        .catch(function(response, opts){
            console.log(response)
            Ext.create({
                xtype: 'login'
            });
        })
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
