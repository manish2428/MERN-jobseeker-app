require('dotenv').config()
var mongoose=require('mongoose')


mongoose.connect(process.env.DB_URL, {useNewUrlParser: true})
.then(()=>{
  console.log("Database Connected....")
})
.catch((err)=>{
  console.log(err)
})

