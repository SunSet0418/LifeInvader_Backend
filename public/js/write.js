/**
 * Created by janghunlee on 2017. 11. 17..
 */
$(".write-box-save-btn").click(function () {
    var topic = $(".topic").val();
    var title = $(".title").val();
    var text = $(".text").val();

    $.ajax({
        method:"POST",
        url:"/post/write",
        data:{"index":text,"topic":topic,"title":title},
        success:function (data) {
            location.href="/post/list"
        },
        error:function (err) {

        }
    })
});