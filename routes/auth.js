module.exports = auth

function auth(app, db, session) {

    app.get('/auth/register', (req, res)=>{
        res.render('register.html')
    })

    app.post('/auth/register', (req, res)=>{
        var body = req.body
        var SaveUser = new db.User({
            nickname : body.nickname,
            id : body.id,
            password : body.password
        })
        db.User.findOne({
            id : body.id
        }, (err, data)=>{
            if(err){
                console.log('/auth/register userfind Error')
                res.send(500, '/auth/register userfind Error')
                throw err
            }
            else if(data){
                res.send(403, {success:false, message:"이미 가입된 아이디입니다."})
            }
            else {
                SaveUser.save((err)=>{
                    if(err){
                        console.log('/auth/register usersave Error')
                        res.send(500, {success:false, message:"서버에러"})
                        throw err
                    }
                    else{
                        res.send(200, {success : true, message : "회원가입 성공"})
                    }
                })
            }
        })

    })

    app.get('/auth/login', (req, res)=>{
        res.render('login.html')
    })

    app.post('/auth/login', (req, res)=>{
        var body = req.body
        db.User.findOne({
            id : body.id
        },(err, data)=>{
            if(err){
                console.log('/auth/login userfind Error')
                res.send(500, '/auth/login userfind Error')
                throw err
            }
            else if(data){
                if(data.password == body.password){
                    res.send(200, {success:true, message:data.nickname+"님 환영합니다."})
                    session.id = data.id
                    session.nickname = data.nickname
                }
                else if(data.password != body.password){
                    res.send(401, {success:false, message : "비밀번호를 확인해주세요"})
                }
            }
            else {
                res.send(404, {success:false, message:"존재하지 않는 유저입니다."})
            }
        })
    })

    app.get('/auth/logout', (req, res)=>{
        session.destroy()
        res.redirect('/main')
    })
}