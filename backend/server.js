// 패키지 import
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";

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

const __dirname = path.resolve(); // 배포 준비

connectToMongoDB();

// 미들웨어 
app.use(cors());
app.use(express.json()); // req.body로부터 필드 추출
app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

app.use(express.static(path.join(__dirname,"/frontend/dist"))); // express.static 미들웨어 이용해서 dist폴더로 포함

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})

server.listen(PORT, () => { // socket 생성 후 app을 server로 변경함.
    connectToMongoDB();
    console.log(`서버 ${PORT} 포트에서 돌아가는 중 `)
});





// app.get("/", (req, res) => {
//     res.send("Hello, World!");
// });