import React, { useState } from 'react'
import useConversation from '../zustand/useConversation';
import { toast } from 'react-hot-toast';

const useSendMessage = () => {

    const [loading, setLoading] = useState(false)
    const {messages, setMessages, selectedConversation} = useConversation()

    const sendMessage = async (message) => {
        setLoading(true)
        try {
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({message}) // 메시지를 객체로 감싸서 전송해야 함. = 몽고db는 객체 형태로 저장함. 
            })

            const data = await res.json();
            if(data.error) throw new Error(data.error);

            setMessages([...messages, data]);

            } catch (error) {
                toast.error(error.message)
            } finally{
                setLoading(false);
            }
        }

    return {loading, sendMessage};
    }

export default useSendMessage