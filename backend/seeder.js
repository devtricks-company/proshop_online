import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/UserModel.js';
import Product from './models/productModel.js'
import Order from './models/orderModel.js';
import {connectDB} from './db/db.js';


dotenv.config();

connectDB();


const insertData = async () =>{
    try {
         await User.deleteMany();
         await Product.deleteMany();
         await Order.deleteMany();
         
        const createdUser = await User.insertMany(users);
        const adminUser = createdUser[0]._id;

        const sampleProducts = products.map(product => {
            return {...product,user:adminUser}
        });

        await Product.insertMany(sampleProducts);

        console.log(`Data Imported!`.green.inverse);
        process.exit();



    } catch (error) {
        console.log(`Data Not Imported!: ${error}`.red.inverse);
        process.exit(1);
    }

}


const destoryData = async () =>{
    try {
         await User.deleteMany();
         await Product.deleteMany();
         await Order.deleteMany();
         
        
        console.log(`Data Destoried!`.red.inverse);
        process.exit();



    } catch (error) {
        console.log(`Data Not Destoried!: ${error}`.red.inverse);
        process.exit(1);
    }

}

if(process.argv[2] === '-d'){
    destoryData();
}else{
    insertData();
}