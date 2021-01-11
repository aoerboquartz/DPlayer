var advList = [
    "<script src='https://mx.smart-start.com.cn/c/2D9986C9-4DB9-4090-864D-E7AFB757AB03.panda'></script>",
    "<script src='https://mx.smart-start.com.cn/c/2D9986C9-4DB9-4090-864D-E7AFB757AB03.panda'></script>"
];
var max = advList.length - 1;
var min = 0;
var num = parseInt(Math.random() * (max - min + 1) + min);
document.write(advList[num]);
