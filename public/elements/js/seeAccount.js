function setInfos(id) {
    fetch(`/api/get-user/${id}` , {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
    .then((response) => {
        
        var user = response.user
        var texts = response.texts
        
        document.title = user.pseudo_user

        document.getElementById("pseudo").innerHTML = `Pseudo : ${user.pseudo_user}`
        document.getElementById("id").innerHTML = `User ID : ${user.id_user}`
        
        console.log(typeof(texts))
        texts.forEach(element => {
            var text = element;
            
            var link = document.createElement("a")
            link.href = "../text/" + text.text_id
            link.style.textDecoration = "none"

            var divId = document.createElement("div")
            divId.className = "textBox"


            var infosBox = document.createElement("div")
            infosBox.id = `infosBox`

            var title = document.createElement("h1")
            title.innerHTML  = text.text_title

            var author = document.createElement("h2")
            author.innerHTML  = text.text_author

            infosBox.appendChild(title);
            infosBox.appendChild(author);
            
            divId.appendChild(infosBox);

            var content = document.createElement("p")

            if (text.text_content.length <= 120) {
                content.innerHTML = text.text_content
            } else {
                content.innerHTML = text.text_content.substring(0, 120) + '...';
            }
            content.style.marginLeft = "20px"

            divId.appendChild(content);

            link.appendChild(divId)
            document.getElementById("userTexts").appendChild(link)

        });

    })

    var userIcon = document.getElementById("userLogo");
    userIcon.src = `/elements/img/user-icon-${getCookie("mode")}.png`
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
