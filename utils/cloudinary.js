const cloudinary = require('cloudinary').v2 
const dotenv = require('dotenv')
dotenv.config()
cloudinary.config({
    cloud_name:process.env.cloudinary_cloud_name,
    api_key:process.env.cloudinary_cloud_api_key ,
    api_secret:process.env.cloudinary_cloud_api_secret,
  


})

// uploadtoCloudinary = (path,folder) =>{
//     return cloudinary.uploader.upload(path,{
//         folder
//     }).then((data) =>{
//         return {url:data.url,public_id:data.public_id}
//     }).catch((error)=>{
//         console.log(error)
//     }) 
// }

// removetoCloudinary =


module.exports = cloudinary