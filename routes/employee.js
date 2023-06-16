const express = require('express');
const router=express.Router();
const employeeDATA=require('../model/employeedb')

//CRUD

//TODO: get data from db  using api '/api/employeelist'
router.get('/employeelist',async(req, res) => {
    try{
        let data=await employeeDATA.find({})
        res.send(data)
        }
    catch(err){
        res.send(err.message)
    }
})

//TODO: get single data from db  using api '/api/employeelist/:id'


  router.get('/employeelist/:id',async(req, res) => {
    try{
        let id = req.params.id;
        let employee_data = await employeeDATA.findById(id);
        res.send(employee_data)
    }
    catch(err){

        res.send(err.message)
    }
    
  });



//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
router.post('/employeelist',async(req, res) => {
    try{
        console.log(req.body)
        let item=req.body
        const saveddata=await employeeDATA(item);
        saveddata.save();
        res.send("Successfully saved");
    }
    catch(err){

        res.send(err.message)
    }
})


//TODO: delete a employee data from db by using api '/api/employeelist/:id'

router.delete('/employeelist/:id',async(req, res) => {
    try{
        let id=req.params.id
        console.log(id)
      
       const updated=await employeeDATA.findByIdAndDelete(id)
       res.send("delete")
    }
    catch(err){
        console.log(err)
        res.send("error")
    }
})


//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}

router.put('/employeelist',async(req, res) => {
    try{
        // let id=req.params.id
        // console.log(id)
        let id=req.body._id;
       let updateData={$set:req.body}
       const updated=await employeeDATA.findByIdAndUpdate(id,updateData)
       res.send(updated)

    }
    catch(err){
        console.log(err)
        res.send("error")
    }
})



module.exports = router
