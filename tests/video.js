// const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs')
var Jimp = require('jimp');

const got = require('got');
const video_strm = 'https://r6---sn-ci5gup-qxar.googlevideo.com/videoplayback?expire=1623456894&ei=HqjDYPKGDKOn8QOWw6noDQ&ip=2401%3A4900%3A173f%3Afd1b%3A198b%3Aed08%3Ad4e4%3A1120&id=o-ADhs1JWIspYCoNOB-V9bXA62nV6K8C6s0v2Nd0bruqQ1&itag=313&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=IN&mm=31%2C29&mn=sn-ci5gup-qxar%2Csn-ci5gup-h556&ms=au%2Crdu&mv=m&mvi=6&pcm2cms=yes&pl=48&initcwndbps=305000&vprv=1&mime=video%2Fwebm&ns=wSLCSLu4VCWkBNhITrU4hjoF&gir=yes&clen=111040287&dur=185.309&lmt=1615544859597722&mt=1623434933&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5532434&n=-yuKpYQvdSuvn6C64D0&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgM4fEw__mvjyS_xTCeFGrWXPSay8ooS5LZ0ec1OVvxb0CIA7QjafbNoZuntkzhc6JcGYWiyl3Luyapxg8RJ5ghIXk&sig=AOq0QJ8wRQIgUbFvg5idhG4YK09L_de2hVubPJjZo_7lmQ1wxQQiUlkCIQD-7PhwRpI0nlMg_UHSlceKXPwoDR-mi9zJ-umVA0eDXQ==';
const audio_strm = 'https://r6---sn-ci5gup-qxar.googlevideo.com/videoplayback?expire=1623456894&ei=HqjDYPKGDKOn8QOWw6noDQ&ip=2401%3A4900%3A173f%3Afd1b%3A198b%3Aed08%3Ad4e4%3A1120&id=o-ADhs1JWIspYCoNOB-V9bXA62nV6K8C6s0v2Nd0bruqQ1&itag=251&source=youtube&requiressl=yes&mh=IN&mm=31%2C29&mn=sn-ci5gup-qxar%2Csn-ci5gup-h556&ms=au%2Crdu&mv=m&mvi=6&pcm2cms=yes&pl=48&initcwndbps=305000&vprv=1&mime=audio%2Fwebm&ns=wSLCSLu4VCWkBNhITrU4hjoF&gir=yes&clen=3089831&dur=185.341&lmt=1615530329733905&mt=1623434933&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5532434&n=-yuKpYQvdSuvn6C64D0&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgLpZ6OIrBGl8bH-vCYaKopWMXtKA_4dFLlgjlyOEObBQCIDEoZXX9-IRd-r2xQsXJChHnsYu7e6Hp0qSeOxzWOaqV&sig=AOq0QJ8wRQIhAPnHv8KMv9sQa2d8h7tz5fIkkPg9a4wlvCP3-sL11__KAiBg-1qaijh0xklUfAOYAIlwl5bEnExsuG_zBz9O3Brivg==';

// ffmpeg.setFfmpegPath(ffmpegPath);

try {
// var strm = fs.createReadStream('https://r6---sn-ci5gup-qxar.googlevideo.com/videoplayback?expire=1623071623&ei=J8e9YIivNJzi3LUP1eiJeA&ip=2401%3A4900%3A173f%3Afd1b%3A7990%3A3147%3Abb55%3Ab10a&id=o-ANwPAyu7qjogxbOxj2zMQT7YI8UuDjJi3klEnaWn2KRK&itag=396&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=IN&mm=31%2C29&mn=sn-ci5gup-qxar%2Csn-ci5gup-h556&ms=au%2Crdu&mv=m&mvi=6&pcm2cms=yes&pl=48&initcwndbps=305000&vprv=1&mime=video%2Fmp4&ns=6hyaoHdBo9vrPT3IOE6iwMoF&gir=yes&clen=2499975&dur=185.310&lmt=1622234398886359&mt=1623049734&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5532434&n=cksPuNJz2Mx0sHVW8&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAITqK8TB1pn9QAiishlzgJg0DzSB3MCQ9vJt22cWftAFAiEA44Qn4tNKFFslahr0hyn2hRwNSOjPGGjO-1klknE7F20%3D&sig=AOq0QJ8wRQIgRAPsMw5ko2G8VDHQ9ZS97VmmrNbVzdblSFgkyoIv0V0CIQCm4VrYw7zqJVKDayJszIRIoE9XBjypOI7mYLA0FRUdrg==')
  ffmpeg()
    .input(got.stream(video_strm))
    .size('720x?')
    .aspect('9:16')
    .autopad()
    .output('dualhelper_outtemp.mp4')

    .on('end', function() {

      Jimp.read('watermark images/sp.png').then(image => {

        Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(font => {
          image
            .print(font, 15, 54, 'laurendaiglemusic')
            .write('watermark images/sp_edit.png', () => {

              ffmpeg('dualhelper_outtemp.mp4')
                .input(got.stream(audio_strm))
                .input("watermark images/sp_edit.png")
                .complexFilter([
                    "overlay=W/2-w/2:H-h-100"
                ])        
                // .input("watermark images/sp_logotext.png")
                // .complexFilter([
                //     "overlay=0:H-h-300"
                // ])        
                .output('dualhelper_out.mp4')
                .run();
            
            });



        }, error => console.error(error));
        
      }, error => console.error(error));

    })

    .run();
} catch (error) {
  console.error(error);
}


