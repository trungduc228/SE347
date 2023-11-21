const userRouter = require('./userRouter')
const productRouter = require('./productRouter')

function route(app) {
    app.use('/user', userRouter)
}


module.exports = route