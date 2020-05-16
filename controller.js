'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi UAS ku berjalan!",res)
};

// menampilkan semua data sparepart
exports.tampilsemuasparepart = function(req, res){
    connection.query('SELECT * FROM t_sparepat', function(error, rows, fileds){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res)
        }

            }
            )};

//menampilkan data sparepart berdasarkan id nya

exports.tampilberdasarkanid = function(req, res){
    let id = req.params.id;
    connection.query ('SELECT * FROM t_sparepat WHERE id_sparepat = ?', [id], 
    function(error, rows, fileds){
        if(error){
            console.log(error);
        }else{
                response.ok(rows, res);
        }
    }

  );
  };


// menampilkan data montir secara keseluruhan
exports.tampilsemuamontir = function(req, res){
    connection.query('SELECT * FROM t_montir', function(error, rows, fileds){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res)
        }

            }
            )};

// menampilkan data montir berdasarkan id nya
exports.tampilberdasarkanidmontir = function(req, res){
    let id = req.params.id;
    connection.query ('SELECT * FROM t_montir WHERE id_montir = ?', [id], 
    function(error, rows, fileds){
        if(error){
            console.log(error);
        }else{
                response.ok(rows, res);
        }
    }

  );
  };

  //menambahkan data table service
  exports.tambahservis = function(req, res){
      var id_servis = req.body.id_servis;
      var tgl_servis = req.body.tgl_servis;
      var id_user = req.body.id_user;
      var id_montir = req.body.id_montir;
      var id_sparepat = req.body.id_sparepat;
      var jumlah_sparepat =  req.body.jumlah_sparepat;

      connection.query('INSERT INTO t_servis (id_servis, tgl_servis,id_user,id_montir,id_sparepat,jumlah_sparepat) VALUES (?,?,?,?,?)' , 
      [id_servis, tgl_servis,id_user,id_montir,id_sparepat,jumlah_sparepat],
        function(error, rows,fileds){

            if (error) {
                console.log(error);
            }else{
                response.ok("berhasil menambahkan data", res)
            }

        }
      )};