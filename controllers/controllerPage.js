
export const accueil = (req, res) => {

    res.render("home.ejs", { cookieUser: req.cookies.user})
}

export const createAccount = (req, res) => {
    if(req.cookies.user) {
        return res.redirect("/home")
    }
    res.render("createAccount.ejs", { cookieUser: req.cookies.user})
}


export const login = (req, res) => {
    if(req.cookies.user) {
        return res.redirect("/home")
    }
    res.render("login.ejs", { cookieUser: req.cookies.user})
}

export const addText = (req, res) => {
    if(req.cookies.user) {
       return res.render("addText.ejs", { cookieUser: req.cookies.user})

    }
    return res.redirect("/login")

}

export const createDocumentation = (req, res) => {

    res.render("documentation.ejs", { cookieUser: req.cookies.user})
}

export const seeText = (req, res) => {

    res.render("seeText.ejs", { cookieUser: req.cookies.user, textId: req.params.id})
}

export const seeAccount = (req, res) => {

    res.render("seeAccount.ejs", { cookieUser: req.cookies.user, userId: req.params.id})
}

export const browseText = (req, res) => {

    res.render("browseText.ejs", { cookieUser: req.cookies.user})
}

export const cgu = (req, res) => {

    res.render("cgu.ejs", { cookieUser: req.cookies.user})
}

export const modifyAccount = (req, res) => {
    if(req.cookies.user) {
       return res.render("account/modifyAccount.ejs", { cookieUser: req.cookies.user})
    }
    return res.redirect("/login")

}