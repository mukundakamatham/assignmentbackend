const mongoose = require('mongoose');
var Schema = mongoose.Schema;
// step 1 :- create the schema for drug2
const drug2Schema = new mongoose.Schema({
  id: { type: Number, required: false },

  fields: {type:Array,required:true
   
  //  Schema.Types.Mixed(),
  
  },
});

// step 2 :- connect the schema to the drug2 collection
const User = mongoose.model('drug2', drug2Schema); // drug2

module.exports = User;
