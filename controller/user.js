const express = require('express')
const router = express.Router()
const cloudinary = require('../utils/cloudinary')
const upload = require('../utils/multer')
const User = require('../models/user')
const { StatusCodes } = require('http-status-codes')
// const statusCodes = require('http-status-codes')

const createUser = async(req,res)=>{
    try {
        const result = await cloudinary.uploader.upload(req.file.path)
        let users ={
            name:req.body.name,
            avatar:result.secure_url,
            cloudinary_id:result.public_id
        }

        const user = await User.create(users) 
        res.status(StatusCodes.CREATED).json({user})

    
    } catch (error) {
        console.log(error)
    }
}

const getUser = async(req,res)=>{
    try {
        const user = await User.find({})
        res.status(StatusCodes.OK).json({user})
    } catch (error) {
        console.log(error)
    }
}

const deleteUser = async(req,res)=>{
    try {
        let user = await User.findById({_id:req.params.id})
        res.status(StatusCodes.OK).json({user})
        await cloudinary.uploader.destroy(user.cloudinary_id) 
        await user.remove()
        res.status(StatusCodes).json(user)
    } catch (error) {
        console.log(error)
    }
}

const updatedUser = async(req,res)=>{
    try {
        let user = await User.findById({_id:req.params.id})
        await cloudinary.uploader.destroy(user.cloudinary_id)
        const result = cloudinary.uploader.upload(req.file.path)
        const data ={
            name: req.body.name || user.name,  
            avatar:  result.secure_url || user.secure_url,
            cloudinary_id:result.public_id || user.public_id
        }
        user = await User.findByIdAndUpdate({_id:req.params.id},data,{
            new:true,runValidators:true
        })
        res.status(StatusCodes.OK).json({user})
    } catch (error) {
        console.log(error)
    }
}

module.exports ={createUser,getUser,updatedUser,deleteUser}