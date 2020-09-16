//Perform CRUD operations.

const express = require('express')
const router = express.Router()
const Studnet =require('./model/students')


router.get('/',async(req,res)=>{
   try{
       const student=await Studnet.find()
       res.json(student)
   }
   catch(err){
       res.send('error'+err)
   }
})

router.get('/:id',async(req,res)=>{
    try{
        const students=await Studnet.findById(req.params.id)
        res.json(students)
    }
    catch(err){
        res.send('error'+err)
    }
 })

router.post('/',async(req,res)=>{
    const student=new Student({
        name:req.body.name,
        major:req.body.major,
        studentWorker:req.body.studentWorker
    })
    try{
        const s1=await studnet.save()
        res.json(s1)
    }catch(err){
        res.send('error')
    }
})

router.patch('./:id',async(req,res)=>{
    try{
        const students= await Studnet.findById(req.params.id)
        students.studentWorker=req.body.studentWorker
        students.name=req.body.name
        students.major=req.body.major

        const s1=await students.save()
        res.json(s1)

    }catch(err){
        res.send('error')
    }
})

router.delete('./:id',async(req,res)=>{
    try{
        const students=await Studnet.findByIdAndDelete(req.params.id)
        students.remove()
    }
        catch(err){
            res.send('error')
    }
    
})


module.exports=router