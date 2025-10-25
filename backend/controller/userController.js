import express from 'express'
import user from '../models/userModel.js'
export const register = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const existingUser = await user.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                status: false,
                message: "te user already exist",
                error:error.message
            })
        }
        const newUser = await user.create({ name, email, password })
        res.status(201).json({
            status: true,
            message: "user registered successfully",
            user:newUser
            
        })
        
        
    } catch (err) {
        res.status(500).json({
            status: false,
            message: "eror of registerig",
            error:err.message
        })
    }

}
export default register