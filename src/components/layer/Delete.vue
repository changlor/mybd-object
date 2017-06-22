<template>
<div class="create">
    <div class="title">
        <span>确定删除人员</span><div class="cancel">X</div>
    </div>
    <ul class="items">
        <li>
            <div class="info span">
                确定要删除指定的人员信息吗
            </div>
        </li>
        <li>
            <div class="operate">
                <span class="submit">确定</span><span class="cancel">取消</span>
            </div>
        </li>
    </ul>
</div>
</template>
<style scoped>
@import '../../assets/css/layer.css';
.create {
    position: relative;
    z-index: 1;
    display: inline-block;
    width: 600px;
    top: 100px;
    padding: 20px;
    background-color: #fff;
    text-align: left;
    color: #333;
    box-shadow: 1px 2px 1px #666;
}
.create .title {
    font-size: 24px;
    margin-bottom: 25px;
    display: flex;
}
.title .cancel {
    flex: 1;
    text-align: right;
    font-size: 35px;
    color: #c2c2c2;
}
.email .info-type {
    font-weight: bold;
}
</style>