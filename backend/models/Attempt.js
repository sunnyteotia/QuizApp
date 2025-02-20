const mongoose = require('mongoose');
const AttemptSchema = new mongoose.Schema({
    userId: {
        type:String,
        required:true,
        trim:true
    },
    quizId:{
        type:String,
        required:true,
        trim:true
    },
    score: Number,
    answers: [{ questionId: String, selectedOption: String }],
    timestamp: Date,
  });
  module.exports =mongoose.model('Attempt',AttemptSchema);