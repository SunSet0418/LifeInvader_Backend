/**
 * Created by janghunlee on 2017. 11. 17..
 */
$(".login-btn").click(function () {
    var id =$(".id").val();
    var password = $(".password").val();
    var name = $(".name").val();
    var passwordCheck = $(".password-check").val();

    if(password == passwordCheck){
        $.ajax({
            method:"POST",
            url:"/auth/register",
            data:{"id":id,"password":password,"nickname":name},
            success:function (data) {
                location.href="/main"
            },
            error:function (err) {
                alert(err["message"]);
            }
        });
    }
});