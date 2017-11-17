/**
 * Created by janghunlee on 2017. 11. 17..
 */
$(".btn").click(function () {
    if($(this).text() == "로그인"){
        location.href="/auth/login"
    }
    else{
        location.href="/auth/register"
    }
});