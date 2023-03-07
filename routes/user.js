
const {login,signUp,getAll,myDetails,editDetails}=require('../controllers/user')
const express=require('express')

const router=express.Router()

router.post('/login',login)
router.post('/signup',signUp)
router.get('/',getAll)
router.get('/:id',myDetails)
router.patch('/:id',editDetails)

module.exports=router