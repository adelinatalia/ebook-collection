const multer = require("multer")

const uploadPath = "../../uploads"

const upload = multer({
    dest: uploadPath
})
// const uploadBook = upload.single(("file"))
const uploadBook = upload.fields([
    { name: "cover", maxCount: 1 },
    { name: "path", maxCount: 1 },
])

module.exports = uploadBook