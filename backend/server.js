// 패키지 import
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// 파일 import
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js"; // socket.js에서 생성 후 import

dotenv.config();

// variables
// const app = express(); -> socket.js로 옮김.
const PORT = process.env.PORT || 5000;

connectToMongoDB();

// 미들웨어 
app.use(express.json()); // req.body로부터 필드 추출
app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

server.listen(PORT, () => { // socket 생성 후 app을 server로 변경함.
    connectToMongoDB();
    console.log(`서버 ${PORT} 포트에서 돌아가는 중 `)
});





// app.get("/", (req, res) => {
//     res.send("Hello, World!");
// });