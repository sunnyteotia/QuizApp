const express=require('express');
const authMiddleware = require('../middleware/auth-middleware');
const isAdminUser = require('../middleware/admin-middleware');
const { saveAttempt, fetchAttemptById } = require('../controllers/attempt-controller');
const router=express.Router();

router.post('/save',authMiddleware,saveAttempt);
router.get('/get/:id',authMiddleware,fetchAttemptById);
module.exports = router;