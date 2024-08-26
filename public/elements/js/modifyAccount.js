var descriptionField = document.getElementById("descriptionField")
var pfpField = document.getElementById("pfpField")
var pfpPreview = document.getElementById("pfpPreview")
var errorField = document.getElementById("errorField")

var userPseudo = ""
var userId = ""


function setInfos(user){


    fetch("/api/get-userid/" + user, {
        method: "GET",
        headers: {
        "Content-Type": "application/json"
        },
    })
    .then((response) => response.json())
    .then((response) => {

        userId = response.userId;
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
            pfpPreview.src = pfpField.value
            document.title = "Paramètre du Compte de " + response.user.pseudo_user
            userPseudo = response.user.pseudo_user
        })

    })
    .catch((error) => {
        //TODO: Redirect
    })
}

async function modifyAccount() {
    
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
    .then((response) => {
        if (response.accountModified) {
            window.location.href = "../account/" + userId
        } else {
            errorField.innerHTML = response.error
        }
    })
}


function updateImage() {
    pfpPreview.src = pfpField.value

}