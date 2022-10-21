const cloudinary = require('cloudinary')

cloudinary.config({
    cloud_name:process.env.cloudinary_cloud_name,
    api_key:process.env.cloudinary_cloud_api_key,
    api_secret:process.env.cloudinary_cloud_api_secret

})