/**
 * Created by janghunlee on 2017. 11. 17..
 */
$(document).ready(function () {
    $.ajax({
        method:"POST",
        url:"/log",
        success:function (data) {
            $(".log-header-content").text(data[0]["date"]);
            var inputData = "";
            for(var i = 0 ; i<data.length; i++){
                inputData += '<div class="log-content">';
                inputData += '<div class="log-content-box">';
                inputData += '<h4>'+data[i]["title"]+'</h4>';
                inputData += '<p>'+data[i]["time"]+'</p>';
                inputData += "</div></div>"
            }

            $(".log-box").append(inputData);
        },
        error:function (err) {

        }
    });
});