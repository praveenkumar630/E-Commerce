const cloudinary = require('cloudinary').v2;
const multer = require('multer');


cloudinary.config({
    cloud_name: 'djdvdwpk7',
    api_key: '531453985525589',
    api_secret: 'iK0K72GVff71kXlH__H_J2WkCDo'
})

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
    const result = await cloudinary.uploader.upload(file,{
        resource_type: "auto",
    })

    return result;
}

const upload = multer({storage})

module.exports = {upload, imageUploadUtil}