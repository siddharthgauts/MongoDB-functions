const {dbConnection} = require('./db')
// to delete the document in mongodb collections 
async function main(){
    try{
        const db = await dbConnection();
        const collection = db.collection('Users');
        const filter = {name : 'John'};
        const deleteResult = await collection.deleteOne(filter);


        collection.deleteOne(filter)
   }
   catch(error){
    console.error(error);
   }
}
main()