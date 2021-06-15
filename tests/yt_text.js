var Jimp = require('jimp');

// Jimp.read('watermark images/yt_logotext.png').then(image => {

//   Jimp.loadFont(Jimp.FONT_SANS_64_WHITE).then(font => {
//     image
//       .print(font, 10, 45, 'samkmsamk')
//       // or
//       // .print(font, 10, 25, 'samkmsamk')
//       // .print(font, 10, 80, 'samkmsamk')
//       .write('watermark images/yt_logotext_edit.png');
//   }, error => console.error(error));
  
// }, error => console.error(error));


Jimp.read('watermark images/sp.png').then(image => {

  Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(font => {
  // Jimp.loadFont(Jimp.FONT_SANS_16_WHITE).then(font => {
    image
      .print(font, 15, 54, 'samkmss')
      // .print(font, 8, 60, 'samkmsamksamkmsamk')
      // or
      // .print(font, 15, 50, 'samkmsamk')
      // .print(font, 15, 70, 'samkmsamk')
      .write('watermark images/sp_edit.png');
  }, error => console.error(error));
  
}, error => console.error(error));
