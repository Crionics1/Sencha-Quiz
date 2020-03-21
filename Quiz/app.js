/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Quiz.Application',

    name: 'Quiz',

    stores: ['Quizzes'],

    requires: [
        // This will automatically load all classes in the Quiz namespace
        // so that application classes do not need to require each other.
        'SenchaQuiz.view.main.Login',
        'SenchaQuiz.view.main.LoginController',
        
        'SenchaQuiz.view.main.MainLayout',

        'Quiz.model.Quiz',
    ],

    // The name of the initial view to create.
    //mainView: 'SenchaQuiz.view.main.MainLayout'
});
