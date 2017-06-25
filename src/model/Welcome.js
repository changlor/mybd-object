class Welcome {
    /*
     * @description: 创建一个新评论
     */
    static say () {
        console.log('hello world')
    }
    static validatePerson (page, component, id) {
        page.isPass = true;
        page.error.email = '&nbsp;';
        if (!(page.person.email + '').match(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)) {
            page.isPass = false;
            page.error.email = '请提供一个正确的Email';
        }
        page.error.name = '&nbsp;';
        if ((page.person.name + '').trim() == '') {
            page.isPass = false;
            page.error.name = '姓名不能为空';
        }
        page.error.age = '&nbsp;';
        if (!(page.person.age > 0)) {
            page.isPass = false;
            page.error.age = '年龄必须是一个大于0的整数';
        }
    }
}

export default Welcome;