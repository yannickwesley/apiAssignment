let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ConnectionsSchema = Schema({
 login : String,
 password : String
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Connection', ConnectionsSchema);
