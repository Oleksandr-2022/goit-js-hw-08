import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const LOCAL_STORAGE_PLAY_TIME = 'videoplayer-current-time';
const player = new Player(iframe);

player.on('timeupdate', throttle(onSetTimeupdate, 500));
function onSetTimeupdate(data) {
    console.log('data.seconds: ', data.seconds);
    localStorage.setItem(LOCAL_STORAGE_PLAY_TIME, data.seconds);
  }
  
  if (localStorage.getItem(LOCAL_STORAGE_PLAY_TIME)) {
    player.setCurrentTime(localStorage.getItem(LOCAL_STORAGE_PLAY_TIME));
  }



