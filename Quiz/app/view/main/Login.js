Ext.define('SenchaQuiz.view.main.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    layout: 'center',

    controller: 'login',

    reference: 'loginview',

    bodyPadding: 10,
    title: 'Login Window',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'privateId',
            reference: 'privateId',
            fieldLabel: 'Private ID',
            allowBlank: false
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            listeners: {
                click: 'login'
            }
        }]
    }
});