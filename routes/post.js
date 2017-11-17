module.exports = post

function post(app, db, session, RandomString, moment) {

    app.get('/post/result', (req, res)=>{
        res.render('post.html')
    })

    app.post('/post/result', (req, res)=>{
        var body = req.body
        db.Post.findOne({
            token : body.token
        }, (err, data)=>{
            if(err){
                res.send(500, {success:false, message:"서버에러"})
            }
            else if(data){
                res.send(200, {success:true, data:data})
            }
            else {
                res.send(404, {success:false, message:"존재하는 값을 찾을수 없습니다"})
            }
        })

    })

    app.get('/post/list', (req, res)=>{
        res.render('community.html')
    })

    app.post('/post/list', (req, res)=>{
        var body = req.body
        db.Post.find((err, data)=>{
            if(err){
                res.send(500, '서버에러')
            }
            else if(data){
                res.send(200, {success:true, data : data})
            }
            else {
                res.send(404, {success:false, message : "토픽을 찾을수 없습니다"})
            }
        })
    })

    app.get('/post/write', (req, res)=>{
        res.render('write.html')
    })

    app.post('/post/write', (req, res)=>{
        var body = req.body
        var SavePost = new db.Post({
            topic : body.topic,
            title : body.title,
            writer : session.nickname,
            index : body.index,
            token : RandomString.generate(10)
        })
        SavePost.save((err)=>{
            if(err){
                res.send(500, {success:false, message:"서버에러"})
            }
            else{
                res.send(200, {success:true, message:"포스팅 성공"})
            }
        })
    })

}
