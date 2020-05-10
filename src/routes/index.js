const express = require('express');
const router = express.Router();

//routes
router.get('/',(req, res) => {
    res.render('index.html', { title: 'JCMM WebSite'});
});

router.get('/contact',(req, res) => {
    res.render('contact.html', { title: 'Contact JCMM'});
});

router.get('/portfolio',(req, res) => {
    res.render('portfolio.html', { title: 'Portfolio JCMM'});
});

module.exports = router;