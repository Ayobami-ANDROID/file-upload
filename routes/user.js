const express = require('express')
const router = express.Router()
const cloudinary = require('../utils/cloudinary')
const upload = require('../utils/multer')
const {createUser,deleteUser,updatedUser,getUser} =require('../controller/user')

router.route('/').get(getUser).post(upload.single('image'),createUser)
router.route('/:id').patch(upload.single('image'),updatedUser).delete(deleteUser)
module.exports = router