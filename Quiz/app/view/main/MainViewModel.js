Ext.define('Quiz.view.main.MainViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mainviewmodel',
    
    data: {
        userId: null,
        
        quizId: null,
        questionId : null,
        condition: 'test',
        isCustom: null,

        socket: null
    }
});