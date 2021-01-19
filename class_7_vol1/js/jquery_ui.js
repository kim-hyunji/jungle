$(function(){
    $("input[type='text']").keypress(function(e){
        if(e.keyCode == 13 && $(this).val().length){
            var _val = $(this).val();
            var _class = $(this).attr("class");
            $(this).val('');
            var _tar = $(".wrap .chat_area").append('<div class="item '+_class+'"><div class="box"><p class="msg">'+_val+'</p><span class="time">오전 12시 30분</span></div></div>');
        }

        setTimeout(function(){
            $(".wrap .chat_area").find(".item:last").addClass("on");
        },10)
    })
});

    var currentTime = function(){
        var date = new Date();
        var hh = date.getHours();
        var mm = date.getMinutes();
        var apm = hh > 12 ? "오후":"오전";
        var ct = amp+" "+hh+":"+mm+"";
        return ct;
    };