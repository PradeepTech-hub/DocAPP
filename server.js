import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectcloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'

//app config

const app = express()
const port =  process.env.PORT || 4000
connectDB()
connectcloudinary()

//middlewares

app.use(express.json())
app.use(cors())


// API End Points
app.use('/api/admin',adminRouter)
app.use('/api/doctor', doctorRouter)



app.get('/',(req,res)=>  {
    res.send('API Work GREAT')

})


app.listen(port,()=> console.log("Sever Started",port))