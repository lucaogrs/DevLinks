const checkbox = document.getElementById('checkbox');
const body = document.body;

checkbox.addEventListener('click', function () {
    if (this.checked) {
        applyLightMode();
    } else {
        applyDarkMode();
    }
});

function applyDarkMode() {
    if (window.innerWidth <= 480) {
        body.style.backgroundImage = "url('./img/mobile-bg.jpg')";
    } else {
        body.style.backgroundImage = "url('./img/desktop-bg.jpg')";
    }
     // Restaura as cores do texto para o modo escuro
     document.querySelectorAll('.container-header h1, .container-header p, .un-links a, .un-social i, footer p').forEach(element => {
        element.style.color = "var(--color-white)";
    });

    document.querySelectorAll('.un-links a').forEach(link => {
        link.style.background = "rgba(255, 255, 255, 0.1)";
        link.style.borderRadius = "16px";
    });
}

function applyLightMode() {
    if (window.innerWidth <= 480) {
        body.style.backgroundImage = "url('./img/mobile-bg-white.jpg')";
    } else {
        body.style.backgroundImage = "url('./img/desktop-bg-white.jpg')";
    }

    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";

    document.querySelectorAll('.container-header h1, .container-header p, .un-links a, .un-social i, footer p').forEach(element => {
        element.style.color = "var(--color-black)";
    });

    document.querySelectorAll('.un-links a').forEach(link => {
        link.style.background = "rgb(13, 1, 26, 0.1)";
        link.style.borderRadius = "16px";
    });
}
if (checkbox.checked) {
    applyLightMode();
} else {
    applyDarkMode();
}