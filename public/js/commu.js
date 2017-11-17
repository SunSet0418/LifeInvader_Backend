/**
 * Created by janghunlee on 2017. 11. 17..
 */
$(document).ready(function () {
    $.ajax({
        method:"POST",
        url:"/post/list",
        success:function (data) {
            console.log();
            var inputData = "";
            console.log(data["data"][0]);
            for(var i = 0; i<data["data"].length; i++){
                inputData += '<div class="topic-content">';
                inputData += '<h4>토픽 : '+data["data"][i]["topic"]+'</h4>';
                inputData += '<p>'+data["data"][i]["title"]+'</p></div>';
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