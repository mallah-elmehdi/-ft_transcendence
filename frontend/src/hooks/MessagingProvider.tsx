// import React, {useState, createContext} from 'react';
//
// // @ts-ignore
// export const MessagesContext = createContext();
//
// type Props = {
//     children: JSX.Element,
// }
//
// const MessagingProvider = ({children}: Props) => {
//     const [typingMessage, setTypingMessage] = useState('');
//     const [messages, setMessages] = useState([
//         { isSender: false, content: 'asddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdas' },
//         { isSender: true, content: 'asddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdas' }
//     ]);
//
//     const [chatDetails, setChatDetails] = useState(false)
//     const toggleDetails = () => {
//         setChatDetails(!chatDetails)
//     }
//
//     return (
//         <MessagesContext.Provider
//             value={{
//                 typingMessage: typingMessage,
//                 setTypingMessage: setTypingMessage,
//                 messages: messages,
//                 setMessages: setMessages,
//                 toggleDetails: toggleDetails,
//                 chatDetails: chatDetails,
//             }}
//         >
//             {children}
//         </MessagesContext.Provider>
//     );
//
// };
//
// export default MessagingProvider;