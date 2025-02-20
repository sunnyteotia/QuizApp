const express=require('express');
const { createQuiz, getQuiz, getAllQuizzes }=require('../controllers/quiz-controllers');
const authMiddleware = require('../middleware/auth-middleware');
const isAdminUser = require('../middleware/admin-middleware');
const router=express.Router();

router.post('/add',authMiddleware,isAdminUser,createQuiz);
router.get('/get/:id',authMiddleware,getQuiz);
router.get('/quizzes',authMiddleware,getAllQuizzes);
module.exports=router;

