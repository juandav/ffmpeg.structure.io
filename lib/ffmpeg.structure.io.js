var fs = require('fs');
var path = require('path');
var iof = require('ffmpeg.io');

//Crea directorios y subdirectorios
function mkdir(dirPath, mode,callback){
    fs.mkdir(dirPath, mode, function (error){
        if (error && error.code == 'ENOENT'){
            mkdir(path.dirname(dirPath), mode, mkdir.bind(this,dirPath,mode,callback));
        }
        else if (callback) callback(error);
    });
}


/* Usage this function
// IN:[360,480,720]
    createFolderMultipleQualityffmpeg(arr, function(data){
      console.log(data);
    });
// OUT:[true, true, true]
*/
function createFolderMultipleQualityffmpeg(quality, callback){
    var arrSuccess = [];
    
    quality.forEach(function(element, index, array){
        mkdir('output/' + element + 'p','0777', function(err){
            if(err != null){
                arrSuccess.push(false);
            }else{
                arrSuccess.push(true); 
            }

            if(index === array.length - 1){
                callback(JSON.stringify(arrSuccess));
            }
        });
    });
}

/*
IN (360)
    createFolderSingleQualityffmpeg(quality, function(data){
        //data is true or false
        console.log(data);
    });
OUT(ture)
*/
function createFolderSingleQualityffmpeg(quality, callback){
    mkdir('output/' + quality + 'p','0777', function(err){
        if(err != null){
            callback(false);
        }else{
            callback(true);
        }
    });
}

/*  for example

    var formats = [{
      input: 'test.mp4',
      format: '640x360',
      quality: '360p',
      bandwith: ''
    },{
      input: 'test.mp4',
      format: '848x480',
      quality: '480p',
      bandwith: ''
    }];
    
*/
var createFileHlsForQuality = function(formats, callback){
    formats.forEach(function(format){
        createFolderSingleQualityffmpeg(format.quality, function(data){
            if(data){
                var jsonQuality = {
                   input: format.input,
                   format: format.format, 
                   output: './output/' + format.quality + 'p/' + 'pl.mp4'
                }
                iof.changerQuality(json, function(value){
                    if(value){
                        var jsonHls = {
                            input: jsonQuality.output,
                            output: './output/' + format.quality + 'p/' + 'pl.m3u8'
                        }
                        iof.generateHls(json, function(value){
                          if(value){
                              callback(true);
                          }else{
                              callback(false);
                          }
                        });
                    }else{
                        callback(false);
                    }
                });
            }else{
                callback(false);
            }
        });
    });
}

module.exports.createFileHlsForQuality = createFileHlsForQuality;