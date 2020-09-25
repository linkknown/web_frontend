// window.onload 等价于 $(document).ready
// window.onload = function () {}
$(document).ready(function () {
    // 测试 $(document).ready(function () {}) 的效果
    // alert(document.getElementsByTagName("body")[0].innerHTML);

    // js 对象
    var jsAndJqueryBtn1 = document.getElementsByClassName("jsAndJquery_btn1")[0];
    jsAndJqueryBtn1.onclick = function () {
        alert(document.getElementsByClassName("jsAndJquery")[0].innerHTML);
    }

    // jQuery 对象
    $(".jsAndJquery_btn2").click(function () {
        alert($(".jsAndJquery").html());
    });


    // 部分使用 js, 部分使用 jQuery：js 对象和 jQuery 对象如何互转
    // 互转规则
    // $(dom) ==> jquery 对象
    // $(dom)[0]    ==> dom 对象

    // jquery 对象和 dom 对象互转
    // dom => jquery
    var dom2jqNode = document.getElementsByClassName("dom2jq");
    $(dom2jqNode).click(function () {
        alert($(".jsAndJquery").html());
    });

    // jquery => dom
    var jq2domNode = $(".jq2dom")[0];
    // var jq2domNode = $(".jq2dom").get(0);
    jq2domNode.onclick = function (){
        alert($(".jsAndJquery").html());
    }


    // 练习基本选择器
    $("#idDiv").click(function () {
        alert(this);            // this 是当前选择器对应的 dom 对象
        alert($(this).html());
    });
    $(".classDiv").click(function () {
        alert($(this).html());
    });
    $("p").click(function () {
        alert($(this).html());
    });
    $("h1,h2,h3").click(function () {
        alert($(this).html());
    });

    // 练习层级选择器
    // jQuery 对象很多方法是可以连缀的，每个方法会返回jQuery对象本身
    // 父子层级选择器
    $(".ulDiv > li").css('color', 'red');
    // 祖先子孙元素层级选择器
    $(".ulDiv span").css('color', 'green').css('font-weight', 'bold').css('font-style', 'italic');

    // 基本过滤选择器
    $("dl:first > dt").css('color', 'red');
    $("dl:first > dd:last").css('color', 'red');
    $("dl:eq(1) > dt").css('color', 'blue');
    $("dl:eq(1) > dd:even").css('color', 'green');
    $("dl:eq(1) > dd:not(:even)").css('color', 'pink');
    $("dl:eq(2) > dd:gt(1)").css('color', 'pink');

    // 内容过滤选择器
    $("dl:eq(3) dd:contains('第一项')").css('color', 'pink');
    $("dl:eq(3) dd:empty").html('我之前是空元素');
    // 匹配含有选择器所匹配的元素的元素(还有子元素 label 的所有 dd 标签)
    $("dl:eq(3) dd:has(label)").css('color', 'blue');
    // 匹配含有子元素的父级元素
    $("dl:eq(3) span:parent").css('color', 'green');

    // 可见性选择器
    // 某个单击事件里使用$(this).hide(); 元素不会隐藏
    // 然后给hide() 加上个参数 速度, hide(1) 就可以隐藏了, 这是为什么?
    // w3school里有一句话 "如果元素已经是完全可见，则该效果不产生任何变化，除非规定了 callback 函数。"
    $(".visibleDiv:visible").hide(1);
    $(".visibleDiv:hidden").show();

    // 属性过滤选择器
    $("dl:eq(4) dd[class]").css('font-size', '30px');
    $("dl:eq(4) dd[class='content01']").css('color', 'pink');
    $("dl:eq(4) dd[class!='content01']").css('color', 'blue');

    $("dl:eq(5) dd[class^='content']").css('font-size', '30px');
    $("dl:eq(5) dd[class$='01']").css('color', 'pink');

    // 测试查找 find、parent
    $(".queryDiv").find(".findTest").click(function () {
        alert($(".queryDiv").find(".div01").find(".div03").html());
    });
    $(".queryDiv").find(".parentTest").click(function () {
        alert($(".queryDiv").find(".div01").find(".div03").parent().parent().html());
    });

    // 表单选择器
    $(":input").css('width', '500px');
    $(":text").css('height', '50px');

     // 建议直接使用 elem.checked
     // elem.checked	                    true (Boolean) Will change with checkbox state
     // $(elem).prop("checked")	            true (Boolean) Will change with checkbox state
     // elem.getAttribute("checked")	    "checked" (String) Initial state of the checkbox; does not change
     // $(elem).attr("checked")(1.6)	    "checked" (String) Initial state of the checkbox; does not change
     // $(elem).attr("checked")(1.6.1+)	    "checked" (String) Will change with checkbox state
     // $(elem).attr("checked")(pre-1.6)	true (Boolean) Changed with checkbox state
    // 全选
    $(".selectAllDiv").find(".selectAll").click(function () {
        // prop()是 jQuery 1.6 开始新增了一个方法,官方建议具有 true 和 false 两个属性的属性,
        // 如 checked,selected 或者 disabled 使用prop(),其他的使用 attr()
        $(".selectAllDiv").find("input:gt(0)").prop('checked', this.checked);
    });
    $(".selectAllDiv").find("input:gt(0)").click(function () {
        var checkedAllFlag =  $(".selectAllDiv").find("input:gt(0)").length ===  $(".selectAllDiv").find("input:gt(0):checked").length;
        $(".selectAllDiv").find(".selectAll").prop('checked', checkedAllFlag);
    });

    // each 遍历
    $(".eachUl > li").each(function (index, liNode) {
        $(liNode).html("我是列表第 " + index + " 项元素");
    });


    // 数据缓存
    $(".dataCache:eq(0) > button:eq(0)").click(function (){
        $("body").data('bodyDataCache', $("body").html());
    });
    $(".dataCache:eq(0) > button:eq(1)").click(function (){
        alert($("body").data('bodyDataCache'));
    });
    $(".dataCache:eq(0) > button:eq(2)").click(function (){
        $("body").removeData('bodyDataCache')
    });

    $(".dataCache:eq(1) > li").each(function (index, liNode) {
        $(liNode).data("liDataCache", "我是列表元素第 " + index + " 项");
        $(liNode).click(function () {
            alert($(this).data("liDataCache"));
        });
    });

    // event 对象测试
    $(".eventDiv").click(function (event) {
        alert(event);
        alert(JSON.stringify(event));
    });

    // 数组测试
    $(".arrayDiv").click(function () {
        $.each(['a', 'b', 'c', 'd'], function (index, item) {
            alert(item.toUpperCase());
        });
    });

    // trim 测试
    $(".trimDiv").click(function () {
        $(".trimDiv span:eq(1)").html($.trim($(".trimDiv span:eq(1)").html()));
    });

    // attr 方法测试
    $(".attrDiv").click(function () {
        alert($(this).attr('style'));
        $(this).attr('style', 'background-color:green;width:1000px;')
    });

    // 测试 addClass、removeClass、toggleClass
    $(".showClassDiv:eq(1)").click(function () {
        $(".showClassDiv:eq(0)").addClass("bgRed");
    });
    $(".showClassDiv:eq(2)").click(function () {
        $(".showClassDiv:eq(0)").removeClass("bgRed");
    });
    $(".showClassDiv:eq(3)").click(function () {
        // 如果存在（不存在）就删除（添加）一个类。
        $(".showClassDiv:eq(0)").toggleClass("bgRed");
    });

    // html、text 文本值设置和获取
    $(".htmlTextDiv:eq(0)").click(function () {
        alert($(this).text());
        alert($(this).html());

        $(this).text("替换后的内容" + new Date().getTime());
    });
    $(".htmlTextDiv:eq(1)").click(function () {
        alert($(this).text());
        alert($(this).html());

        $(this).html("<span>替换后的内容</span>" + new Date().getTime());
    });


    // 测试 on、off、trigger 事件
    $(".onEvent:eq(1)").click(function () {
        $(".onEvent:eq(0)").on('click', function () {
            alert($(this).text());
        });
    });
    $(".onEvent:eq(2)").click(function () {
        $(".onEvent:eq(0)").off('click');
    });
    $(".onEvent:eq(3)").click(function () {
        $(".onEvent:eq(0)").trigger('click');
    });


    // 测试事件效果
    $(".hoverDiv").hover(function () {
        console.log("hover....");
    });
    $("input[name='blurInput']").blur(function () {
        console.log("blur.....");
    });

});
