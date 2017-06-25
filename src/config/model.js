export default {
    models: ['Welcome'],
    subscriptions: {
        'say': {
            Welcome: 'say',
        },
        'validatePerson': {
            Welcome: 'validatePerson',
        }
    }
}
