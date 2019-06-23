const express = require('express')
const app = express()

// 设置 默认采用的模板引擎名称
app.set('view engine', 'ejs')
    // 设置模板页面的存放路径
app.set('views', './views')

app.use('/node_modules', express.static('node_modules'))


app.get('/', (req, res) => {
    res.render('index', {})
})

// 用户请求的 是注册页面
app.get('/register', (req, res) => {
    // 注意 当在调用 模板引擎的 res.render 函数的时候 ./相对路径
    res.render('./user/register.ejs', {})
})

//登入
app.get('/login', (req, res) => {
    res.render('./user/login.ejs', {})
})

// 要注册新用户了
app.post('/register', (req, res) => {
    // TODO ：完成用户
    res.send({ msg: 'ok', status: 200 })
})

app.listen(3000, () => {
    console.log("服务器运行成功……")
})