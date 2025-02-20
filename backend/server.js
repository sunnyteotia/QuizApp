require("dotenv").config();
const express = require("express");
const cors = require("cors");  // Import CORS
const connectToDB = require("./database/db");
const authRoutes = require("./routes/auth-routes");
const homeRoutes = require("./routes/home-routes");
const adminRoutes = require("./routes/admin-routes");
const quizRoutes = require('./routes/quiz-routes');
const attemptRoutes=require('./routes/attempt-routes');
const leaderBoardRoutes = require('./routes/leaderBoard-routes');
// Connect to Database
connectToDB();

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Middleware to Enable CORS
app.use(cors({
    origin: "http://localhost:4000",  // Replace with your frontend URL
    credentials: true
}));

// ✅ Middleware to Parse JSON Requests
app.use(express.json());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/admin", adminRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/attempt',attemptRoutes);
app.use('/api/leaderboard', leaderBoardRoutes);
// ✅ Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
