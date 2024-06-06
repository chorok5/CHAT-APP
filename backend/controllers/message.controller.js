import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";


export const sendMessage = async (req, res) => {
    try {
        const {message} = req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id; // 인증된 사용자 ID

        // console.log("Sender ID:", senderId); // 로그 추가
        // console.log("Receiver ID:", receiverId); // 로그 추가

        if (!senderId){
            return res.status(401).json({ error: "Not authorized" });
        }

        // create conversation
        let conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, receiverId]
            },
        });

        // if conversation not found
        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        // DB에 저장하려면 save 해야함!! 아래는 순차적으로 처리되는 코드.
        // await newMessage.save();
        // await conversation.save();

        // 동시에 처리됨
        await Promise.all([newMessage.save(), conversation.save()]);
        

        // SOCKET IO
        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }


        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in login", error);
        res.status(500).json({ error: error.message });
    }
};


export const getMessages = async (req, res) => {
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id; 
        const conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, userToChatId]
            },
        }).populate("messages"); // messages array에 push한다.

        if(!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(200).json(messages);
        
    } catch (error) {
        console.log("Error in login", error);
        res.status(500).json({ error: error.message });
    }
}