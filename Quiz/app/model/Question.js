Ext.define('Quiz.model.Question', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'questionId', type: 'int' },
        { name: 'condition',      type: 'string' },
        { name: 'isCustom',    type: 'boolean' },
    ]
});