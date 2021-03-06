### WebGL中的浏览器兼容问题汇总

##### 1、Q: 在利用WebGL绘图上下文时，canvas.getContext()函数接受的参数 ，在不同浏览器中会有什么不同？

S：大部分浏览器都接受字符串 “exprimental-webgl”，但并非所有浏览器都这样。而且，过一段时间，参数将变成webgl，所以我们选择讲这些细节隐藏起来 —— **摘自( WebGL编程指南 --- 50Page )**



##### 2、Q: 关于clearColor()的全局背景色问题

S: 一旦利用该函数制定了背景色之后，背景色就会驻存在WebGL系统( WebGL System )中， 在下一次调用gl.clearColor() 方法前不会改变。换句话说，如果将来什么时候你还想用同一个颜色在清空一次绘图区，没必要在指定一次背景色。



### WebGL中一些有趣的生活问题

##### 1、Q：WebGL中通用函数库大多数函数名称的来源？

S：WebGL是基于openGL ES的， 所以获取绘图上下文的时候通常用gl来声明变量保存，这样能够使WebGL中的函数名与OpenGL ES中的函数名对应起来。例如：

```javascript
const canvas  = document.getElementById('XXX');
const gl = canvas.getWebGLContext('2d');
gl.clearColor(0.0, 0.0, 0.0, 1.0);
// glclearColor()函数与OpenGL ES中的glClearCOlor()函数
```

 ##### 2、Q：如今的计算机制作出的三维场景如此逼真和令人震撼的原因是什么？

S：在三维场景中，仅仅用线条和颜色把图形画出来是远远不够的。你必须考虑，比如，光线照上去之后，或者观察者的视角发生变化，对场景会有些什么影响。着色器可以高度灵活地完成这些工作，提供各种渲染效果。

##### 3、 Q：很多WebGL的程序中编写着色器的时候会有在字符串中每行的结尾加上\n的写法是为什么呢？

S： 由于Javscript中GLSL ES是以字符串的形式编写的，所以如果着色器内部报错的话，本来应该显示的哪行数据就会变成一行数据，每行结束加上\n，对于检查源代码中的错误很有帮助。\n不是必须的，你自己编写着色器时，也可以不用它。

### WebGL中自己小想法

##### 1、Q：WebGL中顶点着色器和片元着色器的区别？

S：由于在Web程序中含有WebGL程序时候运行顺序是   浏览器——》WebGL系统（顶点着色器、片元着色器）——》颜色缓冲区，**而顶点着色器在我看来只是用于定位，片元着色器才是渲染**。<span style="color:red">（另外顶点着色器和片元着色器都是GLSL ES语言编写的）</span>



##### 2、Q：GLSL ES中书写结构行的问题

S：在编写GLSL ES中必须有一个main()函数，void表示这个函数不会有返回值



##### 3、Q：遇到额外的拓展知识，Float32Array构造函数的问题？

S：在Javscript中FLoa[16,32,64]Array都是用来确定以及保证数组中数据的精确度的，具体的跟计算机的内存有关系，（16，32，64）代表的是**位(bits)**，其中**bytes为字节**，8bits = 1bytes，所以该数组可以保持大量的数据精确度







