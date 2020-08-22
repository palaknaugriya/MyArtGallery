const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    const data = {
        greeting: 'Hello! Welcome to my portfolio site',
        introduction: "I am a backend developer"
    }
    res.render('landing');
})


module.exports = router