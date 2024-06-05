import React from 'react'
import Message from './Message'

const Messages = () => {
  return (
    <div className='px-4 flex-1 overflow-auto'> 
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
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
