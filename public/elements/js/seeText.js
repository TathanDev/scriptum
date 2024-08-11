
function setInfos(id) {
    console.log(id)
    fetch(`/api/get-text/${id}` , {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
    .then((response) => {
        
        var divId = document.getElementById(`text`)
        var text = response.text
        
        document.title = text.text_title;
        if (response.textExist) {
            divId.querySelector("#title").innerHTML  = text.text_title
            divId.querySelector("#author").innerHTML  = text.text_author
            divId.querySelector("#content").innerHTML  = text.text_content

            fetch(`/api/get-user/pseudo/${text.text_author}` , {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then((response) => response.json())
            .then((response) => {
                divId.querySelector("#link").href = "../account/" + response.id_user
            })        
        }
    })
}
