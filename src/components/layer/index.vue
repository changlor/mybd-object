<template>
<div>
    <div v-if="result.isShow" class="layer">
        <div class="shadow"></div>
        <Modify v-on:operate="operate"></Modify>
    </div>
</div>
</template>
<script>
import Modify from './Modify';
import Delete from './Delete';
import Create from './Create';

export default {
    data () {
        return {
            result: {
                isShow: true,
            }
        }
    },
    methods: {
        operate (result) {
            this.result.isShow = result.isShow;
        }
    },
    mounted () {
        // console.log(this.event)
    },
    props: ['event'],
    components: {
        Modify, Delete, Create
    }
}
</script>
<style>
.layer {
    position: fixed;
    text-align: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
.shadow {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.6;
}
</style>