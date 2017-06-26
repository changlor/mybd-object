<template>
<section class="layer">
    <div class="title">
        <span>Oops</span><div v-on:click="layerCancel" class="layer-cancel">X</div>
    </div>
    <ul class="items">
        <li>
            <div class="info span">
                {{ errors }}
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
    props: ['errors'],
    methods: {
        layerCancel () {
            this.$emit('operate', {
                success: false,
            });
        },
        layerSubmit () {
            this.$emit('operate', {
                success: false,
            });
        }
    },
    mounted () {
        this.errors;
    },
}
</script>
<style scoped>
@import '../../assets/css/layer.css';
</style>