<template>
<div class="container">
    <Banner></Banner>
    <main class="body">
        <table>
            <tr class="first-row">
                <th>姓名</th>
                <th>年龄</th>
                <th>性别</th>
                <th>Email</th>
                <th>操作</th>
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
        <Create></Create>
    </div>
</div>
</template>
<script>
import Banner from '../components/Header';
import Copyright from '../components/Footer';
import Create from '../components/Create';
export default {
    data () {
        return {
            persons: [
                { name: 'James Bond', age: 30, sex: '男', email: 'james.bond@secreagent.com' },
                { name: 'Angelina Jolie', age: 40, sex: '女', email: 'i-dont-tell-anyone@somewhere' }
            ]
        };
    },
    components: { Banner, Copyright, Create }
}
</script>
<style>
body {
    margin: 0;
}
main.body {
    padding: 80px;
    margin: 0 160px;
}
tr {
    border-bottom: 2px solid #cccccc;
    font-size: 18px;
    height: 60px;
    color: #333333;
}
table {
    border-collapse: collapse;
    width: 100%;
}
td {
    text-align: center;
}
th {
    padding: 0 20px;
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
.first-row {
    height: 66px;
    font-size: 20px;
    border-top: 2px solid #cccccc;
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
.body .modify {
    visibility: hidden;
    display: inline-block;
    padding: 3px;
    color: #a3a3a3;
}
.body .delete {
    visibility: hidden;
    display: inline-block;
    padding: 3px;
    color: #a3a3a3;
}
.body .create {
    display: inline-block;
    padding: 3px;
    color: #a3a3a3;
    opacity: 0.6;
}
</style>