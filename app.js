// Task1: initiate app and run server at 3000
const express=require('express');
const app = express();
const PORT=3000;
var morgan = require('morgan');
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`);
});

const path=require('path');
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));

// Task2: create mongoDB connection 
const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://<username>:<password>@cluster0.bvszxht.mongodb.net/<your database name>')
.then(()=>{
    console.log('db connection sucess')
    
})
.catch(err => console.log('Error connecting',err))

//Task 2 : write api with error handling and appropriate api mentioned in the TODO below
const api=require('./routes/employee');
app.use('/api',api);






//TODO: get data from db  using api '/api/employeelist'




//TODO: get single data from db  using api '/api/employeelist/:id'





//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}






//TODO: delete a employee data from db by using api '/api/employeelist/:id'





//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}


//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});



