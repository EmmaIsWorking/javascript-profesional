import MediaPlayer from './MediaPlayer.js'
import Autoplay from './plugins/AutoPlay.js'

const video = document.querySelector('video')
const player = new MediaPlayer({el: video, plugins: [new Autoplay]})

const button = document.querySelector('#playButton')
button.onclick = () => player.togglePlay ()

const muteButton = document.querySelector('#muteButton')
muteButton.onclick = () => player.toggleMute()