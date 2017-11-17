module.exports = search

function search(app, db, session, moment) {


    app.get('/search/result', (req, res)=>{
        res.render('search.html')
    })

    app.post('/search', (req, res)=>{
        var body = req.body
        //TODO 모델 + API 결과 Response
        var Log = new db.Log({
            id : session.id,
            title : body.title,
            date : moment().format('YYYY년 MM월 DD일'),
            time : moment().format('h시mm분 A')
        })
        Log.save((err)=>{
            if(err){
                console.log('/post/result logsave Error')
                res.send(500, '/post/result logsave Error')
                throw err
            }
        })
    })

}