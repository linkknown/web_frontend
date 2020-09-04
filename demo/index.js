$(".modalDiv > button").click(function () {
    $(".modalShade").removeClass('hide');
    $(".modalDialog").removeClass('hide');
    // 打开模态对话框后禁用滚动条
    $("body").css("overflow", "hidden");
});
$(".dialogClose").click(function () {
    $(".modalShade").addClass('hide');
    $(".modalDialog").addClass('hide')
    $("body").css("overflow", "visible");
});

$(".translateTextDiv li").each(function (index, liNode) {
    $(liNode).hover(function () {
        $(".translateTextDivBottomBorder").css('transform', 'translateX(' + 50 * index + 'px)');
    });
});

var favorite = ["杏","樱桃","水蜜桃","油桃","蟠桃","李子","梅子(青梅)","西梅","白玉樱桃","苹果","沙果",
    "海棠","野樱莓","枇杷","欧楂","山楂","梨(香梨","雪梨)","温柏","蔷薇果","花楸","橘子","砂糖桔","橙子",
    "柠檬","青柠","柚子","金桔","葡萄柚","香橼","佛手","指橙","黄皮果"];

var fruitStr = "";
favorite.forEach(function (fruitName, index) {
    fruitStr += "<span class='fruitItem' draggable='true' ondragstart='dragFruit(event)'>" + fruitName + "</span>";
});
$(".dragDiv01 div").html(fruitStr);

function dragFruit (event){

    event.dataTransfer.setData("fruitName", event.target.innerText);
}

function fruitOnDragOver (event) {
    event.preventDefault();
}

function fruitDrop (event, index) {
    event.preventDefault();
    let fruitName = event.dataTransfer.getData("fruitName");
    if ($(".dragDiv0" + index + " div").html().indexOf(fruitName) === -1) {
        var fruitStr = "<span class='fruitItem' draggable='true' ondragstart='dragFruit(event)'>" + fruitName + "</span>";
        $(".dragDiv0" + index + " div").html($(".dragDiv0" + index + " div").html() + fruitStr);
    }
}