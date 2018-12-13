$(function(){
  $("#all li").mouseover(function(){//鼠标进入离开事件
    $(this).css("background-color","#ff00ff").siblings().css("background-color","white");
    $(this).css({"background-color":"red","font-size":"9px"}).siblings().hide();
  });

  $(window).scroll(function(){//鼠标滚动事件
    var _top=$(window).scrollTop();//获得鼠标滚动的距离
  });

  //手动播放图片
  $(".btn ul li").hover(function(){

    $(this).addClass("one").siblings().removeClass("one");
    index=$(this).index();
    i=index;
    $(".pic a").eq(index).stop().fadeIn(500).show().siblings().stop().fadeIn(500).hide();
  });

  //自动播放图片
  var i=0;
  var t=setInterval(autoplay,4000);
  function autoplay(){
    i++;
    if(i>5)i=0;
    $(".btn ul li").eq(i).addClass("one").siblings().removeClass("one");
    $(".pic a").eq(i).stop().fadeIn(500).show().siblings().stop().fadeIn(500).hide();
  }

  $("#banner").hover(function(){
    clearInterval(t);
  },function(){
    t=setInterval(autoplay,4000);
  });
});