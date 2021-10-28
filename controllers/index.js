/*  File Name: index.js
    Author's Name: Lea Marie Magbalot
    Student ID: 301145757
    Web App Name: Favorite Book List
*/

exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
};
