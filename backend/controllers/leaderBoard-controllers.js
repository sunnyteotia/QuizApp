const Attempt = require("../models/Attempt"); // Quiz attempt model
const User = require("../models/User"); // User model

const leaderBoard = async (req, res) => {
  try {
    const { id } = req.params; // id is quizId

    // ✅ Find top attempts for this quiz
    const attempts = await Attempt.find({ quizId: id }).sort({ score: -1 }).limit(10);
    const userDetails=req.userInfo;
    // ✅ Fetch usernames based on userIds
    const leaderboard = await Promise.all(
      attempts.map(async (attempt) => {
        const user = await User.findById(userDetails.userId); // Fetch username using userId
        return {
          username: user ? user.username : "Unknown", // Handle missing users
          score: attempt.score,
          attempts: await Attempt.countDocuments({ userId: userDetails.userId, quizId: id }) // Fix quizId reference
        };
      })
    );
    res.status(200).json({
      data: { leaderboard,userDetails },
      message: "Quiz leaderboard fetched successfully",
    });
  } catch (error) {
    console.error("Error fetching quiz leaderboard:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { leaderBoard };