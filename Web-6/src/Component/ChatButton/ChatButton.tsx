import React, { useState, useEffect } from 'react';
import './ChatButton.scss';
import { useChat } from '../../context/useChat';

const ChatButton: React.FC = () => {
  const { openChatList, getTotalUnreadCount, state } = useChat();
  const [unreadCount, setUnreadCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setUnreadCount(getTotalUnreadCount());
  }, [state.conversations, getTotalUnreadCount]);

  useEffect(() => {
    // Show button after a short delay for better UX
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    openChatList();
  };

  return (
    <div className={`chatButton ${isVisible ? 'chatButton--visible' : ''}`} onClick={handleClick}>
      <div className="chatButton__icon">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14 2C7.373 2 2 6.82 2 12.857c0 3.24 1.588 6.132 4.091 8.14v4.003c0 .552.448 1 1 1 .152 0 .3-.035.436-.102l4.57-2.285c.627.105 1.268.158 1.903.158 6.627 0 12-4.82 12-10.857C26 6.82 20.627 2 14 2z"
            fill="currentColor"
          />
        </svg>
        {unreadCount > 0 && (
          <div className="chatButton__badge">{unreadCount > 99 ? '99+' : unreadCount}</div>
        )}
      </div>
      <div className="chatButton__text">Chat</div>
    </div>
  );
};

export default ChatButton;
