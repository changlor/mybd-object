<template>
<div class="container">
    <Banner></Banner>
    <main class="body">
        <table>
            <tr class="first-row">
                <td>姓名</td>
                <td>年龄</td>
                <td>性别</td>
                <th>Email</th>
                <td>操作</td>
            </tr>
            <tr v-for="person in persons">
                <td>{{ person.name }}</td>
                <td>{{ person.age }}</td>
                <td>{{ person.sex }}</td>
                <td>{{ person.email }}</td>
                <td><span class="modify">修改</span><span class="delete">删除</span></td>
            </tr>
            <tr class="last-row">
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><span class="create">添加新成员</span></td>
            </tr>
        </table>
    </main>
    <Copyright></Copyright>
    <div class="layer">
        <Layer event="test"></Layer>
    </div>
</div>
</template>
<script>
import Banner from '../components/header';
import Copyright from '../components/footer';
import Layer from '../components/layer';

export default {
    data () {
        return {
            persons: [
                { name: 'James Bond', age: 30, sex: '男', email: 'james.bond@secreagent.com' },
                { name: 'Angelina Jolie', age: 40, sex: '女', email: 'i-dont-tell-anyone@somewhere' }
            ]
        };
    },
    components: { Banner, Copyright, Layer }
}
</script>
<style scoped>
main.body {
    padding: 80px;
    margin: 0 160px;
}
table {
    border-collapse: collapse;
    width: 100%;
}
tr {
    border-bottom: 1px solid #cccccc;
    font-size: 17px;
    height: 40px;
    color: #333333;
}

tr:hover {
    background-color: #fffef5;
}
tr:hover span {
    visibility: visible;
    opacity: 0.6;
}
tr:hover span:hover {
    opacity: 1;
}
td {
    text-align: center;
}
.first-row {
    font-size: 18px;
    border-top: 1px solid #cccccc;
    border-bottom: 0;
    background-color: #dbf3ff;
}
.first-row:hover {
    background-color: #dbf3ff;
}
.last-row {
    border: 0;
}
.last-row:hover {
    background-color: transparent;
}
.modify {
    visibility: hidden;
    display: inline-block;
    padding: 3px;
    color: #a3a3a3;
}
.delete {
    visibility: hidden;
    display: inline-block;
    padding: 3px;
    color: #a3a3a3;
}
.create {
    display: inline-block;
    padding: 3px;
    color: #a3a3a3;
    opacity: 0.6;
}
</style>