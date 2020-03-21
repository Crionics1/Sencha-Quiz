Ext.define('SenchaQuiz.view.main.MainLayout',{
    extend: 'Ext.panel.Panel',
    xtype: 'mainlayout',
    plugins: 'viewport',

    viewModel: 'mainviewmodel',
    controller: 'main',

    reference: 'mainlayout',

    layout: 'card',

    items: [
        {
            flex: 1,

            xtype: 'grid',
            title: 'Quizzes',

            store: 'quizzes',

            listeners: {
                itemclick: 'onJoin'
            },

            columns: [
                { text: 'Quiz', dataIndex: 'id', flex: 1 }
            ],
        },
        {
            flex: 1,
            xtype: 'quizroom',
        },
        {
            //xtype: 'quizadminroom'
        }
    ]
})