<template>
<div>
    <div v-if="result.isShow" class="layer-wrap">
        <div class="shadow"></div>
        <Modify v-if="result.isModify" v-bind:payload="payload" v-on:operate="operate"></Modify>
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
            },
            payload: {},
        }
    },
    methods: {
        operate (result) {
            this.result.isShow = false;
        },
        cancelAllLayer () {
            this.result.isShow = false;
            this.result.isModify = false;
            this.result.isDelete = false;
            this.result.isCreate = false;
        }
    },
    props: ['event'],
    components: {
        Modify, Delete, Create
    },
    watch: {
        'event.count' () {
            switch (this.event.type) {
                case 'modify':
                    this.cancelAllLayer();
                    this.result.isShow = true;
                    this.result.isModify = true;
                    this.payload = { persons: this.event.persons, index: this.event.index };
                    console.log(this.payload)
                    break;
                case 'delete':
                    this.cancelAllLayer();
                    this.result.isShow = true;
                    this.result.isDelete = true;
                    this.payload = { persons: this.result.persons, index: this.result.index };
                    break;
                case 'create':
                    this.cancelAllLayer();
                    this.result.isShow = true;
                    this.result.isCreate = true;
                    this.payload = { persons: this.result.persons, index: this.result.index };
                    break;
                default:
                    break;
            }
        }
    }
}
</script>
<style>
.layer-wrap {
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