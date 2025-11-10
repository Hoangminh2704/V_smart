import React from 'react';
import './ChatList.scss';
import { useChat } from '../../context/useChat';

const ChatList: React.FC = () => {
  const { state, openChat, closeChatList } = useChat();

  const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Vừa xong';
    if (diffMins < 60) return `${diffMins} phút`;
    if (diffHours < 24) return `${diffHours} giờ`;
    if (diffDays < 7) return `${diffDays} ngày`;
    
    return date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' });
  };

  const handleConversationClick = (conversationId: string) => {
    openChat(conversationId);
  };

  if (!state.isChatListOpen) return null;

  return (
    <div className="chatList">
      <div className="chatList__header">
        <h3 className="chatList__header-title">Chat</h3>
        <button className="chatList__header-close" onClick={closeChatList}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="chatList__content">
        {state.conversations.length === 0 ? (
          <div className="chatList__empty">
            <div className="chatList__empty-icon">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M40 10C23.431 10 10 22.05 10 37.143c0 8.1 3.97 15.33 10.228 20.35v10.007c0 1.38 1.12 2.5 2.5 2.5.38 0 .75-.087 1.09-.255l11.425-5.713c1.568.263 3.17.395 4.757.395 16.568 0 30-12.05 30-27.143C70 22.05 56.568 10 40 10z"
                  fill="#E5E7EB"
                />
              </svg>
            </div>
            <p className="chatList__empty-text">Chưa có tin nhắn</p>
            <p className="chatList__empty-subtext">
              Bắt đầu cuộc trò chuyện với người bán ngay!
            </p>
          </div>
        ) : (
          <div className="chatList__conversations">
            {state.conversations.map((conversation) => (
              <div
                key={conversation.id}
                className="chatList__item"
                onClick={() => handleConversationClick(conversation.id)}
              >
                <div className="chatList__item-avatar">
                  {conversation.sellerAvatar ? (
                    <img src={conversation.sellerAvatar} alt={conversation.sellerName} />
                  ) : (
                    <div className="chatList__item-avatar-placeholder">
                      {conversation.sellerName.charAt(0)}
                    </div>
                  )}
                  {conversation.isOnline && <div className="chatList__item-online" />}
                </div>
                
                <div className="chatList__item-content">
                  <div className="chatList__item-header">
                    <h4 className="chatList__item-name">{conversation.sellerName}</h4>
                    {conversation.lastMessage && (
                      <span className="chatList__item-time">
                        {formatTime(conversation.lastMessage.timestamp)}
                      </span>
                    )}
                  </div>
                  <div className="chatList__item-preview">
                    <p className="chatList__item-message">
                      {conversation.lastMessage?.content || 'Bắt đầu cuộc trò chuyện'}
                    </p>
                    {conversation.unreadCount > 0 && (
                      <div className="chatList__item-badge">
                        {conversation.unreadCount > 99 ? '99+' : conversation.unreadCount}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatList;
