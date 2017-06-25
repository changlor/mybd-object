<template>
<div>
    <div v-if="isShow" class="layer-wrap">
        <div class="shadow"></div>
        <Modify v-if="isModify" v-bind:payload="payload" v-on:operate="operate"></Modify>
        <Delete v-if="isDelete" v-on:operate="operate"></Delete>
        <Create v-if="isCreate" v-on:operate="operate"></Create>
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
            isShow: false,
            isModify: false,
            isDelete: false,
            isCreate: false,
            persons: [],
            index: 0,
            payload: {},
        }
    },
    methods: {
        operate (res) {
            switch (res.type) {
                case 'modify':
                    this.cancelLayer('isModify');
                    break;
                default:
                    break;
            }
        },
        cancelLayer (type) {
            this[type] = false;
            this.isShow = false;
        },
        cancelAllLayer () {
            this.isShow = false;
            this.isModify = false;
            this.isDelete = false;
            this.isCreate = false;
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
                    this.isShow = true;
                    this.isModify = true;
                    this.payload = { persons: this.event.persons, index: this.event.index };
                    break;
                case 'delete':
                    this.cancelAllLayer();
                    this.isShow = true;
                    this.isDelete = true;
                    this.payload = { persons: this.persons, index: this.index };
                    break;
                case 'create':
                    this.cancelAllLayer();
                    this.isShow = true;
                    this.isCreate = true;
                    this.payload = { persons: this.persons, index: this.index };
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