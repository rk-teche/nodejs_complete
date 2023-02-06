const { addNewContact, getAllContact, getContact, deleteContact, updateContact } = require("../controllers/crmController")
const { login, loginRequired, register } = require("../controllers/userController")

const routes = (app) => {
    if(!app) return;

    // for contact
    app.route('/contact').get((req, res, next) => {
        // middleware
        console.log(`Reqest from ${req.originalUrl}`)
        next()
    }, loginRequired, getAllContact)
    .post(loginRequired, addNewContact)
    
    app.route('/contact/:id').get(loginRequired, getContact).put(loginRequired, updateContact).delete(loginRequired, deleteContact)

    // for user
    app.route('/register').post(register)
    app.route('/login').post(login)

}

export default routes;