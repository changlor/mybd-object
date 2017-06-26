<template>
<div>
    <div v-if="isShow" class="layer-wrap">
        <div class="shadow"></div>
        <Modify v-if="isModify" v-bind:payload="payload" v-on:operate="operate"></Modify>
        <Delete v-if="isDelete" v-bind:payload="payload" v-on:operate="operate"></Delete>
        <Create v-if="isCreate" v-on:operate="operate"></Create>
        <Errors v-if="isErrors" v-bind:errors="errors" v-on:operate="operate"></Errors>
    </div>
</div>
</template>
<script>
import Modify from './Modify';
import Delete from './Delete';
import Create from './Create';
import Errors from './Errors';

export default {
    data () {
        return {
            isShow: false, isModify: false, isDelete: false, isCreate: false, isErrors: false,
            index: 0, persons: [], errors: '',
        }
    },
    methods: {
        operate (res) {
            // 向父组件传递<修改|删除|新增>操作
            const { success, type, payload } = res;
            if (success) {
                this.$emit('operate', { type, payload })
            }
            // 关闭所有弹层
            this.cancelAllLayer();
        },
        cancelAllLayer () {
            this.isShow = false; 
            this.isModify = false;
            this.isDelete = false;
            this.isCreate = false;
            this.isErrors = false;
        }
    },
    props: ['payload'],
    components: { Modify, Delete, Create, Errors },
    watch: {
        'payload.count' () {
            this.cancelAllLayer();
            this.isShow = true;
            switch (this.payload.type) {
                case 'modify':
                    this.isModify = true;
                    break;
                case 'delete':
                    this.isDelete = true;
                    break;
                case 'create':
                    this.isCreate = true;
                    break;
                case 'errors':
                    this.isErrors = true;
                    this.errors = this.payload.errors;
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