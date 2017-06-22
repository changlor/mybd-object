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
                    <input class="input" />
                    <font color="red">姓名不能为空</font>
                </div>
            </div>
        </li>
        <li>
            <div class="info age">
                <span class="info-type">年龄</span>
                <div class="info-input">
                    <input class="input" />
                    <font color="red">年龄必须是一个大于0的整数</font>
                </div>
            </div>
        </li>
        <li>
            <div class="info sex">
                <span class="info-type">性别</span>
                <div class="info-input">
                    <label><input name="sex" type="radio" value="1" /> 男</label>
                    <label><input name="sex" type="radio" value="0" /> 女</label>
                    <div>&nbsp;</div>
                </div>
            </div>
        </li>
        <li>
            <div class="info email">
                <span class="info-type">Email</span>
                <div class="info-input">
                    <input class="input" />
                    <font color="red">请提供一个正确的Email</font>
                </div>
            </div>
        </li>
        <li>
            <div class="operate">
                <span v-on:click="layerSubmit" class="submit">确定</span>
                <span v-on:click="layerCancel" class="cancel">取消</span>
            </div>
        </li>
    </ul>
</section>
</template>
<script>
export default {
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