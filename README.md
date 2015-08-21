# ffmpeg.io.js
> A quick way to create a tree structure ffmpeg

## Install

```js
npm install --save ffmpeg.structure.io
```

## Usage
```js
var iofs = require('ffmpeg.structure.io')
```

## Create Structure

```js
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

iofs.createFileHlsForQuality(formats, function(data){
  //data is true or false
  console.log(data);
});
```
