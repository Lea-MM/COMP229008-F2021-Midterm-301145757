/*  File Name: index.js
    Author's Name: Lea Marie Magbalot
    Student ID: 301145757
    Web App Name: Favorite Book List
*/

var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);

module.exports = router;
