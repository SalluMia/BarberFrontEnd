const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
       name:{
         type:String,
         required:true,
       },
       phone:{
           type:String,
           required:true
       },
       email:{
        type:String,
        required:true
       },
       password:{
        type:String,
        required:true
       }

})

const UserData= mongoose.model('User',UserSchema)

module.exports=UserData