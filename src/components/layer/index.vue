<template>
<div>
    <div v-if="result.isShow" class="layer">
        <div class="shadow"></div>
        <Modify v-if="result.isModify" v-on:operate="operate"></Modify>
        <Delete v-if="result.isDelete" v-on:operate="operate"></Delete>
        <Create v-if="result.isCreate" v-on:operate="operate"></Create>
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
                isShow: false,
                isModify: false,
                isDelete: false,
                isCreate: false,
            }
        }
    },
    methods: {
        operate (result) {
            this.result.isShow = result.isShow;
        },
    },
    mounted () {
        // console.log(this.event)
    },
    props: ['event'],
    components: {
        Modify, Delete, Create
    },
    watch: {
        'event.count' () {
            switch (this.event.type) {
                case 'modify':
                    this.result.isShow = true;
                    this.result.isModify = true;
                    break;
                case 'delete':
                    this.result.isShow = true;
                    this.result.isDelete = true;
                case 'create':
                    this.result.isShow = true;
                    this.result.isCreate = true;
                default:
                    break;
            }
        }
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