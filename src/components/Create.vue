<template>
<div class="layer">
    <div class="shadow"></div>
    <div class="create">
        <div class="title">添加人员信息</div>
        <ul class="items">
            <li>
                <div class="info name">
                    <span class="info-type">姓名</span>
                    <div class="info-input">
                        <input class="input" />
                        <font color="red">姓名不能为空</font>
                    </div>
                </div>
            </li>
            <li>
                <div class="info age">
                    <span class="info-type">年龄</span>
                    <div class="info-input">
                        <input class="input" />
                        <font color="red">年龄必须是一个大于0的整数</font>
                    </div>
                </div>
            </li>
            <li>
                <div class="info sex">
                    <span class="info-type">性别</span>
                    <div class="info-input">
                        <label><input name="sex" type="radio" value="1" /> 男</label>
                        <label><input name="sex" type="radio" value="0" /> 女</label>
                    </div>
                </div>
            </li>
            <li>
                <div class="info email">
                    <span class="info-type">Email</span>
                    <div class="info-input">
                        <input class="input" />
                        <font color="red">请提供一个正确的Email</font>
                    </div>
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
}
.items {
    padding: 0;
    margin: 0;
}
.items li {
    list-style: none;
    padding: 10px;
    font-size: 18px;
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
}
.email .info-type {
    font-weight: bold;
}
.operate {
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