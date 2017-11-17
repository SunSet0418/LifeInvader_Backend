module.exports = keyword

function keyword(app, db) {

    app.post('/keyword/query', (req, res)=>{
        var body = req.body
        var options = { method: 'POST',
            url: 'http://localhost:2000/data',
            headers:
                { 'postman-token': '86887a00-2270-5cff-a77e-676af61a651a',
                    'cache-control': 'no-cache',
                    'content-type': 'application/x-www-form-urlencoded' },
            form: { query: body.query, num: '10' } };

        request(options, (error, response, body)=>{
            if (error) throw new Error(error);
            if(eval(body)[0]==null){
                res.send(404, {success:false, message:"연관검색어를 유추할수 없습니다"})
            }
            else{
                res.send(200, eval(body))
            }

        });
    })

    app.post('/keyword/hot', (req, res)=>{
        var body = req.body
        db.
    })

    app.post('/keyword/user', (req, res)=>{
        db.Log.find({
            id : session.id
        })
    })

}