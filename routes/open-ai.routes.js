const openAiController = require('../controllers/open-ai.controller')

const router=require("express").Router()

router.post("/generate-image", openAiController)

module.exports=router