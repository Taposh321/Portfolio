import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import connectDB from './database/dbConnection.js';
const app = express()
app.use(cors())
const port = 5000;

connectDB();

const sliderSchema= new mongoose.Schema({
  projectType:String,
  projectName:String,
  imagePath:String,
  description:String,
},{ collection: 'slideData' })

//creating model from schema
const sliderModel= mongoose.model('sliderModel',sliderSchema)

app.get('/slideData', async (req, res) => {
try{
  const newData= new sliderModel({
    projectType:"Resturant",
    projectName:"Our project",
    imagePath:"/assets/projects/project1.jpg",
    description:"new Data inserted"+Date.now().toLocaleString()
   });
   await newData.save();
   res.send("ok")
} catch(error){
  res.status(200).json({error:"Fail to insert data"})
};
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});