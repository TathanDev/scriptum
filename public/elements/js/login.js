document.querySelector("form").addEventListener("submit", async (e) => {

    e.preventDefault()
    const datas = {
        pseudo: e.target[0].value,
        password: e.target[1].value,
    };
    
    fetch("/user/connection", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datas)
    })
    .then((response) => response.json())
    .then((response) => {
        if (response.connected) {

            alert("You are connected")
            document.location.href = "/home";

        } else {
            alert("No user exist with theses crendentials")
        }
    })
    .catch((error) => {
        console.error(error)
        alert(error)
    })
})