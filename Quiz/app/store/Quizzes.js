Ext.define('Quiz.store.Quizzes', {
    extend: 'Ext.data.Store',
    alias: 'store.quizzes',


    storeId: 'quizzes',

    model: 'Quiz.model.Quiz',

    
    autoLoad: true
});