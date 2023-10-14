const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name:String,
    age:Number,
})

const UserModel = mongoose.model('Users', UsersSchema);

const main = async() =>{
    await mongoose.connect('mongodb://127.0.0.1:27017/myDatabase');
    console.log('Connected to MongoDB');

    const newData = new UserModel({
        name:'Peter',
        age:20,

    });

    await newData.save();
    console.log('Data added successfully');
}
main();