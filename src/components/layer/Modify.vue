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
                    <input class="input" v-bind:value="payload.persons[payload.index].name" />
                    <font color="red">&nbsp;</font>
                </div>
            </div>
        </li>
        <li>
            <div class="info age">
                <span class="info-type">年龄</span>
                <div class="info-input">
                    <input class="input" v-bind:value="payload.persons[payload.index].age" />
                    <font color="red">&nbsp;</font>
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
                        v-bind:checked="payload.persons[payload.index].sex == 'm' ? 'checked' : ''"/>
                        男
                    </label>
                    <label><input
                        name="sex"
                        type="radio"
                        v-bind:checked="payload.persons[payload.index].sex == 'f' ? 'checked' : ''"/>
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
                    <input class="input" v-bind:value="payload.persons[payload.index].email" />
                    <font color="red">&nbsp;</font>
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
    props: ['payload'],
    methods: {
        layerCancel () {
            this.$emit('operate', {
                isShow: false
            });
        },
        layerSubmit () {
            this.$emit('operate', {
                isShow: false
            });
        },
    }
}
</script>
<style scoped>
@import '../../assets/css/layer.css';
.email .info-type {
    font-weight: bold;
}
</style>