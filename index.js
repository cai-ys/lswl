//1.es6的新特性
//.不一样的变量声明：const和let
//.模板字符串
//.箭头函数（Arrow Functions）
//.函数的参数默认值
//二进制和八进制字面量


//2.清除浮动的几种方法
//1.给父级也加浮动
//2.给父级加display:inline-block
//3.在浮动元素下加div class=clear/div .clear{ height:0px;font-size:0;clear:both;}
//4.在浮动元素下加br clear=all/


//3.css的新特性
//1.选择器 
// 2.RGBA和透明度 
// 3.多栏布局 
// 4.多背景图 
// 5.Word Wrap 
// 6.文字阴影 
// 7.@font-face属性 
// 8.圆角(边框半径) 
//9.边框图片 
//10.盒阴影 
//11.盒子大小 
// 12.媒体查询 




//4.v-router有哪几种导航钩子
// (1） 全局钩子函数：定义在全局的路由对象中，主要有：
// beforeEach：在路由切换开始时调用
// afterEach：在每次路由切换成功进入激活阶段时被调用
// (2）单独路由独享的钩子：可以再路由配置上直接定义beforeEnter 钩子




//5.js字符串操作函数有哪些
// 1.concat() //拼接字符串,不改变原字符串
// 2.charAt() //返回字符串中指定未知的字符
// 3.substr() //substr(0,1) 返回从下标为0的字符开始长度为2 的字符串
// 4.substring() //str.substring(1,4) 返回从1到4的子串
// 5.splice() //提取字符串中的一部分并返回一个新的字符串,通substring()


//6.什么是跨域？如何实现跨域访问
// 1.在浏览器同源策略限制下，向不同源（不同协议、不同域名或者不同端口）发送XHR请求，浏览器认为该请求不受信任，禁止请求，具体表现为请求后不正常响应
// 2.创建script标签，使用是src属性，使用回调函数，接收函数


//7.vue的数据双向绑定原理是什么？
// vue实现数据双向绑定主要是：采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty() 来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应监听回调。当把一个普通 Javascript 对象传给 Vue 实例来作为它的 data 选项时，Vue 将遍历它的属性，用 Object.defineProperty() 将它们转为 getter/setter。用户看不到 getter/setter，但是在内部它们让 Vue 追踪依赖，在属性被访问和修改时通知变化。
// vue的数据双向绑定 将MVVM作为数据绑定的入口，整合Observer，Compile和Watcher三者，通过Observer来监听自己的model的数据变化，通过Compile来解析编译模板指令（vue中是用来解析 {{}}），最终利用watcher搭起observer和Compile之间的通信桥梁，达到数据变化 —>视图更新；视图交互变化（input）—>数据model变更双向绑定效果。


//8.闭包的三特性
// 函数嵌套函数。
// 函数内部可以引用外部的参数和变量。
// 参数和变量不会被垃圾回收机制回收。


//9.对vue生命周期的理解
// 创建前/后： 
// beforeCreated：此时的vue实例还没有挂载元素$el，数据对象data也是undefiend； (没有$el, 没有data)
// created：vue实例的数据对象data有了，但是$el还没有 (没有$el, 已有data)
// 载入前/后： 
// beforeMount：vue的实例的$el和data都初始化了，但还是挂载在之前虚拟的DOM节点上面，data.message还未替换 
// mounted :vue实例挂载完成，data.message成功渲染。 
// 更新前/后 
// 在data发生变化的时候，会触发beforeUpdate和updated方法。 
// 销毁前/后： 
// 在destiory之后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但dom依在


//10.vue组件传值
// 三种传值方式：1.父传子、2.子传父、3.兄弟组件传值


//11.浏览器本地存储有几种，有什么区别
// cookie
// cookie会随着每次HTTP请求头信息一起发送，无形中增加了网络流量，另外，cookie能存储的数据容量有限，根据浏览器类型不同而不同，IE6大约只能存储2K。
// Flash ShareObject
// 这种方式能能解决上面提到的cookie存储的两个弊端，而且能够跨浏览器，应该说是目前最好的本地存储方案。不过，需要在页面中插入一个Flash，当浏览器没有安装Flash控件时就不能用了。所幸的是，没有安装Flash的用户极少。
// 缺点：需要安装Flash插件。
// Google Gear
// Google开发出的一种本地存储技术。
// 缺点：需要安装Gear组件。
// userData
// IE浏览器可以使用userData来存储数据，容量可达到640K，这种方案是很可靠的，不需要安装额外的插件。缺点：它仅在IE下有效。
// sessionStorage
// 使用于Firefox2+的火狐浏览器，用这种方式存储的数据仅窗口级别有效，同一个窗口（或者Tab）页面刷新或者跳转，都能获取到本地存储的数据，当新开窗口或者页面时，原来的数据就失效了。