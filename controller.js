'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi UAS ku berjalan!",res)
};

// menampilkan semua data user
exports.tampilsemuauser = function(req, res){
    connection.query('SELECT * FROM t_user', function(error, rows, fileds){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows, res)
        }

            }
            )};

//menampilkan data user berdasarkan id nya

exports.tampilberdasarkanid = function(req, res){
    let id = req.params.id;
    connection.query ('SELECT * FROM t_user WHERE id = ?', [id], 
    function(error, rows, fileds){
        if(error){
            console.log(error);
        }else{
                response.ok(rows, res);
        }
    }

  );
  };


    