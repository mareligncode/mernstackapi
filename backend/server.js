import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import multer from 'multer'
import cloudinart from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import connectDb from './config/db.js'
connectDb()
const port = 5000
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
const storage = multer.memoryStorage()
const upload = multer({ storage })
app.post('/upload', upload.single('image'), async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload_stream(req.file.buffer);
        res.json({
            message: 'Image uploaded successfully',
            url: result.secure_url,
        });
    } catch (error) {
        res.status(500).json({ error: 'Upload failed', details: error.message });
    }
});
app.use('/api/user',userRouter)
app.get('/',(req,res)=> {
    res.send("wellcome")
})
app.listen(port, () => {
    console.log(`Serever runing in the port http://localhost:${port}`);
    
})