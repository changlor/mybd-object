<template>
<div class="layer">
    <div class="shadow"></div>
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
</div>
</template>
<style scoped>
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
.items {
    padding: 0;
    margin: 0;
}
.items li {
    list-style: none;
    padding: 4px;
    font-size: 18px;
}
.items li:last-child {
    margin-top: 10px;
}
.info-type {
    display: inline-block;
    width: 100px   
}
.info-input {
    width: 100%;
}
.info {
    display: flex;
}
.info .input {
    outline: none;
    font-size: 18px;
    color: #333;
    width: 100%;
    box-sizing:border-box
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
.operate {
    text-align: right;
}
.operate span {
    padding: 5px 10px;
    display: inline-block;
    margin: 0 3px;
    border-radius: 2px;
}
.operate .submit {
    background-color: #caf1ff;
    color: #757575;
}
.operate .cancel {
    background-color: #f5f5f5;
    color: #a3a3a3;
}
font {
    font-size: 14px;
    color: #ed7c7c;
}
</style>