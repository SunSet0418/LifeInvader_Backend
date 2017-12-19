/**
 * Created by janghunlee on 2017. 11. 17..
 */
$(document).ready(function () {
    var query = decodeURIComponent(location.href.split("query=")[1]);
    console.log(query);

    $.ajax({
        method:"POST",
        url:"/search",
        data:{"query":query},
        success:function (data) {
            console.log(data);

            var inputData = '<div class="search-list-box">';

            for(var i = 0; i<data.length; i++){
                if(i != 0 && i%3 == 0){
                    inputData += '</div><div class="search-list-box">'
                }
                inputData += '<div class="search-list-box-content">';
                inputData += '<img src="'+data[i]["thumbnail"]+'">';
                inputData += '<div class="footer">'+data[i]["title"]+'</div></div>';
            }

            inputData += "</div>";

            $(".search-list").html(inputData)
        },
        error:function (err) {
            console.log(err);
        }
    });

    $.ajax({
        method:"POST",
        url:"/keyword/query",
        data:{"query":query},
        success:function (data) {
            console.log(data)
            for(var i = 0; i<4; i++){
                var num = i + 1;
                $(".rank-"+num).text(data.data[i]);
            }
        },
        error:function (err) {

        }
    })
});

$(".fa-search").click(function () {
   location.href="/search/result?query="+$(".input").val();
});