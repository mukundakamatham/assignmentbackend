const mongoose = require('mongoose');
var Schema = mongoose.Schema;
// step 1 :- create the schema for drug1
const userSchema = new mongoose.Schema({
  id: { type: Number, required: false },
  fields: { type: Array, required: true },
});
// step 2 :- connect the schema to the Drug1 collection
const User = mongoose.model('user', userSchema); // drug1

module.exports = User;
