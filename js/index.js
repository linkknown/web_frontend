window.onload = function () {
    // 练习查找节点
    // document 对象是 window.document 的简写，可以不用创建和赋值就直接使用
    // document.getElementById 这个方法可以根据 id 值获取页面元素
    var clickMeNode = document.getElementById("clickMe");
    // 给页面元素添加点击事件
    clickMeNode.onclick = onClickMe;

    // 练习 json
    var testCreateJsonNode = document.getElementById("testCreateJson");

    // testCreateJsonNode.onclick = function () {}
    // testCreateJsonNode.ondblclick = function () {}
    // testCreateJsonNode.onmouseenter = function () {}
    // testCreateJsonNode.addEventListener('click', function () {});
    // testCreateJsonNode.addEventListener('dblclick', function () {});
    // testCreateJsonNode.addEventListener('mouseenter', function () {});

    testCreateJsonNode.addEventListener('click', function () {
        // var、let、const 都可以定义声明变量活常量
        // const 声明常量
        // var、let 声明变量

        // 在 js 里面，单引号和双引号都能用来表示一个字符串
        var userName = "admin";
        var password = '123456';

        // let 比 var 更安全，仅用于块作用域

        // 使用 {} 创建一个对象
        let jsonObject = {"userName":userName, "password":password};
        alert(jsonObject);
        alert(typeof jsonObject);

        // 以字符串的形式表示 json
        let jsonString = JSON.stringify(jsonObject);
        alert(jsonString);
        alert(typeof jsonString);

        // 将字符串再转换成 json
        jsonObject = JSON.parse(jsonString);
        alert(jsonObject);
        alert(typeof jsonObject);

        // 简写, 和 {"userName":userName, "password":password}; 一样
        jsonObject = {userName, password};
        alert(jsonObject);
        alert(typeof jsonObject);
        alert(JSON.stringify(jsonObject));
    });

    // 测试倒计时和定时任务功能
    var testSetTimeoutNode = document.querySelector(".testSetTimeout");
    var testSetIntervalNode = document.querySelector(".testSetInterval");
    var testClearTimeoutNode = document.querySelector(".testClearTimeout");
    var testClearIntervalNode = document.querySelector(".testClearInterval");
    var showTimeNode = document.querySelector(".showTime");

    var timeoutHandler;
    var intervalHandler;

    testSetTimeoutNode.onclick = function () {
        // window.setTimeout() === setTimeout()
        timeoutHandler = setTimeout(function () {
            showTimeNode.innerHTML = "setTimeout =>" + formatDate("yyyy-MM-dd hh:mm:ss", new Date());
        }, 1000);
    }
    testSetIntervalNode.onclick = function () {
        intervalHandler = setInterval(function () {
            showTimeNode.innerHTML = "setInterval => " + formatDate("yyyy-MM-dd hh:mm:ss", new Date());
        }, 1000);
    }
    testClearTimeoutNode.onclick = function () {
        clearTimeout(timeoutHandler);
    }
    testClearIntervalNode.onclick = function () {
        clearInterval(intervalHandler);
    }



    var testSessionStorageNodes = document.querySelectorAll(".testSessionStorage");
    testSessionStorageNodes[0].onclick = function (event) {
        let userName = document.getElementsByName("userName1")[0].value;
        let password = document.getElementsByName("password1")[0].value;
        let jsonObject = {userName, password};
        let jsonStr = JSON.stringify(jsonObject);
        sessionStorage.setItem("jsonStr", jsonStr);

        // event.preventDefault() 方法阻止元素发生默认的行为,此处为当点击提交按钮时阻止对表单的提交
        event.preventDefault();
    }
    testSessionStorageNodes[1].onclick = function (event) {
        let jsonStr = sessionStorage.getItem("jsonStr");
        alert(jsonStr);

        event.preventDefault();
    }
    testSessionStorageNodes[2].onclick = function (event) {
        let jsonStr = sessionStorage.getItem("jsonStr");
        alert(JSON.parse(jsonStr));

        event.preventDefault();
    }

    var testLocalStorageNodes = document.querySelectorAll(".testLocalStorage");
    testLocalStorageNodes[0].onclick = function (event) {
        let userName = document.getElementsByName("userName1")[0].value;
        let password = document.getElementsByName("password1")[0].value;
        let jsonObject = {userName, password};
        let jsonStr = JSON.stringify(jsonObject);
        localStorage.setItem("jsonStr", jsonStr);

        event.preventDefault();
    }
    testLocalStorageNodes[1].onclick = function (event) {
        let jsonStr = localStorage.getItem("jsonStr");
        alert(jsonStr);

        event.preventDefault();
    }
    testLocalStorageNodes[2].onclick = function (event) {
        let jsonStr = localStorage.getItem("jsonStr");
        alert(JSON.parse(jsonStr));

        event.preventDefault();
    }

    // 练习事件冒泡
    var box01Node = document.getElementById("box01");
    var box02Node = document.getElementById("box02");
    var box03Node = document.getElementById("box03");
    // 方式二
    box01Node.onclick = function () {
        clickBox("box01");
    };
    // 方式三
    box02Node.onclick = () => clickBox("box02");
    // 方式四
    box03Node.addEventListener("click", function () {
        clickBox("box03");
    });

    // 禁止事件冒泡方式
    var box04Node = document.getElementById("box04");
    var box05Node = document.getElementById("box05");
    var box06Node = document.getElementById("box06");

    box04Node.onclick = (event) => clickBoxWithStop(event, "box04");
    box05Node.onclick = (event) => clickBoxWithStop(event, "box05");
    box06Node.onclick = (event) => clickBoxWithStop(event, "box06");

    // 练习事件类型
    // scroll 事件测试
    var showDocumentScrollNode = document.getElementById("showDocumentScroll");
    document.addEventListener("scroll", function (event) {
        showDocumentScrollNode.innerText = "页面正在滚动中: " + window.pageYOffset;
    });
}

function onClickMe () {
    alert("helloworld...");
}


function goPage (pageName) {
    if (pageName === "A"){
        window.location.href = "./indexA.html"
    } else if (pageName === 'B') {
        window.location.href = "./indexB.html"
    } else if (pageName === 'back'){
        window.history.back();
    } else if (pageName === '-go'){
        // 前进后退多页 delta > 1
        // history.go(-1);   //页面后退一页
        // history.go(1);    //页面前进一页
        window.history.go(-1);
    }
}

// 了解部分属性即可
function showScreenInfo () {
    var node = document.getElementsByClassName("screenInfoBox")[0];
    node.innerHTML = "当前时间：" + new Date().getTime()
        +"<br />"+
        "屏幕分辨率为："+screen.width+"*"+screen.height
        +"<br />"+
        "屏幕可用大小："+screen.availWidth+"*"+screen.availHeight
        +"<br />"+
        "网页可见区域宽："+document.body.clientWidth
        +"<br />"+
        "网页可见区域高："+document.body.clientHeight
        +"<br />"+
        "网页可见区域宽(包括边线的宽)："+document.body.offsetWidth
        +"<br />"+
        "网页可见区域高(包括边线的宽)："+document.body.offsetHeight
        +"<br />"+
        "网页正文全文宽："+document.body.scrollWidth
        +"<br />"+
        "网页正文全文高："+document.body.scrollHeight
        +"<br />"+
        "网页被卷去的高："+document.body.scrollTop
        +"<br />"+
        "网页被卷去的左："+document.body.scrollLeft
        +"<br />"+
        "网页正文部分上："+window.screenTop
        +"<br />"+
        "网页正文部分左："+window.screenLeft
        +"<br />"+
        "屏幕分辨率的高："+window.screen.height
        +"<br />"+
        "屏幕分辨率的宽："+window.screen.width
        +"<br />"+
        "屏幕可用工作区高度："+window.screen.availHeight
        +"<br />"+
        "屏幕可用工作区宽度："+window.screen.availWidth;
}

// 测试
// document.getElementByld()                返回一个节点
// document.getElementsByTagName()          返回 N 个节点
// document.getElementByClassName()         返回 N 个节点
function testGetElementByld01 () {
    // js 中 var 是用于申明变量的
    var loginBoxNode = document.getElementById("loginBox");
    alert(loginBoxNode.innerHTML);
}

function testGetElementByTagName01 () {
    // 返回的是多个
    var inputNodes = document.getElementsByTagName("input");
    for (var i=0; i< inputNodes.length; i++){
        var inputNode = inputNodes[i];
        alert(inputNode.outerHTML);
    }
}

function testGetElementByClassName01 () {
    var labelNode = document.getElementsByClassName("label01")[0];
    alert(labelNode.outerHTML);
}

function testHasChildNodes01 () {
    var loginBoxNode = document.getElementById("loginBox");
    alert("是否有子节点" + loginBoxNode.hasChildNodes());
    alert(loginBoxNode.childNodes.length);
    var _childNodes = loginBoxNode.childNodes;
    for (var i=0; i<_childNodes.length; i++){
        var _childNode = _childNodes[i];
        console.log(_childNode.nodeName + " ~ " + _childNode.nodeType);
    }
}

function testGetAttribute01() {
    var loginBoxNode = document.getElementById("loginBox");
    var styleNode = loginBoxNode.getAttribute("style");
    alert(styleNode);
}

function testSetAttribute01 () {
    var loginBoxNode = document.getElementById("loginBox");

    if (!loginBoxNode.hidden) {
        loginBoxNode.setAttribute('hidden', true);
    } else {
        loginBoxNode.removeAttribute('hidden');
    }
}

function testAppendChild01 () {
    var ulNode = document.getElementById("ulNode");
    var liNode = document.createElement("li");
    // innerText
    liNode.innerText = "我是元素第" + (ulNode.getElementsByTagName("li").length + 1) + "项";
    ulNode.appendChild(liNode);
}

function testAppendChild02 () {
    var ulNode = document.getElementById("ulNode");
    var liNode = document.createElement("li");
    // createTextNode
    var textNode = document.createTextNode("我是元素第" + (ulNode.getElementsByTagName("li").length + 1) + "项");
    liNode.appendChild(textNode);
    ulNode.appendChild(liNode);
}

function testReplaceChild01 () {
    var ulNode = document.getElementById("ulNode");
    var liNodes = ulNode.getElementsByTagName("li");

    var newLiNode = document.createElement("li");
    newLiNode.innerText = "我是列表元素最后一项";

    ulNode.replaceChild(newLiNode, liNodes[liNodes.length - 1]);
}

function testInsertBefore01 (){
    var ulNode = document.getElementById("ulNode");
    var liNodes = ulNode.getElementsByTagName("li");

    var lastNode = liNodes[liNodes.length - 1];

    var newLiNode = document.createElement("li");
    newLiNode.innerText = "我是插入的节点" + new Date().getTime();

    ulNode.insertBefore(newLiNode, lastNode);
}

// DOM 没有提供 insertAfter() 方法
function testInsertAfter01 (){
    var ulNode = document.getElementById("ulNode");
    var liNodes = ulNode.getElementsByTagName("li");

    // var targetIndex = 0;
    var targetIndex = liNodes.length - 1;

    var newLiNode = document.createElement("li");
    newLiNode.innerText = "我是插入的节点" + new Date().getTime();

    // 可由以下逻辑实现
    // if (targetIndex === liNodes.length - 1) {
    //     ulNode.appendChild(liNode);
    // } else {
    //     ulNode.insertBefore(liNode, liNodes[targetIndex + 1]);
    // }
    insertAfter(targetIndex, ulNode, liNodes, newLiNode);
}


function insertAfter (targetIndex, ulNode, liNodes, newLiNode) {
    if (targetIndex === liNodes.length - 1) {
        ulNode.appendChild(newLiNode);
    } else {
        ulNode.insertBefore(newLiNode, liNodes[targetIndex + 1]);
    }
}

function testRemoveChild01 () {
    var ulNode = document.getElementById("ulNode");
    var liNodes = ulNode.getElementsByTagName("li");

    ulNode.removeChild(liNodes[liNodes.length - 1]);
}


function clickBoxWithStop (event, info) {
    alert("点击了" + info);
    // 停止事件冒泡
    event.stopPropagation();
}

function clickBox (info) {
    alert("点击了" + info);
}

function testOnFocus () {
    let testOnFocusAndBlurNode = document.getElementsByName("testOnFocusAndBlur")[0];
    testOnFocusAndBlurNode.value = "获取光标了...";
}
function testOnBlur () {
    let testOnFocusAndBlurNode = document.getElementsByName("testOnFocusAndBlur")[0];
    testOnFocusAndBlurNode.value = "失去光标了...";
}


// mouse 事件
function testMouseEvent (info) {
    var testMouseEventNode = document.getElementById("testMouseEvent");
    testMouseEventNode.innerText = info;
}

function showUpperText (event) {
    var showUpperTextNodes = document.getElementsByClassName("showUpperText");
    showUpperTextNodes[1].innerHTML = showUpperTextNodes[0].value.toUpperCase() + "~~~~~" + event.keyCode;
    if (event.keyCode === 13 || event.keyCode === 32) {
        alert("点击了回车按键~");
    }
}


// dom api 综合练习
function submitUserSalaryForm () {
    var addFlag = true;     // 新增标识

    var userIdNode = document.getElementsByName("userId");
    var userNameNode = document.getElementsByName("userName2");
    var passwordNode = document.getElementsByName("password2");
    var salaryNode = document.getElementsByName("salary");

    if (userIdNode[0].value === "") {
        userIdNode[0].value = new Date().getTime();
        addFlag = true;
    } else {
        addFlag = false;
    }

    if (userNameNode[0].value === "" || passwordNode[0].value === "" || salaryNode[0].value === "") {
        return;
    }

    var tdNode0 = document.createElement("td");
    tdNode0.innerText = userIdNode[0].value;
    var tdNode1 = document.createElement("td");
    tdNode1.innerText = userNameNode[0].value;
    var tdNode2 = document.createElement("td");
    // input Node 获取表单值用 value 属性直接获取
    tdNode2.innerText = passwordNode[0].value;
    var tdNode3 = document.createElement("td");
    tdNode3.innerText = salaryNode[0].value;
    var tdNode4 = document.createElement("td");
    tdNode4.innerHTML = "<span style='color: blue;cursor: pointer;' onclick='deleteUserSlary(" + userIdNode[0].value + ")'>删除</span>&nbsp;&nbsp;&nbsp;"
        + "<span style='color: green;cursor: pointer;' onclick='modifyUserSlary(" + userIdNode[0].value + ")'>修改</span>";

    var rowNode = document.createElement("tr");
    rowNode.setAttribute("class", "trClass");
    rowNode.appendChild(tdNode0);
    rowNode.appendChild(tdNode1);
    rowNode.appendChild(tdNode2);
    rowNode.appendChild(tdNode3);
    rowNode.appendChild(tdNode4);

    var tbodyNode = document.getElementsByTagName("tbody")[0];
    if (addFlag) {
        tbodyNode.appendChild(rowNode);
    } else {
        var oldRowNode = getTrNode(userIdNode[0].value);
        tbodyNode.replaceChild(rowNode, oldRowNode);
    }


    // 重置表单
    userIdNode[0].value = "";
    userNameNode[0].value = "";
    passwordNode[0].value = "";
    salaryNode[0].value = "";
}

function getTrNode (userId) {
    var rowNode = null;
    var trNodes = document.getElementsByClassName("trClass");
    for (var i=0; i<trNodes.length; i++) {
        var trNode = trNodes[i];
        if (trNode.getElementsByTagName("td")[0].innerText + "" === userId + ""){
            rowNode = trNode;
            break;
        }
    }
    return rowNode;
}

function deleteUserSlary (userId) {
    var trNodes = document.getElementsByClassName("trClass");
    for (var i=0; i<trNodes.length; i++) {
        var trNode = trNodes[i];
        // 建议使用 ===
        // alert(trNode.getElementsByTagName("td")[0].innerText + "" === userId + "");
        if (trNode.getElementsByTagName("td")[0].innerText == userId){
            trNode.remove();
            return;
        }
    }
}

function modifyUserSlary (userId) {
    var trNodes = document.getElementsByClassName("trClass");
    for (var i=0; i<trNodes.length; i++) {
        var trNode = trNodes[i];
        if (trNode.getElementsByTagName("td")[0].innerText + "" === userId + ""){
            var userIdNode = document.getElementsByName("userId");
            var userNameNode = document.getElementsByName("userName2");
            var passwordNode = document.getElementsByName("password2");
            var salaryNode = document.getElementsByName("salary");

            userIdNode[0].value = trNode.getElementsByTagName("td")[0].innerText;
            userNameNode[0].value = trNode.getElementsByTagName("td")[1].innerText;
            passwordNode[0].value = trNode.getElementsByTagName("td")[2].innerText;
            salaryNode[0].value = trNode.getElementsByTagName("td")[3].innerText;
            return;
        }
    }
}