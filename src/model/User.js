import { Xhr } from '../vendor/lib'

class User {
    static selectPersons (page, component, id) {
        Xhr.fetch('/api/all-persons', {
            method: 'POST'
        })
        .then((res) => {
            if (res.code === 200) {
                page.persons = res.data;
            }
        });
    }

    static createPerson (page, component, id) {
        const { name, age, gender, email } = page.person;
        const body = `name=${name}&age=${age}&gender=${gender}&email=${email}`;
        Xhr.fetch('/api/add-person', {
            headers:{  
                'Content-Type': 'application/x-www-form-urlencoded'  
            },
            method: 'POST',
            body,
        })
        .then((res) => {
            if (res.code === 200) {
                page.persons.push(page.person);
            }
        });
    }

    static deletePerson (page, component, id) {
        const personId = page.person.id;
        Xhr.fetch('/api/remove-person', {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'  
            },
            method: 'POST',
            body: `id=${personId}`,
        })
        .then((res) => {
            if (res.code === 200) {
                page.persons.splice(page.index, 1);
            }
        });
    }

    static updatePerson (page, component, id) {
        const { name, age, gender, email } = page.person;
        const personId = page.person.id;
        console.log(personId)
        const body = `id=${personId}&name=${name}&age=${age}&gender=${gender}&email=${email}`;
        Xhr.fetch('/api/edit-person', {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'  
            },
            method: 'POST',
            body,
        })
        .then((res) => {
            if (res.code === 200) {
                Object.assign(page.persons[page.index], page.person);
            }
        });
    }
}

export default User;