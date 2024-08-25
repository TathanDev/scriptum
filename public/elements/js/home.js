function setLatestText() {

    for(let id = 0; id < 6; id++) {

        fetch(`/api/get-text/${id}` , {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => response.json())
        .then((response) => {

            var text = response.text
            
            var link = document.createElement("a")
            link.href = "text/" + id
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
            document.getElementById("demoText").appendChild(link)
        })
    }
}

if ('serviceWorker' in navigator) {
   window.addEventListener('load', function() {
     navigator.serviceWorker.register('/serviceWorker.js').then(function(registration) {
       console.log('ServiceWorker registration successful with scope: ', registration.scope);
     }, function(err) {
       console.log('ServiceWorker registration failed: ', err);
     });
   });
}
  
