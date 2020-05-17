var connection = require ('../koneksi');
var mysql = require('mysql');
var md5 = require ('MD5');
var response = require ('../res');
var jwt = require('../jsonwebtoken');
var config = require('../config/secret');
var ip = require('ip');

//controller untuk register
exports.registrasi = function(req, res){
    var post = {
        username : req.body.username,
        email: req, body,email,
        password : req.body.password,
        role : req.body.role,
        tanggal_daftar : new Date()
    }
// untuk mengecek email yang digunakan untuk registrasi itu sudah pernah digunakan atau belum jika email sudah pernah
// digunakan maka dia akan meminta untuk memasukkan email baru atau email yang belum pernah digunakan untuk mendaftar
    var query =" SELECT email FROM ?? WHERE ?? ";
    var table = ["t_user", "email", post.email];


    // jadi nanti mysql format ini akan menjalankan mysql dari select email from user email sama dengan
    // email yang di masukkan
    query = mysql.format(query,table);

    connection.query(query, function(error, rows){
        if (error) {
            console.log(error);
        }else{
            if(rows.length == 0){
                var query = "INSERT INTO ?? SET ??";
                var table = ["user"];
                query = mysql.format(query, table);
                connection.query(query, post, function(error, rows){
                    if(error){
                        console.log(error);
                    }else{
                        response.ok("berhasil menambahkan data user baru!",res);
                    }
                });
            }else{
                response.ok("email sudah terdaftar!");

            }
        }
    }
        )};