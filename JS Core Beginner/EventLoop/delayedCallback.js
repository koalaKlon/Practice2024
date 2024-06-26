// variant 1
function delayedCallback(callback) {
    setTimeout(() => {
        callback();
    }, 2000);
}

function myCallback() {
    console.log('2 секунды');
}

delayedCallback(myCallback);
