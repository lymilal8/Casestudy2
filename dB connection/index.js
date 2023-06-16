const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://<username>:<password>@cluster0.bvszxht.mongodb.net/<your database name>')//your connection string
.then(()=>{
    console.log('db connection sucess')
    
})
.catch(err => console.log('Error connecting',err))