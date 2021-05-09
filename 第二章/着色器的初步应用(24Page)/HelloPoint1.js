// HelloPoint1.js
// 顶点着色器程序
/*
const VSHADER_SOURCE = `
    void main() {\n
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0); \n    设置坐标
        gl_PointSize = 10.0; \n                       设置尺寸
    }\n
`;
*/
const VSHEADER_SOURCE = `
    void main() {\n
        gl_Position = vec4(0.5, 0.1, 0.0, 1.0); \n
        gl_PointSize = 10.0; \n
    }\n
`;

// 片元着色器程序
/*
const FSHEADER_SOURCE = `
    void main() {\n
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); \n   设置颜色
    } \n
`;
*/
const FSHEADER_SOURCE = `
    void main() {\n
        gl_FragColor = vec4(0.5, 0.8, 0.0, 1.0); \n
    } \n
`;
function main() {
    // 获取canvas元素
    const canvas = document.getElementById('d1');

    // 获取WebGL绘图上下文
    const gl = getWebGLContext(canvas);
    if(!initShaders(gl, VSHEADER_SOURCE, FSHEADER_SOURCE)) {
        console.log('Failed to get the rendering context for WebGL');
        return false;
    }

    // 设置canvas的背景色
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    // 清空canvas
    gl.clear(gl.COLOR_BUFFER_BIT);

    // 绘制一个点
    gl.drawArrays(gl.POINTS, 0, 1);
}