
$(function () {
  $(".list-group-item").mouseenter(function(){
        $(this).addClass("active");
         $(this).siblings().removeClass("active");
         $(this).css("color","black")
         });


 });
