import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRouter from './routes/userRoute.js'
import connectDb from './config/db.js'
connectDb()
const port = 5000
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.use('/api/user',userRouter)
app.get('/',(req,res)=> {
    res.send("wellcome")
})
app.listen(port, () => {
    console.log(`Serever runing in the port http://localhost:${port}`);
    
})