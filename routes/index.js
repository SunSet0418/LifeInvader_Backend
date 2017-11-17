module.exports = index

function index(app, db, session) {

    app.get('/', (req, res)=>{
        res.render('index.html')
    })

    app.get('/main', (req, res)=>{
        res.render('main.html')
    })

    app.get('/log', (req, res)=>{
        res.render('log.html')
    })

    app.post('/log', (req, res)=>{
        var body = req.body
        db.Log.find({
            id : session.id
        }, (err, data)=>{
            if(err){
                res.send(500, {success:false, message:"서버에러"})
                throw err
            }
            else if(data[0]){
                res.send(200, {success:true, data:data})
            }
            else if(!data[0]){
                res.send(404, {success:false, message:"로그가 존재하지 않습니다"})
            }
        })
    })
}