import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology:true
        })
        console.log('mongoo connected successfully');
        
    } catch (error) {
       console.error('database cpnnection failed ',error.message)
    }
}
export default connectDb