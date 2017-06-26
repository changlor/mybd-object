export default {
    models: ['Validate', 'User'],
    subscriptions: {
        'validatePerson': {
            Validate: 'validatePerson',
        },
        'selectPersons': {
            User: 'selectPersons',
        },
        'createPerson': {
            User: 'createPerson',
        },
        'deletePerson': {
            User: 'deletePerson',
        },
        'updatePerson': {
            User: 'updatePerson',
        }
    }
}
