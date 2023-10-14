const {dbConnection} = require('./db');

async function main(){
    try{
        const db = await dbConnection();
        const  collection = db.collection('Users');

       const updateResult = await collection.updateMany
       ({name: "John"}, {$set:{age:22}});

       console.log(updateResult.modifiedCount);
    }
    catch(error){
        console.error(error);
    }
}
main();