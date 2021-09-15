// const el = document.querySelectorAll(".desig");

// el.addEventListener("mousemove", (e) => {
//   el.style.backgroundPositionX = -e.offsetX + "px";
//   el.style.backgroundPositionY = -e.offsetY + "px";
// });
document.addEventListener('mousemove', function (event) {
    if (window.event) { // IE fix
        event = window.event;
    }

    // Grab the mouse's X-position.
    var mousex = event.clientX;
    var header = document.getElementById('anant');
    header.style.backgroundPosition = mousex/1.4 + 'px 0';
}, false);
document.addEventListener('mousemove', function (event) {
    if (window.event) { // IE fix
        event = window.event;
    }

    // Grab the mouse's X-position.
    var mousex = event.clientX;
    var header = document.getElementById('anant1');
    header.style.backgroundPosition = mousex/1.4 + 'px 0';
}, false);
document.addEventListener('mousemove', function (event) {
    if (window.event) { // IE fix
        event = window.event;
    }

    // Grab the mouse's X-position.
    var mousex = event.clientX;
    var header = document.getElementById('anant2');
    header.style.backgroundPosition = mousex/1.4 + 'px 0';
}, false);

document.addEventListener('mousemove', function (event) {
    if (window.event) { // IE fix
        event = window.event;
    }

    // Grab the mouse's X-position.
    var mousex = event.clientX;
    var header = document.getElementById('anant3');
    header.style.backgroundPosition = mousex/1.4 + 'px 0';
}, false);
document.addEventListener('mousemove', function (event) {
    if (window.event) { // IE fix
        event = window.event;
    }

    // Grab the mouse's X-position.
    var mousex = event.clientX;
    var header = document.getElementById('anant4');
    header.style.backgroundPosition = mousex/1.4 + 'px 0';
}, false);