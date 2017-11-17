module.exports = search

function search(app, db, session, moment, request) {


    app.get('/search/result', (req, res)=>{
        res.render('search.html')
    })

    app.post('/search', (req, res)=>{
        var body = req.body
        var options = {
            method: 'GET',
            url: 'https://openapi.naver.com/v1/search/image',
            qs: { query: body.query },
            headers:
                { 'postman-token': 'f5788b3f-83bd-ae4e-0909-d6c0aaac7728',
                    'cache-control': 'no-cache',
                    'x-naver-client-secret': '5Nd37WCgdL',
                    'x-naver-client-id': 'nuTL1IQjZXVVnvLy5p6U' } };

        request(options, (error, response, body)=>{
            if (error) throw new Error(error);
            var result = JSON.parse(body)
            res.send(200, result.items)
            var Log = new db.Log({
                id : session.id,
                title : body.query,
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
        });
    })

    app.post('/keyword', (req, res)=>{
        var body = req.body
        var options = { method: 'POST',
            url: 'http://localhost:2000/data',
            headers:
                { 'postman-token': '86887a00-2270-5cff-a77e-676af61a651a',
                    'cache-control': 'no-cache',
                    'content-type': 'application/x-www-form-urlencoded' },
            form: { query: body.query, num: '10' } };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            if(eval(body)[0]==null){
                res.send(404, {success:false, message:"연관검색어를 유추할수 없습니다"})
            }
            else{
                res.send(200, eval(body))
            }

        });
    })

}