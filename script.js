// 计数按钮点击事件
let count = 0;
const counterElement = document.getElementById('counter');
const countButton = document.getElementById('count-btn');

countButton.addEventListener('click', () => {
    count++;
    counterElement.textContent = count;
});

// 背景变化按钮点击事件
const bgButton = document.getElementById('bg-btn');

bgButton.addEventListener('click', () => {
    const randomColor1 = getRandomColor();
    const randomColor2 = getRandomColor();
    document.body.style.background = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;
});

// 生成随机颜色的函数
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
