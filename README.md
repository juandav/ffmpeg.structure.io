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
var arr = [360,480,720];

iofs.createFolderffmpeg(arr, function(arrSuccess){
  //arrSuccess is for example arrSuccess[true, true, true]
  console.log(arrSuccess);
});
```
`
