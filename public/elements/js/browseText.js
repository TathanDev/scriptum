function browse() {

    const type = document.querySelector('input[name="type"]:checked').value;


    fetch(`/api/get-texts/${type}` , {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
    .then((response) => {
        
        const node = document.getElementById("results")

        while (node.hasChildNodes()) {
            node.removeChild(node.lastChild);
        }

        var texts = response.texts
        

        if (texts.length == 0) {

            var title = document.createElement("h1")
            title.innerHTML = "Aucun texte trouvé "
            document.getElementById("results").appendChild(title)

            return
        }

        texts.forEach(element => {
            var text = element;
            
            var link = document.createElement("a")
            link.href = "../text/" + text.text_id
            link.style.textDecoration = "none"

            var divId = document.createElement("div")
            divId.className = "textBox"


            var infosBox = document.createElement("div")
            infosBox.className = `infosBox`

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
            document.getElementById("results").appendChild(link)

        });

    })
}
