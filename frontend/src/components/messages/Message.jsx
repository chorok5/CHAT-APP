import React from 'react'

const Message = () => {
    return (
        <div className='chat chat-end'>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                <img alt='tailwind chat bubble component' src={"https://cdn2.iconfinder.com/data/icons/emoji-line/32/emoji_15-512.png"}/>
                </div>
            </div>
            <div className={`chat-bubble text-white bg-blue-500`}>Hi! What's upp?</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>

        </div>
    )
}

export default Message



// STARTER CODE SNIPPET

// import React from 'react'

// const Message = () => {
//     return (
//         <div className='chat chat-end'>
//             <div className='chat-image avatar'>
//                 <div className='w-10 rounded-full'>
//                 <img alt='tailwind chat bubble component' src={"https://cdn2.iconfinder.com/data/icons/emoji-line/32/emoji_15-512.png"}/>

//                 </div>
//             </div>
//             <div className={`chat-bubble text-white bg-blue-500`}>Hi! What's upp?</div>
//             <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>

//         </div>
//     )
// }

// export default Message
