$(".modalDiv > button").click(function () {
    $(".modalShade").show();
    $(".modalDialog").show();
    // 打开模态对话框后禁用滚动条
    $("body").css("overflow", "hidden");
});


$(".dialogClose").click(function () {
    $(".modalShade").hide(1);
    $(".modalDialog").hide(1);
    $("body").css("overflow", "visible");
});


// 当前选中的索引
var index = 0;
// 除第一张其余的图片全部隐藏
$(".swiperList > li:not(:eq(0))").hide();
// 定义页码
var totalNum = $(".swiperList > li").length;
var html_page = "";
for (var i=1; i<= totalNum; i++) {
    if (i === 1) {
        html_page += "<li class='active'>" + i + "</li>";
    } else {
        html_page += "<li>" + i + "</li>";
    }
}
$(".swiperPage").html(html_page);
$(".swiperPage > li").click(function () {
    index = $(this).index();
    showPic(index);
});

function showPic (index) {
    $(".swiperList > li:eq(" + index + ")").show().siblings("li").hide();
    $(".swiperPage > li:eq(" + index + ")").addClass("active").siblings("li").removeClass("active");
}

// .hover( handlerIn, handlerOut )
$(".swiperList").hover(function () {
    clearInterval(window.swiper_timer);
}, function () {
    window.swiper_timer = setInterval(function () {
        showPic(index);
        index ++;
        if (index === totalNum) {
            index = 0;
        }
    }, 2000);
}).trigger("mouseleave");   // 触发离开使其能自动播放



$(".translateTextDiv li").each(function (index, liNode) {
    $(liNode).hover(function () {
        $(".translateTextDiv .bottom").css('transform', 'translateX(' + 50 * index + 'px)');
    });
});
