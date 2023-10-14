const {dbConnection} = require('./db');

async function main(){
    try{
        const db = await dbConnection();
        const  collection = db.collection('Users');

        const data = [
            {name: "John", age:25},
            {name: "Jack", age:19},
        ];

        const insertResult = await collection.insertMany(data);
        console.log(`${insertResult.insertedCount} documents inserted`);
    }
    catch(error){
        console.error(error);
    }
}
main();