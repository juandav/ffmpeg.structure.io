var fs = require('fs');
var path = require('path');
var iof = require('ffmpeg.structure.io');

//Crea directorios y subdirectorios
function mkdir(dirPath, mode,callback){
    fs.mkdir(dirPath, mode, function (error){
        if (error && error.code == 'ENOENT'){
            mkdir(path.dirname(dirPath), mode, mkdir.bind(this,dirPath,mode,callback));
        }
        else if (callback) callback(error);
    });
}

//[360,480,720]
//return [true, true, true]
function createFolderffmpeg(quality, callback){
    var arrSuccess = [];
    quality.forEach(function(element, index, array){
        mkdir('output/' + element,'0777', function(err){
            if(err != null){
                arrSuccess.push(true);
                console.log(true);
            }else{
                arrSuccess.push(false);
                console.log(false);
                console.log(err);
            }
        });
    });
    callback(arrSuccess);
}

module.exports.createFolderffmpeg = createFolderffmpeg;

//var arr = [360,480,720];
//createFolderffmpeg(arr,'0777', function(err){
  //console.log(err);
//});

