var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var Report  = mongoose.model('Report',{
  date :{
    type: Date, default: Date.now 
  },
  studentId:{
    type:String,
    unique:true,
    trim: true    //removes whitespaces from start and end
  },
  fieldId:{
    type:String
  }
 

});

module.exports = {
  Report
};
