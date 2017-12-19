/**
 * Created by janghunlee on 2017. 11. 17..
 */

$(document).ready(function () {
    $.ajax({
        method:"POST",
        url:"/keyword/hot",
        success:function (data) {
            console.log(data)
            for(var i = 0; i<4; i++){
                var num = i + 1;
                $(".content-"+num).text(data.data[i]);
            }
        },
        error:function (er) {
            console.log(er)
        }
    });
});

$(".fa-search").click(function () {
    // var query = $(".search-text").val();
    // console.log(query);
    //
    // $.ajax({
    //     method:"POST",
    //     url:"/search",
    //     data:{"query":query},
    //     success:function (data) {
    //         console.log(data);
    //     },
    //     error:function (err) {
    //         console.log(err);
    //     }
    // });
    if($(".search-text").val() == "/history"){
        location.href="/log"
    }
    else if($(".search-text").val() == "/community"){
        location.href="/post/list"
    }
    else{
        location.href="/search/result?query="+$(".search-text").val();
    }
});