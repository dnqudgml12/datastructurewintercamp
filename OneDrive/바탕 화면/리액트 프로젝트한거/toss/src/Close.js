import React from 'react';

const MyComponent = () => {
  const sendNotification = () => {
    if (!('Notification' in window)) {
      console.log('This browser does not support desktop notification');
    }
    else if (Notification.permission === 'granted') {
      new Notification('Hello, world!');
    }
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(function (permission) {
        if (permission === 'granted') {
          new Notification('Hello, world!');
        }
      });
    }
  };

  return (
    <div>
      <button onClick={sendNotification}>
        Send Notification
      </button>
    </div>
  );
}

export default MyComponent;

