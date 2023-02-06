// function which send data to database and update it

const { model } = require('mongoose')
const { ContactSchema } = require('../models/crmModel')

const Contact = model('Contact', ContactSchema)

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body)
    /**
     * Note - before save your data, run validation first then save it
     * Ref: https://www.npmjs.com/package/validator
     */
    newContact.save((err, contact) => {
        if(err){
            res.send(err)
        }
        res.json(contact)
    })
}

export const getAllContact = (req, res) => {
    Contact.find({}, (err, contact) => {
        if(err){
            res.send(err)
        }
        res.json(contact)
    })
}

export const getContact = (req, res) => {
    Contact.findById(req.params.id, (err, contact) => {
        if(err){
            res.send(err)
        }
        res.json(contact)
    })
}

export const deleteContact = (req, res) => {
    // Contact.remove // both deleteOne and remove can be used
    Contact.deleteOne({"_id": req.params.id}, (err, contact) => {
        if(err){
            res.send(err)
        }
        res.json(contact)
    })
}

export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({"_id": req.params.id}, req.body, {new: true}, (err, contact) => {
        if(err){
            res.send(err)
        }
        res.json(contact)
    })
}
