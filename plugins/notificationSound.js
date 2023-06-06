export default function ({ app }, inject) {
	inject('playNotificationSound', () => {
	  const audio = new Audio('/assets/audio/notification.mp3');
	  audio.play();
	});
  }