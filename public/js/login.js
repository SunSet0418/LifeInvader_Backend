/**
 * Created by janghunlee on 2017. 11. 17..
 */
$(".login-btn").click(function () {
    var id =$(".id").val();
    var password = $(".password").val();

    $.ajax({
        method:"POST",
        url:"/auth/login",
        data:{"id":id,"password":password},
        success:function (data) {
            location.href="/main"
        },
        error:function (err) {
            alert(err["message"]);
        }
    });
});