<template>
<section class="layer">
    <div class="title">
        <span>修改人员信息</span><div class="layer-cancel" v-on:click="layerCancel">X</div>
    </div>
    <ul class="items">
        <li>
            <div class="info name">
                <span class="info-type">姓名</span>
                <div class="info-input">
                    <input class="input" v-bind:value="person.name" v-model="person.name" />
                    <font color="red" v-html="error.name"></font>
                </div>
            </div>
        </li>
        <li>
            <div class="info age">
                <span class="info-type">年龄</span>
                <div class="info-input">
                    <input class="input" v-bind:value="person.age" v-model="person.age" />
                    <font color="red" v-html="error.age"></font>
                </div>
            </div>
        </li>
        <li>
            <div class="info sex">
                <span class="info-type">性别</span>
                <div class="info-input">
                    <label>
                    <input
                        name="sex"
                        type="radio"
                        value="m"
                        v-bind:checked="person.sex == 'm' ? 'checked' : ''"/>
                        男
                    </label>
                    <label><input
                        name="sex"
                        type="radio"
                        v-bind:checked="person.sex == 'f' ? 'checked' : ''"/>
                        女
                    </label>
                    <div>&nbsp;</div>
                </div>
            </div>
        </li>
        <li>
            <div class="info email">
                <span class="info-type">Email</span>
                <div class="info-input">
                    <input class="input" v-bind:value="person.email" v-model="person.email" />
                    <font color="red" v-html="error.email"></font>
                </div>
            </div>
        </li>
        <li>
            <div class="operate">
                <span class="submit" v-on:click="layerSubmit">确定</span><span class="cancel" v-on:click="layerCancel">取消</span>
            </div>
        </li>
    </ul>
</section>
</template>
<script>
export default {
    data () {
        return {
            person: {
                age: 0, email: '', name: '', sex: 'm'
            },
            error: {
                age: '&nbsp;', name: '&nbsp;', email: '&nbsp;',
            },
            index: 0,
        }
    },
    props: ['payload'],
    methods: {
        layerCancel () {
            this.$emit('operate', {
                type: 'modify',
                payload: this.person,
            });
        },
        layerSubmit () {
            let isPass = true;
            this.error.email = '&nbsp;';
            if (!(this.person.email + '').match(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)) {
                isPass = false;
                this.error.email = '请提供一个正确的Email';
            }
            this.error.name = '&nbsp;';
            if ((this.person.name + '').trim() == '') {
                isPass = false;
                this.error.name = '姓名不能为空';
            }
            this.error.age = '&nbsp;';
            if (!(this.person.age > 0)) {
                isPass = false;
                console.log(1)
                this.error.age = '年龄必须是一个大于0的整数';
            }
            if (isPass) {
                this.$emit('operate', {
                    type: 'modify',
                    payload: this.person,
                });
            }
        },
    },
    mounted () {
        const { index, persons } = this.payload;
        this.index = index;
        this.person = { ...persons[index] };
    },
    watch: {

    }
}
</script>
<style scoped>
@import '../../assets/css/layer.css';
.email .info-type {
    font-weight: bold;
}
</style>