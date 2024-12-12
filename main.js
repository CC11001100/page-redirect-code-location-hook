// ==UserScript==
// @name         页面跳转JS代码定位通杀方案
// @namespace   https://github.com/JSREI/page-redirect-code-location-hook
// @version      0.3
// @description  阻断页面跳转，留在当前页面分析，从断点向前追溯调用栈即可定位到重定向JS代码位置
// @author       CC11001100
// @match       *://*/*
// @run-at      document-start
// @grant        none
// @license MIT
// ==/UserScript==
(() => {

    // 使用说明： https://github.com/JSREI/page-redirect-code-location-hook

    let oldOnbeforeunload = window.onbeforeunload;
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event
    window.onbeforeunload = function (event) {

        // 使用说明：
        // 在Chrome右侧的Call Stack里向前追踪调用栈，一般上一个栈帧就是跳转逻辑，秒定位
        // 详细的使用说明及案例请移步：https://github.com/JSREI/page-redirect-code-location-hook
        debugger;

        // 忽略以下代码即可
        // 注意，要先运行我们自己的onbeforeunload代码，再运行页面内的，这样可以从断点跟进去逻辑，
        // 也可以防止页面内的onbeforeunload代码有什么逻辑影响到了我们的hook脚本
        if (oldOnbeforeunload) {
            return oldOnbeforeunload.apply(this, arguments);
        } else {
            // TODO 2024-12-13 00:13:18 目前似乎没有很好的方法来抑制对话框的弹出，如果不弹出对话框的话只打断点体验就会好很多了
            event.returnValue = '';
            event.preventDefault();
            return true;
        }
    }

    // 假设后面这个字段被赋值的话，把此脚本的拦截的逻辑放到后面去执行
    Object.defineProperty(window, "onbeforeunload", {
        get: () => {
            return oldOnbeforeunload;
        },
        set: v => {
            return oldOnbeforeunload = v;
        },
    });

})();
