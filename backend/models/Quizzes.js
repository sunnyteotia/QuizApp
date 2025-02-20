const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim:true
    },
    questions: [
      {
        questionText:{
          type: String,
          required: true,
          trim: true,
        },
        options: [String],
        correctAnswer: {
          type: String,
          required: true,
          trim: true,
        },
        timeLimit: Number,  // in seconds
      }
    ],
  },{timestamps:true});
  module.exports = mongoose.model('Quiz', QuizSchema);
  