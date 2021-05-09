### WebGL通用函数库文档笔记

##### 1、获取WebGL上下文，<span style="color:red">由于浏览器兼容问题使用getContext()不便利</span>

![image-20210509160926039](C:\Users\cjl\AppData\Roaming\Typora\typora-user-images\image-20210509160926039.png)

##### 2、指定绘图区域的背景色<span style="color:red">(RGB颜色值越高颜色就越亮)</span>

![image-20210509161241088](C:\Users\cjl\AppData\Roaming\Typora\typora-user-images\image-20210509161241088.png)

![image-20210509161318308](C:\Users\cjl\AppData\Roaming\Typora\typora-user-images\image-20210509161318308.png)

##### 3、将指定缓冲区设定为预定的值

![image-20210509163423655](C:\Users\cjl\AppData\Roaming\Typora\typora-user-images\image-20210509163423655.png)

![image-20210509163605016](C:\Users\cjl\AppData\Roaming\Typora\typora-user-images\image-20210509163605016.png)

##### 4、在WebGL系统内部建立和初始化着色器，<span style="color:red">（专为WebGL编程指南编写的辅助程序）</span>

![image-20210509220433078](C:\Users\cjl\AppData\Roaming\Typora\typora-user-images\image-20210509220433078.png)

##### 5、执行顶点着色器（按照mode指定方式绘制图形）

![image-20210509225936335](C:\Users\cjl\AppData\Roaming\Typora\typora-user-images\image-20210509225936335.png)



##### 6、获取由name参数指定的attribute变量的存储地址

![image-20210510004812183](C:\Users\cjl\AppData\Roaming\Typora\typora-user-images\image-20210510004812183.png)

##### 7、将数据传给由location参数指定的attribute变量<span style="color:red">（支持1f-4f）</span>  f代表浮点数

![image-20210510011001399](C:\Users\cjl\AppData\Roaming\Typora\typora-user-images\image-20210510011001399.png)

![image-20210510012027307](C:\Users\cjl\AppData\Roaming\Typora\typora-user-images\image-20210510012027307.png)