const Attempt=require('../models/Attempt')
const {calculateScore}=require('../helper/helperFunctions')
const saveAttempt=async(req,res)=>{
    try{
          const userDetails=req.userInfo;
        const { quizId, answers } = req.body;
        const userId=userDetails.userId;
        const score = calculateScore(answers);
        const attempt = new Attempt({ userId, quizId, score, answers, timestamp: new Date() });
        await attempt.save();
        res.status(201).json({ data:score,message:"Attempt saved succesfully" });
    }catch(e){
        console.error(e)
        res.status(500).json({message: 'Server Error'})
    }
}
const fetchAttemptById=async(req,res)=>{
    try{
        const attempt = await Attempt.findById(req.params.id);
        if(!attempt) return res.status(404).json({message: 'Attempt not found'})
        res.status(200).json({data:attempt})
    }catch(e){
        console.error(e)
        res.status(500).json({message: 'Server Error'})
    }
}
module.exports = {saveAttempt,fetchAttemptById}