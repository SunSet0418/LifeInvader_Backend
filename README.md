# Life_Invader
* Life_Invader (2017 Sunrin Digital Content Competition) Backend Server

* 요청은 GET, POST(FormUrlEncoded)로 처리하였습니다.

* 기본 URL은 http://soylatte.kr:3000 입니다.

## Server Code
### 200

    Success Processing Request

### 401

    Request Data Incorrect
    
### 403

    Already In Database
    
### 404

    DATA Not Founded
   
### 500

    Server Error

    
## API DOCUMENT

### Auth [GET, POST 동일]

#### /auth/login (로그인)
>Requiring Params

    id : User_ID
    password : User_Password
    
>Return Values
>>Success
    
    HTTP : 200, {success : true, message: "로그인 성공"} 
    
>>Data Incorrect
    
    HTTP : 401, {success : false, message : "비밀번호가 맞지 않습니다."}
    
>>Not Founded

    HTTP : 404, {success : false, message : "가입된 회원이 아닙니다."}
    
#### /auth/register (회원가입)
>Requiring Parmas

    username, id, password, address, phonenum, birthday, category
    
>Return Values
>>Success

    HTTP : 200, {success : true, message : "회원가입 성공"}
    
>>Already In Database

    HTTP : 403, {success : false, message : "이미 가입된 회원입니다"}
    
### Index [GET]
#### / (로그인 페이지)
>Return Values
    
    render login.html

#### /main (메인 페이지)
>Return Values

    render main.html
    
### Keyword
#### /keyword/query (연관검색어 추천) [POST]
>Requiring Params

    No Params
    
>Return Values
>>Success

>>Not Founded

    
#### /keyword/hot (핫한 추천 키워드) [POST]
>Requiring Params

    No Params

>Return Values
>>Success

>>Not Founded


#### /keyword/user (사용차 추천 키워드)    
>Requiring Parmas
    
    No Params
    
>Return Values
>>Success

>>Not Founded


### Search [GET, POST]
#### /search/result [GET]
>Return Values

    render search.html
    
#### /keyword (검색어 추천 키워드) [POST]
>Requiring Params

    query : 검색어
    
>Return Values
>>Success 

    HTTP : 200, {success:true, data : Array}
    
>>Not Founded

    HTTP : 404, {success:false, message : "연관검색어를 유추할수 없습니다"}
    
#### /search (검색) [POST]
>Requiring Params

    query : 검색어
    
>Return Values
>>Success
    
    HTTP : 200, {success:true, data : JSONArray}


### Post
#### /post/list [GET]
>Return Values
    
    render community.html
    
#### /post/list [POST]
>Requiring Params

    No Params
    
>Return Values
>>Success

    HTTP : 200, {success:true, data : JSONArray}
    
>>Not Founded

    HTTP : 404, {success:false, message : "글이 존재하지 않습니다"}
    
   
#### /post/result [GET]
>Return Values

    render post.html
   
#### /post/result [POST]
>Requiring Params

    token : 게시물 토큰
    
>Return Values
>>Success

    HTTP : 200, {success:true, data : JSONObject}
  
>>Not Founded

    HTTP : 404, {success:false, message : "존재하는 값을 찾을수 없습니다"}
    
#### /post/write [GET]
>Return Values

    render write.html
    
#### /post/write [POST]
>Requiring Params

    topic : 토픽
    title : 제목
    writer : 작성자 (서버 세션으로 처리)
    index : 본문
    token : 글 토큰 (서버 RandomString으로 처리)
    
>Return Values
>>Success
    
    HTTP : 200, {success:true, message:"포스팅 성공"}  
    
### Log
#### /log [GET]
>Return Values

    render log.html
    
#### /log [POST]
>Requiring Params

    id : 아이디(서버 세션으로 처리)
    
>Return Values
>>Success

    HTTP : 200, {success:true, data : JSONArray}

>>Not Founded

    HTTP : 404, {success:false, message : "로그가 존재하지 않습니다."} 
        
## Database Schema

### User
> User Schema

    nickname : {type : String},
    id : {type : String},
    password : {type : String}
    
### Post
> Post Schema

    topic : {type : String},
    title : {type : String},
    writer : {type : String},
    index : {type : String},
    token : {type : String}    
    
    
### Comment
> Comment Schema

    token : {type : String},
    nickname : {type : String},
    text : {type : String}