import React from 'react'
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({ conversation, lastIdx, emoji }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    const isSelected = selectedConversation?._id === conversation._id;
    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);

    
    // Boring Avatars에서 생성된 이미지 데이터
    // const randomQuery = Math.random().toString(36).substring(7);
    // const profilePic = `https://source.boringavatars.com/?variant=beam&size=200&username=${conversation.username}`;
    
    //console.log(conversation.profilePic);

    return <>
        <div className={`flex gap-2 items-center hober:bg-sky-500 rounded p-2 py-1 cursor-pointer
            ${isSelected ? 'bg-sky-500' : ''}`
        }
            onClick={() => setSelectedConversation(conversation)}
        >
            <div className={`avatar ${isOnline ? 'online' : ''}`}>
                <div className='w-12 rounded-full'>
                    <img src={conversation.profilePic} alt="랜덤아바타" />
                </div>
            </div>
            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                    <span className='text-xl'>{emoji}</span>
                </div>
            </div>
        </div>

        {!lastIdx && <div className='divider my-0 py-0 h-1' />}

    </>;
};


export default Conversation;



// STARTER CODE SNIPPET

// import React from 'react'

// const Conversation = () => {
//     return <>
//         <div className='flex gap-2 items-center hober:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
//             <div className='avatar online'>
//                 <div className='w-12 rounded-full'>
//                     <img src="https://cdn2.iconfinder.com/data/icons/emoji-line/32/emoji_7-512.png" alt="user avatar" />
//                 </div>
//             </div>
//             <div className='flex flex-col flex-1'>
//                 <div className='flex gap-3 justify-between'>
//                     <p className='font-bold text-gray-200'>John Doe</p>
//                     <span className='text-xl'>☠</span>
//                 </div>
//             </div>
//         </div>

//         <div className='divider my-0 py-0 h-1' />

//     </>;
// };

// export default Conversation