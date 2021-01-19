$(function(){
    //자리셋팅 버튼
    $(".btn_setting").click(function(){
        $(".section.box.intro").removeClass("on");
        loadDataFn();
    });    

    var loadData; //jason 데이터 담는 변수

    function loadDataFn(){
        $.ajax({
            url:"js/data.json",
            dataType:"json",
            success:function(result){
            loadData=result.seatInfo;
            settingSeat();
            }
        });
    };

    //자리배치
    function settingSeat(){

    }
})