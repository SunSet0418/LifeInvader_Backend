module.exports = keyword

function keyword(app, db, request) {

    app.post('/keyword/query', (req, res)=>{
        var body = req.body
        var options = { method: 'POST',
            url: 'http://soylatte.kr:2000/data',
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
                res.send(200, {success:true, data: eval(body)})
            }

        });
    })

    app.post('/keyword/hot', (req, res)=>{
        var result = new Array()
        db.Log.find((err, data)=>{
            if(err){
                throw err
            }
            else if(data[0]){
                var array = new Array(Math.floor(Math.random()*data.length),Math.floor(Math.random()*data.length),Math.floor(Math.random()*data.length),Math.floor(Math.random()*data.length))
                console.log(array)
                for (var i=0;i<4;i++){
                    result[i] = data[array[i]].title
                }
                res.send(200, {success:true, data : result})

            }
            else if(!data[0]){
                res.send(404, {success:false, message:"추천할만한 핫 키워드가 없습니다."})
            }
        })
    })

    app.post('/keyword/user', (req, res)=>{
        var result = new Array()
        db.Log.find((err, data)=>{
            if(err){
                throw err
            }
            else if(data[0]){
                var array = new Array(Math.floor(Math.random()*data.length),Math.floor(Math.random()*data.length),Math.floor(Math.random()*data.length),Math.floor(Math.random()*data.length))
                console.log(array)
                for (var i=0;i<4;i++){
                    result[i] = data[array[i]].title
                }
                res.send(200, {success:true, data : result})

            }
            else if(!data[0]){
                res.send(404, {success:false, message:"추천할만한 유저 추천 키워드가 없습니다."})
            }
        })
    })

}