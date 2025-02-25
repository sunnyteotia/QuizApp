# 🚀 QuizApp Backend

This is the backend server for **QuizApp**, built with **Node.js, Express, and MongoDB**. It handles authentication, quiz management, leaderboard, and quiz attempts.

🔗 **Live Backend API:** [QuizApp Backend on Render](https://quizapp-2-ui7y.onrender.com)

---

## 📌 Features
- ✅ **User Authentication** (Register & Login)
- 🎯 **Quiz Management** (Add, Fetch Quizzes by ID)
- 🏆 **Leaderboard System**
- 📊 **Attempt Saving & History**
- 🔐 **JWT-based Authentication**

---

## 🛠️ Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Render](https://img.shields.io/badge/Deployed_on-Render-blue?style=for-the-badge)

---

## 🚀 Getting Started

### **1️⃣ Clone the Repository**
```bash
  git clone https://github.com/yourusername/QuizApp-Backend.git
  cd QuizApp-Backend
```

### **2️⃣ Install Dependencies**
```bash
  npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file in the root directory and add the following:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### **4️⃣ Start the Server**
For development mode (auto-restart with nodemon):
```bash
  npm run dev
```
For production mode:
```bash
  npm start
```

### **5️⃣ API Endpoints**
| Method | Endpoint | Description |
|--------|-------------|----------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Login user & get JWT token |
| `POST` | `/api/quiz` | Create a new quiz |
| `GET` | `/api/quiz/:id` | Fetch a quiz by ID |
| `POST` | `/api/quiz/attempt` | Save a quiz attempt |
| `GET` | `/api/leaderboard` | Fetch leaderboard |

---

## 🌍 Deployment on Render
This backend is deployed on **Render** and is live at:
🔗 **[https://quizapp-2-ui7y.onrender.com](https://quizapp-2-ui7y.onrender.com)**

To deploy your backend on Render:
1. Create an account on [Render](https://render.com/)
2. Connect your GitHub repository
3. Select `backend` as the root directory
4. Set the environment variables (`MONGO_URI`, `JWT_SECRET`, `PORT`)
5. Click **Deploy** 🚀

---

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

💡 **Contributions, issues, and feature requests are welcome!** 🎉

