# rain

> A Vue.js project created by Changle

## 这是一道送命题
- 使用了我自己编写的一个build in vue框架，github地址[https://github.com/changlor/rain](url)
- 使用了vue全家桶，由vue-cli构建

## 运行
```
npm run dev
```

## 内容
- 主页为/home，位于/src/views/home.vue
- 组件位于/src/components
1.其中header位于/src/components/header
2.footer位于/src/components/footer
3.弹层位于/src/components/layer，index包含四个子弹层，create，modify，delete，errors
4.弹层之间交互，父->子为v-bind:payload，子->父为v-on:operate

## 服务器通信
- 使用我框架的Xhr.fetch通信，源码位于/src/vendor/lib/src/communication/Xhr.js
- 使用我框架的观察者模式进行curd通信，逻辑代码位于/src/model/User.js，订阅事件位于/src/config/model.js
- 发出事件位于/src/views/Home.vue
