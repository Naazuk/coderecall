// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';

// const socket = io('http://localhost:3000');

// const TeamChat = ({ teamId }) => {
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     socket.emit('joinTeam', teamId);

//     socket.on('chatMessage', (msg) => {
//       setMessages(prevMessages => [...prevMessages, msg]);
//     });

//     return () => {
//       socket.off('chatMessage');
//     };
//   }, [teamId]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     socket.emit('chatMessage', { teamId, message });
//     setMessage('');
//   };

//   return (
//     <div>
//       <ul>
//         {messages.map((msg, index) => (
//           <li key={index}>{msg.message}</li>
//         ))}
//       </ul>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message" required />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// };

// export default TeamChat;
