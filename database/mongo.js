var mongoose = require('mongoose')
var schema = mongoose.Schema
var DB_NAME = "LifeInvader"
var db = mongoose.connect("mongodb://localhost/"+DB_NAME, {useMongoClient : true},(err)=>{
    if(err){
        console.log('DB Error')
        throw err
    }
    else {
        console.log('DB Connect => '+DB_NAME)
    }
})

var User_Schema = new schema({
    nickname : {type : String},
    id : {type : String},
    password : {type : String}
})

var Post_Schema = new schema({
    topic : {type : String},
    title : {type : String},
    writer : {type : String},
    index : {type : String},
    token : {type : String}
})

var Comment_Schema = new schema({
    token : {type : String},
    nickname : {type : String},
    text : {type : String}
})

var Log_Schema = new schema({
    id : {type : String},
    time : {type : String},
    date : {type : String},
    title : {type : String}
})

var User = mongoose.model('user', User_Schema)
var Post = mongoose.model('post', Post_Schema)
var Comment = mongoose.model('comment', Comment_Schema)
var Log = mongoose.model('log', Log_Schema)


exports.db = db
exports.User = User
exports.Post = Post
exports.Comment = Comment
exports.Log = Log