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
            <tr v-for="(person, index) in persons">
                <td>{{ person.name }}</td>
                <td>{{ person.age }}</td>
                <td>{{ person.gender | gender }}</td>
                <td>{{ person.email }}</td>
                <td>
                    <span class="modify" v-on:click="layerCreate('modify', { index, person })">修改</span>
                    <span class="delete" v-on:click="layerCreate('delete', { index, person })">删除</span>
                </td>
            </tr>
            <tr class="last-row">
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><span class="create" v-on:click="layerCreate('create')">添加新成员</span></td>
            </tr>
        </table>
    </main>
    <Copyright></Copyright>
    <Layer v-on:operate="layerOperate" v-bind:payload="payload"></Layer>
</div>
</template>
<script>
import Banner from '../components/header';
import Copyright from '../components/footer';
import Layer from '../components/layer';

export default {
    data () {
        return {
            persons: [],
            // 向子组件传递数据
            payload: {
                type: '', count: 0, errors: '',
            },
            // 此数据供model代码使用
            person: {}, index: 0,
        };
    },
    filters: {
        gender: function (value) {
            return value == 'm' ? '男' : '女';
        }
    },
    mounted () {
        this.bubble('selectPersons');
    },
    methods: {
        // 此函数用于向本框架传递事件
        bubble (subscription) {
            this.$store.dispatch('bubbleDelegation', { subscription, page: this});
        },
        // 弹出一个弹层
        // 第一个参数为弹层类型，modify、delete、create，errors
        // 第二个参数为传递给弹层的变量
        layerCreate (type, payload) {
            Object.assign(this.payload, payload);
            this.payload.type = type;
            this.payload.count++;
        },
        // 当子组件layer弹层发生确定或取消操作时触发，res为弹层内操作后的数据
        layerOperate (res) {
            this.index = res.payload.index;
            this.person = res.payload.person
            switch (res.type) {
                case 'modify':
                    this.bubble('updatePerson');
                    break;
                case 'create':
                    this.bubble('createPerson');
                    break;
                case 'delete':
                    this.bubble('deletePerson');
                    break;
                default:
                    break;
            }
        }
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