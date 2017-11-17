module.exports = index

function index(app, db, session) {

    app.get('/', (req, res)=>{
        res.render('index.html')
    })

    app.get('/main', (req, res)=>{
        res.render('main.html')
    })
}