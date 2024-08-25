var descriptionField = document.getElementById("descriptionField")
var pfpField = document.getElementById("pfpField")
var userPseudo = ""

function setInfos(user){


    fetch("/api/get-userid/" + user, {
        method: "GET",
        headers: {
        "Content-Type": "application/json"
        },
    })
    .then((response) => response.json())
    .then((response) => {

        
        fetch(`/api/get-user/${response.userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => response.json())
        .then((response) => {
            console.log(response)

            descriptionField.value = response.user.description_user
            pfpField.value = response.user.pfp_user
            document.title = "Paramètre du Compte de " + response.user.pseudo_user
            userPseudo = response.user.pseudo_user
        })

    })
    .catch((error) => {
        //TODO: Redirect
    })
}

document.querySelector("form").addEventListener("submit", async (e) => {

    e.preventDefault()
    console.log(userPseudo)
    const datas = {
        description_user: descriptionField.value,
        pfp_user: pfpField.value,
        userPseudo: userPseudo,
    };
    
    fetch("/user/update-user/", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(datas),

    })
    .then((response) => response.json())
})
