// DrawRectangle.js
//获取二维图形
function main() {
    // Retrieve the <canvas> element 检索canvas元素
    const canvas = document.getElementById('d1');
    if(!canvas) {
        console.log('Failed to retrieve the <canvas> element') // 检索canvas元素失败
        return false;
    }

    // Get the rendering context for 2DCG  获取渲染的2D画布的内容
    const ctx = canvas.getContext('2d');

    // Draw a blue rectangle 画一个蓝色的矩形
    ctx.fillStyle = 'rgba(0,0,255,1.0)';  // Set a blue color 设置一个蓝色
    ctx.fillRect(50, 10, 60, 150); // Fill a rectangle with the color  用这个颜色填充矩形
    // fillRect( 左上角顶点位于canvas的坐标, 左上角顶点位于canvas的坐标, width, height )
                // (x , y , width , height)  x向左为正    y向下为正   默认以像素为单位
    
}

// 当获取canvas元素失败的时候会返回null