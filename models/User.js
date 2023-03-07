const mongoose=require('mongoose')
const {Schema}=mongoose

const userSchema = new Schema({
    name:String,
 
    phone:{
        type:Number,
        unique:true,
    },
    
    email:{
        type:String,
        unique:true,
    },
   
    password:String,
    isAdmin:{
        type:Boolean,
        
    },
    isLoggedIn:{
       type:Boolean

    },
    joinedOn:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('User',userSchema)

