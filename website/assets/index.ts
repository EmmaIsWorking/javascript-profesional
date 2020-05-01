import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import Ads from './plugins/Ads'

const video = document.querySelector('video')
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause(), new Ads()]})

const button: HTMLElement = document.querySelector('#playButton')
button.onclick = () => player.togglePlay ()

const muteButton: HTMLElement = document.querySelector('#muteButton')
muteButton.onclick = () => player.toggleMute()

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js').catch(()=>{
    console.log(error.message)
  })
}