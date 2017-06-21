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
            <tr>
                <td>James Bond</td>
                <td>30</td>
                <td>男</td>
                <td>james.bond@secreagent.com</td>
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
</div>
</template>
<script>
import Banner from '../components/Header';
import Copyright from '../components/Footer';
export default {
    components: {
        Banner, Copyright
    }
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

.first-row {
    height: 66px;
    font-size: 20px;
    border-top: 2px solid #cccccc;
    border-bottom: 0;
    background-color: #dbf3ff;
}
.last-row {
    border: 0;
}
.modify {
    display: inline-block;
    padding: 3px;
    color: #a3a3a3;
}
.delete {
    display: inline-block;
    padding: 3px;
    color: #a3a3a3;
}
.create {
    display: inline-block;
    padding: 3px;
    color: #a3a3a3;
}
</style>