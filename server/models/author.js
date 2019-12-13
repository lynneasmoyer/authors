const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');


const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You must include a name."],
        unique: true,
        minlength: [3, "Author's name must be at least 3 characters."],
    },
    book1: {
        type: String,
        minlength: [5, "A book title should be longer than that."]
    },
    book2: {
        type: String,
        minlength: [5, "A book title should be longer than that."]
    },
    book3: {
        type: String,
        minlength: [5, "A book title should be longer than that."]
    },
    
}, {timestamps:true});

AuthorSchema.plugin(uniqueValidator, {message: "That name already exists!"});


mongoose.model("Author", AuthorSchema);
