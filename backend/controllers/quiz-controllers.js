const Quiz=require('../models/Quizzes');

const createQuiz=async(req,res)=>{
    try{
        const quiz=new Quiz(req.body);
        await quiz.save();
        res.status(201).json({
            message:'Quiz created successfully',
            data:quiz,
        });
    }catch(error){
        res.status(400).json({error:error.message});
    }
}
const getQuiz=async(req,res)=>{
    try{
        const quiz=await Quiz.findById(req.params.id);
        if(!quiz){
            return res.status(404).json({message:'Quiz not found'});
        }
        res.status(200).json({
            message:'Quiz retrieved successfully',
            data:quiz,
        })
    }catch(error){
        res.status(500).json({error:error.message});
    }
}
const getAllQuizzes=async(req,res)=>{
    try{
        // const userDetails=req.userInfo;
        const quizzes=await Quiz.find();
        res.status(200).json({
            message:'All Quizzes retrieved successfully',
            data:{quizzes}
        })
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

module.exports={getQuiz,createQuiz,getAllQuizzes}