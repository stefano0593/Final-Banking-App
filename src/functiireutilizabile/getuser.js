export function getUser(email, users) {
    for (let user = 0; user < users.length; user++) {
        if (users[user].email === email) {
            return users[user];
        }
    }
}
// iterare in lista useri pentru verificare email si returneaza userul gasit
