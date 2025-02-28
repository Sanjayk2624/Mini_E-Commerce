const mongoose=require('mongoose')

const connectDatabase=()=>{
  mongoose.connect(process.env.DB_URL).then((con)=>{
    console.log('MongoDB connected Host:',con.connection.host)
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
  
}

module.exports=connectDatabase