// 背景動画再生
$(function () {
  $("#videoPlay").YTPlayer(); //動画の呼び出し部分に指定したID
});

// IDにリンクしたときの位置をナビバーの高さ分だけ下にずらす
$(function () {
  $('a[href^="#"]').click(function () {
    var adjust = -80;
    var speed = 0;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top + adjust;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

// ナビバー押したら閉じる
$(".navbar-nav>li>a , .dropdown-menu>a").on("click", function () {
  if (this.id != "navbarDropdown") {
    $(".navbar-collapse").collapse("hide");
  }
});
