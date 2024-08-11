function submitText() {
    let title = document.getElementById("title").value
    let type = document.getElementById("type").value
    let content = document.getElementById("content").value

    console.log(title)
    const datas = {
        text_title: title,
        text_type: type,
        text_content: content,
    };
    
    fetch("/text/add-text", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datas)
    })
    .then((response) => response.json())
    .then((response) => {
        if(response.textAdded) {
            alert("C'est good")
        } else {
            alert(response.reason, response.errorMsg)
        }
    })
    .catch((error) => {
        alert(error)
    })

}