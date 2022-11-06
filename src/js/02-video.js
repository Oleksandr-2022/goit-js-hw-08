import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const LOCAL_STORAGE_PLAY_TIME = 'videoplayer-current-time';
const player = new Player(iframe);

// player.on('timeupdate', throttle(onSetTimeupdate, 500));
function onSetTimeupdate(data) {
    console.log('data.seconds: ', data.seconds);
    localStorage.setItem(LOCAL_STORAGE_PLAY_TIME, data.seconds);
  }
  
  if (localStorage.getItem(LOCAL_STORAGE_PLAY_TIME)) {
    player.setCurrentTime(localStorage.getItem(LOCAL_STORAGE_PLAY_TIME));
  }




// // const updateTimePlay = throttle(function (data) {
// //   localStorage.setItem(LOCAL_STORAGE_PLAY_TIME, data.seconds);
// // }, 1000);

// // player.on('timeupdate', updateTimePlay);

// // player
// //   .setCurrentTime(lastPlayTime)
// //   .then(function (seconds) {
// //     // seconds = the actual time that the player seeked to
// //   })
// //   .catch(function (error) {
// //     switch (error.name) {
// //       case 'RangeError':
// //         // the time was less than 0 or greater than the video’s duration
// //         break;

// //       default:
// //         // some other error occurred
// //         break;
// //     }
// //   });

// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);
// const keyCurrentTime = 'videoplayer-current-time';

// player.on('timeupdate', throttle(onSetTimeupdate, 500));
// // function onSetTimeupdate(data) {
// //   console.log('data.seconds: ', data.seconds);
// //   localStorage.setItem(keyCurrentTime, data.seconds);
// // }

// // if (localStorage.getItem(keyCurrentTime)) {
// //   player.setCurrentTime(localStorage.getItem(keyCurrentTime));
// // }