<template>
<section class="layer">
    <div class="title">
        <span>添加人员信息</span><div v-on:click="layerCancel" class="layer-cancel">X</div>
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
            <div class="info gender">
                <span class="info-type">性别</span>
                <div class="info-input">
                    <label>
                    <input
                        name="gender"
                        type="radio"
                        value="m"
                        v-model="person.gender"
                        v-bind:checked="person.gender == 'm' ? 'checked' : ''"/>
                        男
                    </label>
                    <label><input
                        name="gender"
                        type="radio"
                        value="f"
                        v-model="person.gender"
                        v-bind:checked="person.gender == 'f' ? 'checked' : ''"/>
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
                age: 0, email: '', name: '', gender: 'm'
            },
            error: {
                age: '&nbsp;', name: '&nbsp;', email: '&nbsp;',
            },
        };
    },
    methods: {
        // 此函数用于向本框架传递事件
        bubble (subscription) {
            this.$store.dispatch('bubbleDelegation', { subscription, page: this});
        },
        layerCancel () {
            this.$emit('operate', {
                success: false
            });
        },
        layerSubmit () {
            this.bubble('validatePerson');
            this.$nextTick(() => {
                if (this.isPass) {
                    this.$emit('operate', {
                        type: 'create',
                        success: true,
                        payload: { person: this.person, index: this.index },
                    });
                }
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