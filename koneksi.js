var mysql   = require('mysql');

//buat koneksi db
const coon = mysql.createConnection({
    host:'localhost',
    user : 'root',
    password :' ',
    database :'db_bengkel'
});

coon.connect((err)=> {
    if(err) throw err


});


module.exports = coon;