const express =require('express')
const app=express()
const dotenv=require('dotenv')
const path=require('path')
const cors=require('cors')
const connectDatabase=require('./Config/connectDatabase')
dotenv.config({path:path.join(__dirname,'config','config.env')})

const products=require('./Routes/products')
const orders=require('./Routes/order')

connectDatabase();

app.use(express.json())
app.use(cors())
app.use('/api/v1/',products)
app.use('/api/V1/',orders)

app.listen(process.env.PORT,()=>{
  console.log(`Server listening to port ${process.env.PORT} is ${process.env.NODE_ENV}`)
})