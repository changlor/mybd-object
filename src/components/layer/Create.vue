<template>
<div class="create">
    <div class="title">
        <span>添加人员信息</span><div class="cancel">X</div>
    </div>
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
                    <div>&nbsp;</div>
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