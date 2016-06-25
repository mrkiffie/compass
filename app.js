if (window.DeviceOrientationEvent) {
    var compass = document.getElementById('compass');

    var button = document.getElementById('toggle');

    var on = false;

    function orientationHandler(event) {
        compass.style.transform = 'rotate(' + parseInt(event.alpha, 10) + 'deg)';
    }

    function start() {
        window.addEventListener('deviceorientation', orientationHandler, false);
        on = !on;
    }

    function stop() {
        window.removeEventListener('deviceorientation', orientationHandler, false);
        on = !on;
    }

    button.addEventListener('click', toggle, false);

    function toggle() {
        if (on) {
            stop();
        } else {
            start();
        }
    }

    window.addEventListener('blur', stop, false);

    window.addEventListener('focus', start, false);

    start();

}
