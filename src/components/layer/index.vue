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
            isShow: false, isModify: false, isDelete: false, isCreate: false,
            index: 0, persons: [],
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
            this.isModify = false; this.isDelete = false; this.isCreate = false;
        }
    },
    props: ['payload'],
    components: { Modify, Delete, Create },
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