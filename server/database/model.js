import mongoose from'mongoose'
const sliderSchema= new mongoose.Schema({
    projectType:String,
    projectName:String,
    imagePath:String,
    description:String,
},{ collection: 'slideData' })

//creating model from schema
 const sliderModel= mongoose.model('sliderModel',sliderSchema)
 export default sliderModel