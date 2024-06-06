import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton'

const Messages = () => {

  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();


  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100)
  }, [messages])


  return (
    <div className='px-4 flex-1 overflow-auto'>

      {!loading && messages.length > 0 && messages.map((messages) => (
        <div key={messages._id} ref={lastMessageRef}>
          <Message message={messages} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className='text-center'>메세지를 보내서 대화를 시작하세요!</p>
      )}
    </div>
  )
}

export default Messages

//overflow-auto 우측에 스크롤바 만들어 줌

// STARTER CODE SNIPPET

// import React from 'react'
// import Message from './Message'

// const Messages = () => {
//   return (
//     <div className='px-4 flex-1 overflow-auto'> // overflow-auto adds scroll bar on the right side
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />



//     </div>
//   )
// }

// export default Messages
