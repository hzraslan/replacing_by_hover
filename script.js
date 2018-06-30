$(document).ready(function(){    
    $("img").hover(function(){
        var temp = $(this).attr('data-alt-src');
        var temx = $(this).attr('src');
        $(this).attr("src",temp);
        $(this).attr("data-alt-src",temx);
    });
    $('img').click(function(){
        $(this).hide();
    });
    $("button").click(function(){
        $("img").show();
});
});