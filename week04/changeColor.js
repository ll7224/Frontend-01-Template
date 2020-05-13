// 实现一个红绿灯，把一个圆形 div 按照绿色 3 秒，黄色 1 秒，红色 2 秒循环改变背景色

//针对于Promise，async await 宏任务 微任务的执行理解

function sleep(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration)
    })
}

async function changeColor(duration, color) {
    console.log(color) //类似改变背景颜色
    await sleep(duration)
}

async function main() {
    while (true) {
        await changeColor(3000, "green")
        await changeColor(1000, 'yellow')
        await changeColor(2000, 'red')
    }
}

main()