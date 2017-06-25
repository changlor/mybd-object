<template>
<section class="layer">
    <div class="title">
        <span>确定删除人员</span><div v-on:click="layerCancel" class="layer-cancel">X</div>
    </div>
    <ul class="items">
        <li>
            <div class="info span">
                确定要删除指定的人员信息吗
            </div>
        </li>
        <li>
            <div class="operate">
                <span v-on:click="layerSubmit" class="submit">确定</span><span v-on:click="layerCancel"  class="cancel">取消</span>
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
                type: 'delete',
                success: true,
                payload: { person: this.person, index: this.index },
            });
        }
    }
}
</script>
<style scoped>
@import '../../assets/css/layer.css';
</style>