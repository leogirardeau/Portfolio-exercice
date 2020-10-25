$(document).ready(function () {
    $(".list").click(function () {
      const value = $(this).attr("data-filter");
      if (value == "All") {
        $(".photo").show("1000");
      } else {
        $(".photo")
          .not("." + value)
          .hide("1000");
        $(".photo")
          .filter("." + value)
          .show("1000");
      }
    });
  
    $(".list").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
  });