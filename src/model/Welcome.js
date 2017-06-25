class Welcome {
    /*
     * @description: 创建一个新评论
     */
    static say () {
        console.log('hello world')
    }
    static validatePerson (page, component, id) {
        page.isPass = true;
        page.person.age -= 0;
        let { email, name, age } = page.person;
        Object.assign(page.error, { email: '&nbsp;', name: '&nbsp;', age: '&nbsp;' })
        if (!(email + '').match(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)) {
            page.isPass = false;
            page.error.email = '请提供一个正确的Email';
        }
        if ((name + '').trim() == '') {
            page.isPass = false;
            page.error.name = '姓名不能为空';
        }
        if (!(age > 0 && Math.floor(age) === age)) {
            page.isPass = false;
            page.error.age = '年龄必须是一个大于0的整数';
        }
    }
}

export default Welcome;