//кнопка вверх
$(function() { 
  $.fn.scrollToTop = function() {    
    $(this).hide().removeAttr("href"); if ($(window).scrollTop() != "0") { 
      $(this).fadeIn("slow")
    }
    var scrollDiv = $(this); $(window).scroll(function() {
      if ($(window).scrollTop() == "0") { $(scrollDiv).fadeOut("slow") }
      else { $(scrollDiv).fadeIn("slow") }
    });
    $(this).click(function() { $("html, body").animate({ scrollTop: 0 }, "slow") })
  }
});

$(function() { $("#w2b-StoTop").scrollToTop(); });

//прокрутка вверх при открытии страницы
$(function() {
  $('body').animate({'scrollTop':'0px'});
});

//для работы выпадающего меню на андроиде
$('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });

$(function(){
  $("#accordion dt.active").next("#accordion dd").css({display:'block'});
  $("#accordion dt").click(function() {
    $(this).next("#accordion dd").slideToggle("slow").siblings("#accordion dd:visible").slideUp("slow");
    $(this).toggleClass("active");
    $(this).siblings("#accordion dt").removeClass("active");
    return false 
  });
});

//прижимаем футер к низу и перерисовываем его каждый раз
function resize() {
  var foot = document.getElementById("footer1");
  var footHeight = foot.offsetHeight;
  foot.style.marginTop = -footHeight + "px";
  document.getElementById("content").style.paddingBottom = footHeight + "px";
}

window.onload = resize;
window.onresize = resize;
//завершение работы с футером

