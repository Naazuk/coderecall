import React from 'react';

function ChatbotIcon() {
  return (
    <button id="chatbot-icon" style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#4CAF50', borderRadius: '50%', width: '60px', height: '60px', border: 'none' }}>
      <img src="path_to_your_icon_image.png" alt="Chatbot" style={{ width: '100%', height: '100%' }} />
    </button>
  );
}

export default ChatbotIcon;
