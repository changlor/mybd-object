<template>
<div class="layer">
    <div class="shadow"></div>
    <div class="create">
        <div class="title">添加人员信息</div>
        <div class="option name">
            <span>姓名</span><input class="input" />
            <font color="red">姓名不能为空</font>
        </div>
        <div class="option age">
            <span>年龄</span><input class="input" />
            <font color="red">年龄必须是一个大于0的整数</font>
        </div>
        <div class="option sex">
            <span>性别</span>
            <label><input name="sex" type="radio" value="1" /> 男</label>
            <label><input name="sex" type="radio" value="0" /> 女</label>
        </div>
        <div class="option email">
            <span>Email</span><input class="input" />
            <font color="red">请提供一个正确的Email</font>
        </div>
        <div class="operate">
            <span class="submit">确定</span><span class="cancel">取消</span>
        </div>
    </div>
</div>
</template>
<style>
.layer {
    position: fixed;
    text-align: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    text-align: center;
}
.layer .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.6;
    z-index: 0;
}
.layer .create {
    position: relative;
    display: inline-block;
    width: 600px;
    height: 400px;
    top: 100px;
    background-color: #fff;
    z-index: 1;
}
.layer .create {
    text-align: left;
    color: #333333;
}
.layer .create div {
    padding: 10px;
    font-size: 18px;
    table-layout: fixed;
    box-sizing: border-box;
}
.layer .option span {
    display: inline-block;
    width: 100px   
}
.layer .create .input {
    outline: none;
    font-size: 18px;
    color: #333;
    width: 440px;    
}
.layer .create .title {
    font-size: 24px;
}
.layer .create .email {
    font-weight: bold;
}
.layer .create .operate {
    text-align: right;
    padding-right: 27px;
}
.operate .submit {
    padding: 5px;
    display: inline-block;
    background-color: #caf1ff;
    margin: 0 3px;
    color: #757575;
}
.operate .cancel {
    padding: 5px;
    display: inline-block;
    background-color: #f5f5f5;
    margin: 0 3px;
    color: #a3a3a3;
}
</style>