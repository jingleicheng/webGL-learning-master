// HelloPoint2.js

// 顶点着色器程序
const VSHEADER_SOURCE = `
    attribute vec4 a_Position;\n
    attribute float a_PointSize;\n
    void main() {\n
        gl_Position = a_Position; \n
        gl_PointSize = a_PointSize; \n
    }\n
`;

// 片元着色器程序
const FSHEADER_SOURCE = `
    void main() {\n
        gl_FragColor = vec4(0.5, 0.8, 0.0, 1.0); \n
    } \n
`;

// void 表示这个函数不会有返回值,必须包含一个main()函数
function main() {
    // 获取canvas元素
    const canvas = document.getElementById('d1');

    // 获取WebGL绘图上下文
    const gl = getWebGLContext(canvas);

    // 初始化着色器 （initShaders()是专门为本书编辑的初始化辅助程序）
    if(!initShaders(gl, VSHEADER_SOURCE, FSHEADER_SOURCE)) {
        console.log('Failed to get the rendering context for WebGL');
        return false;
    }

    // 获取attribute变量的存储位置
    const a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    const a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize');
    if(a_Position < 0) {
        console.log('Failed to get the storage location of a_Position'); // 获取关于a_Position的存储位置失败
        return false;
    }else if(a_PointSize < 0) {
        console.log('Failed to get the storage location of a_PointSize'); // 获取关于a_Position的存储位置失败
        return false;
    }


    // 将顶点位置传输给attribute变量
    gl.vertexAttrib4f(a_Position, 0.5, 0.0, 0.0, 1);
    gl.vertexAttrib1f(a_PointSize, 5.0);

    // 设置canvas的背景色
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    // 清空canvas
    gl.clear(gl.COLOR_BUFFER_BIT);

    // 绘制一个点
    gl.drawArrays(gl.POINTS, 0, 1);
}