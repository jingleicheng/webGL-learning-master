//获取canvas元素
function main() {
    // 获取canvas元素
    const canvas = document.getElementById('d1');

    // 获取WebGL绘图上下文
    const gl = getWebGLContext(canvas, true); // true显示错误在控制台上，测试以及开发的时候加上 生产环境开启影响性能
    if(!gl) {
        console.log('Failed to get the rendering context for WebGL')  // 加载WebGL内容失败
        return false;
    }

    //指定清空canvas画布的颜色    其实是RBGA设置背景色
    gl.clearColor( .5, .5, .5, 1.0 );

    // 清空 canvas (函数本意是设置为预定的值, COLOR_BUFFER_BIT指的是颜色缓存 )
    gl.clear(gl.COLOR_BUFFER_BIT);
}

/*
    1.由于在获取WebGL绘图上下文时，canvas.getContext()函数来接收的函数，
      在不同浏览器中会不同，所以我们写了一个函数getWebGLContext()来隐藏不同浏览器之间的差异
*/