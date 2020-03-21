/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Quiz.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onJoin: function(view, record, item, index, e, eOpts ) {
        let vm = this.getViewModel();

        vm.set('quizId', record.data.id);

        this.view.setActiveItem(1);//render game room

        let store = Ext.StoreManager.lookup('answersstore');
        let card = this.lookupReference('quizroomcard')

        store.setProxy(Ext.create('Ext.data.proxy.Ajax',{
            url: `http://localhost:5555/currentquestion/${vm.data.quizId}`,

            reader: {
                type: 'json',
                rootProperty: 'QuestionAnswers'
            }
        }))

        //todo set title and question id

        //store.load()// set answers

        let grid = this.lookupReference('answersGrid')
        let pointsgrid = this.lookupReference('pointsgrid')

        let pointsstore = Ext.StoreManager.lookup('pointsstore')
        pointsstore.setProxy(Ext.create('Ext.data.proxy.Ajax',{
            url: `http://localhost:5555/quizmembers/${vm.data.quizId}`,
        }))

        pointsstore.load()
        
        var socket = io.connect("http://localhost:5555");
        vm.set('socket',socket)
        socket.on('question',function(data) {
            vm.set('questionId', data.questionId)
            vm.set('condition', data.condition)
            vm.set('isCustom', data.isCustom)

            pointsstore.load()

            if(!data.isCustom){
                card.setActiveItem(0)
                grid.enable()
                store.load()
            }

            if(data.isCustom){
                card.setActiveItem(1)
                store.clearData()
            }

        })
    },

    onAnswer: function(view, record, item, index, e, eOpts) {
        debugger
        let vm = this.getViewModel();

        let socket = vm.get('socket')
        

        socket.emit('answer',{
            userId: vm.get('userId'),
            questionId: vm.get('questionId'),
            quizId: vm.get('quizId'),
            answerId: record.data.id
        })

        this.lookupReference('answersGrid').disable()
    },

    onCustomAnswer: function(){
        debugger
        let vm = this.getViewModel();
        
        let socket = vm.get('socket')

        socket.emit('customAnswer',{
            userId: vm.get('userId'),
            questionId: vm.get('questionId'),
            quizId: vm.get('quizId'),
        })
    }
});
