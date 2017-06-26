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
            if (res.code === 500) {
                page.layerCreate('errors', { errors: res.data.error });
            }
        })
        .catch(() => {
            page.layerCreate('errors', { errors: '未知错误！' });
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
            if (res.code === 500) {
                page.layerCreate('errors', { errors: res.data.error });
            }
        })
        .catch(() => {
            page.layerCreate('errors', { errors: '未知错误！' });
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
            if (res.code === 500) {
                page.layerCreate('errors', { errors: res.data.error });
            }
        })
        .catch(() => {
            page.layerCreate('errors', { errors: '未知错误！' });
        });
    }

    static updatePerson (page, component, id) {
        const { name, age, gender, email } = page.person;
        const personId = page.person.id;
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
            if (res.code === 500) {
                page.layerCreate('errors', { errors: res.data.error });
            }
        })
        .catch(() => {
            page.layerCreate('errors', { errors: '未知错误！' });
        });
    }
}

export default User;