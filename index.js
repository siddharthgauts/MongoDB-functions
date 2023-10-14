const express =  require('express');
const app = express();
const {connectToDatabase} = require('./database');
app.get('/', async(req, res) =>{
    try{
        const db = await connectToDatabase();
        const collection  = db.collection('Users');
        const Users = await collection.find().toArray();
        res.json(Users);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'})
    }

})

//post: ye postman se hoga.....aasan hai bass index.js me hi code karna hoga
//MOngoDB(Create): using Express.json
//MOngoDB(Update): using Express.json
//MOngoDb(Delete): using Express.json
// From 1:50 to 2:03
//https://www.youtube.com/watch?v=kjIPNVjaYPI&t=7888s


app.listen(3000);


