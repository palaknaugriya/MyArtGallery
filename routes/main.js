const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    const data = {
        greeting: 'Hi',
        introduction: 'I am a backend devoloper'
    }
    res.render('landing', data);
});

module.exports = router