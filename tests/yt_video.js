const youtubedl = require('youtube-dl-exec')

youtubedl('https://www.youtube.com/watch?v=R1EwKwayzLM', {
  dumpSingleJson: true,
  noWarnings: true,
  noCallHome: true,
  noCheckCertificate: true,
  preferFreeFormats: true,
  youtubeSkipDashManifest: true,
  referer: 'https://example.com'
})
  .then(output => console.log(output))