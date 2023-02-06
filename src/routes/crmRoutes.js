const { addNewContact, getAllContact, getContact, deleteContact, updateContact } = require("../controllers/crmController")

const routes = (app) => {
    if(!app) return;

    app.route('/contact').get((req, res, next) => {
        // middleware
        console.log(`Reqest from ${req.originalUrl}`)
        next()
    }, getAllContact)
    .post(addNewContact)
    
    app.route('/contact/:id').get(getContact).put(updateContact).delete(deleteContact)
}

export default routes;