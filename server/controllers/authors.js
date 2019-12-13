require('../models/author')

const mongoose = require('mongoose'),
    Author = mongoose.model('Author');

module.exports = {
    
    index: (req,res) => {
        Author.find().sort({name: 1})
            .then(authors => res.json({results: authors}))
            .catch(err => res.json({errors: err.errors}))
    },

    create: (req,res) => {
        Author.create(req.body)
            .then(authors => res.json({results: authors}))
            .catch(err => res.json({errors: err.errors}))
    },

    show: (req,res) => {
        Author.findById(req.params.id)
            .then(authors => res.json({results: authors}))
            .catch(err => res.json({errors: err.errors}))
    },

    update: (req,res) => {
        Author.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators:true, useFindAndModify:false})
            .then(authors => res.json({results: authors}))
            .catch(err => res.json({errors: err.errors}))
    },

    destroy: (req,res) => {
        Author.deleteOne({_id: req.params.id})
            .then(authors => res.json({results: authors}))
            .catch(err => res.json({errors: err.errors}))
    },

    // createReview: (req,res) => {
    //     Review.create(req.body)
    //         .then(reviews => {
    //             Cake.findByIdAndUpdate(req.params.id, {$push:{reviews: reviews}})
    //                 .then(results => res.json({results: reviews}))
    //                 .catch(err => res.json({errors: err.errors}))
    //         })
    // },

}