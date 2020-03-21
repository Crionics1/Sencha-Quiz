Ext.define('Quiz.view.main.QuizRoom', {
    extend: 'Ext.panel.Panel',

    xtype: 'quizroom',

    layout: 'column',

    items: [
        {
            columnWidth: 0.7,
            region: 'west',
            layout: 'card',
            reference: 'quizroomcard',

            items: [
                {
                    xtype: 'grid',
                    reference: 'answersGrid',
                    titleAlign: 'center',

                    bind: {
                        title: '{condition}'
                    },


                    listeners: {
                        itemclick: 'onAnswer'
                    },

                    columns: [{
                        flex: 1,
                        text: 'answer',
                        dataIndex: 'answer'
                    }],

                    store: {
                        storeId: 'answersstore',
                    },

                },
                {
                    xtype: 'panel',
                    titleAlign: 'center',

                    bind: {
                        title: '{condition}'
                    },

                    buttonAlign: 'center',
                    buttons: [
                        {
                            text: 'ANSWER',
                            handler: 'onCustomAnswer'
                        }
                    ]
                }
            ]
        },
        {
            columnWidth: 0.3,
            region: 'east',
            xtype: 'grid',
            reference: 'pointsgrid',

            columns: [
                {flex:1 ,text: 'userID',dataIndex: 'id'},
                {flex: 1, text: 'points', dataIndex: 'points'}
            ],

            store:{
                storeId: 'pointsstore'
            }
        }
    ]
});