Ext.define('Quiz.model.Quiz', {
    extend: 'Ext.data.Model',
    alias: 'model.quiz',

    fields: [
        { name: 'id', type: 'int' },
    ],

    proxy: {
        url : 'http://localhost:5555/quiz',
        method: 'GET'
    }

});