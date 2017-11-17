/**
 * Created by janghunlee on 2017. 11. 17..
 */
$(document).ready(function () {
    $.ajax({
        method:"POST",
        url:"/post/list",
        success:function (data) {
            var inputData = "";
            for(var i = data.length - 1; i>-1; i--){
                inputData += '<div class="topic-content">';
                inputData += '<h4>토픽 : '+data[i]["topic"]+'</h4>';
                inputData += '<p>'+data[i]["title"]+'</p></div>';
            }

            $(".recent-topic").append(inputData);
        },
        error:function (err) {
            
        }
    });
});

$(".back-btn").click(function () {
    history.back()
});

$(".write-btn").click(function () {
    location.href="/post/write"
})