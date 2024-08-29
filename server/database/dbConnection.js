import mongoose from 'mongoose'
const connectDB = async ()=>{
    try{
       await mongoose.connect("mongodb+srv://taposhbarman422:21052240@cluster0.2c2fmew.mongodb.net/sliderInfo?retryWrites=true&w=majority&appName=Cluster0")
       console.log("data base connected");
    }catch(error){
        console.log(error);
    }
}
export default connectDB