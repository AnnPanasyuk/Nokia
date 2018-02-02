/**
 * Created by anna on 13.11.17.
 */
$("body").on("click",".top-menu a",function(){var e=$($(this).attr("href")).offset().top;return $("html,body").animate({scrollTop:e},800),!1});
$("body").on("click","#dropdown-menu a",function(){var e=$($(this).attr("href")).offset().top;return $("html,body").animate({scrollTop:e},800),!1});