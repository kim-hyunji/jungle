$(function(){
    // 자리셋팅 버튼
    $(".btn_setting").click(function(){
        $(".section.box_intro").removeClass("on");
        loadDataFn();
    });
    
    var loadData; //json데이터를 담는 변수

    //ajax 로드
    function loadDataFn(){
        $.ajax({
            url:"js/data.json",//데이터 경로
            dataType:"json",
            success:function(result){
                loadData = result.seatInfo;
                settingSeatFn();
            }
        });
    };

    //자리 배치
    function settingSeatFn(){
        $(".section.reservation").addClass("on");
        for(var i = 0; i<logData.length; i++){
            var n = loadData[i].name;
            var p = loadData[i].price;
            var r = loadData[i].reserve;
            $(".section.reservation > ol").append("<11 class="")
        }
    }
})