const express=require('express');
const authMiddleware = require('../middleware/auth-middleware');
const { leaderBoard } = require('../controllers/leaderBoard-controllers');
const router=express.Router();

router.get('/:id',authMiddleware,leaderBoard);


module.exports=router;