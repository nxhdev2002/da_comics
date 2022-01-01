const register = (user, password, method="default") => {
    switch(method) {
        case "google":
            break
        case "facebook":
            break
        default:
            default_login(user, password)
    }
}

export default register;