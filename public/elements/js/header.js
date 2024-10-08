window.onLoad = onLoad()

var mode = "dark";

function toggleMode() {
    let stylesheet = document.getElementById("stylesheetMode");
    let button = document.getElementById("modeButton");
    let link = document.getElementById("modeLink")

    let href;
    if (stylesheet.href.includes("/element/")) {
        href = "elements/css/general"
    } else {
        href = "/elements/css/general"
    }

    if (mode === "light") {
        stylesheet.href = `${href}-dark.css`
        button.textContent = "☀️";
        link.textContent = "Light Mode"
        mode = "dark";
        setModeCookie("dark")
    } else {
        stylesheet.href = `${href}.css`
        button.textContent = "🌙";
        link.textContent = "Dark Mode"
        setModeCookie("light")
        mode = "light";
    }
}

function setModeCookie(cvalue) {
    document.cookie = "mode" + "=" + cvalue + ";path=../";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');

    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function onLoad() {
    mode = getCookie("mode");
    toggleMode();
    toggleMode();
}

function onClick(user) {
    fetch("/api/get-userid/" + user, {
        method: "GET",
        headers: {
        "Content-Type": "application/json"
        },
    })
    .then((response) => response.json())
    .then((response) => {
        document.location.href = "../account/" + response.userId
    })
}

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}
