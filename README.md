# ffmpeg.io.js
> A quick way to create a tree structure ffmpeg

## Install

```js
npm install --save ffmpeg.structure.io
```

## Usage
```js
var iofs = require('ffmpeg.io')
```

## Change Quality

```js
var arr = [360,480,720];

iof.createFolderffmpeg(arr, function(arrSuccess){
  //arrSuccess is for example arrSuccess[true, true, true]
  console.log(arrSuccess);
});
```
