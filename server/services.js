const fs = require('fs');
const path = require('path');

const DATABASE_FILE = path.join(__dirname + '/../server/files/data.txt');

var services = function(app){
    app.post('/write-record',function(req, res){
        var id = 'lib'+Date.now();
console.log("its working");
        var hospitalData = {
            id: id,
            patientId:req.body.patientId,
            patientName: req.body.patientName,
            patientAge:req.body.patientAge,
            patientPhNo:req.body.patientPhNo,
            patientProblem:req.body.patientProblem,
            doctorReffered:req.body.doctorReffered,


            
        };
        var bookData = [];

        if(fs.existsSync(DATABASE_FILE)){
            fs.readFile(DATABASE_FILE,'utf8',function(err,data){
                if(err){
                    res.send(JSON.stringify({msg:err}));
                }else{
                    bookData = JSON.parse(data);

                    bookData.push(hospitalData);

                    fs.writeFile(DATABASE_FILE,JSON.stringify(bookData),function(err){
                        if(err){
                            res.send(JSON.stringify({msg:err}));
                        }else{
                            res.send(JSON.stringify({msg:"success"}))
                        }
                    })
                }
            })
        }else {
            bookData.push(hospitalData);

            fs.writeFile(DATABASE_FILE,JSON.stringify(bookData),function(err){
                if(err){
                    res.send(JSON.stringify({msg:err}));
                }else{
                    res.send(JSON.stringify({msg:"success"}))
                }
            })
        }



    })

    app.get("/get-records", function(req,res){
        if (fs.existsSync(DATABASE_FILE)){
            fs.readFile(DATABASE_FILE,"utf8",function(err,data){
                if(err){
                    res.send(JSON.stringify({msg:err}));
                }else{
                    var fred = JSON.parse(data);
                    res.send(JSON.stringify({msg:"success",hospitalData:fred}));
                }
            });
        }else{
            var data = [];
            res.send(JSON.stringify({msg:"success",hospitalData:data}));
        }

    });



};

module.exports = services;