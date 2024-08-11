
document.querySelector("#pseudoInput").addEventListener("input", (e) => {
    console.log("IYbhb")
    if(e.target.value) {

        fetch(`/user/verify-pseudo?pseudo=${e.target.value}`, {
            method: "GET"
        })
        .then((response) => response.json())
        .then((response) => {

            if(!response.disponible) {
                document.getElementById("pseudoText").text = `The Pseudo is already in use`
                document.getElementById("submit").disabled = true

            } else if (response.error) {
                alert("Une erreur est survenue")
                console.error(response.errorMsg)
            } else {
                document.getElementById("pseudoText").text = `Pseudo`
                document.getElementById("submit").disabled = false
            }
        })
    }


})


document.querySelector("form").addEventListener("submit", async (e) => {

    e.preventDefault()
    const datas = {
        pseudo_user: e.target[0].value,
        mail_user: e.target[1].value,
        password: e.target[2].value,
    };
    
    fetch("/user/account-creation", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datas)
    })
    .then((response) => response.json())
    .then((response) => {
        if (response.accountAlreadyExist) {

            alert("This User already exist")
        } else if(response.accountCreated) {
            alert("Compte créé !")
            document.location.href = "../account/" + response.user.id_user

        } else {
            if(response.error == "Error DB") {
                console.error(response.msgErreur)
                alert(response.msgErreur)
            } else if(response.error == "Password hash") {
                console.error(response.msgErreur)
                alert(response.msgErreur)
            } else {
                alert("Une erreur est survenue")
            }
        }
    })
    .catch((error) => {
        console.error(error)
        alert(error)
    })
})