import React, { useState, useEffect, useRef, useMemo } from 'react';
import './ChatBox.scss';
import { useChat } from '../../context/useChat';
import type { Message } from '../../context/ChatTypes';

const ChatBox: React.FC = () => {
  const { state, closeChat, sendMessage, getConversation, getMessages } = useChat();
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const activeConversation = state.activeConversationId
    ? getConversation(state.activeConversationId)
    : null;
  const messages = useMemo(
    () => (state.activeConversationId ? getMessages(state.activeConversationId) : []),
    [state.activeConversationId, getMessages]
  );

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (state.isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [state.isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = () => {
    if (!inputMessage.trim() || !state.activeConversationId) return;

    sendMessage(inputMessage, state.activeConversationId);
    setInputMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const formatDate = (timestamp: number): string => {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Hôm nay';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Hôm qua';
    } else {
      return date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' });
    }
  };

  const renderMessage = (message: Message, index: number) => {
    const isUser = message.senderId === 'user';
    const showDate =
      index === 0 ||
      formatDate(messages[index - 1].timestamp) !== formatDate(message.timestamp);

    return (
      <React.Fragment key={message.id}>
        {showDate && (
          <div className="chatBox__date-divider">
            <span>{formatDate(message.timestamp)}</span>
          </div>
        )}
        <div className={`chatBox__message ${isUser ? 'chatBox__message--user' : 'chatBox__message--seller'}`}>
          {!isUser && (
            <div className="chatBox__message-avatar">
              {activeConversation?.sellerAvatar ? (
                <img src={activeConversation.sellerAvatar} alt={message.senderName} />
              ) : (
                <div className="chatBox__message-avatar-placeholder">
                  {message.senderName.charAt(0)}
                </div>
              )}
            </div>
          )}
          <div className="chatBox__message-content">
            <div className="chatBox__message-bubble">
              {message.content}
            </div>
            <div className="chatBox__message-time">{formatTime(message.timestamp)}</div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  if (!state.isOpen) return null;

  return (
    <div className="chatBox">
      <div className="chatBox__header">
        <div className="chatBox__header-info">
          <div className="chatBox__header-avatar">
            {activeConversation?.sellerAvatar ? (
              <img src={activeConversation.sellerAvatar} alt={activeConversation.sellerName} />
            ) : (
              <div className="chatBox__header-avatar-placeholder">
                {activeConversation?.sellerName.charAt(0) || 'S'}
              </div>
            )}
            {activeConversation?.isOnline && <div className="chatBox__header-online" />}
          </div>
          <div className="chatBox__header-details">
            <h3 className="chatBox__header-name">
              {activeConversation?.sellerName || 'Người bán'}
            </h3>
            <p className="chatBox__header-status">
              {activeConversation?.isOnline ? 'Đang hoạt động' : 'Không hoạt động'}
            </p>
          </div>
        </div>
        <button className="chatBox__header-close" onClick={closeChat}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="chatBox__messages">
        {messages.length === 0 ? (
          <div className="chatBox__empty">
            <div className="chatBox__empty-icon">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M32 8C18.745 8 8 17.64 8 29.714c0 6.48 3.176 12.264 8.182 16.28v8.006c0 1.104.896 2 2 2 .304 0 .6-.07.872-.204l9.14-4.57c1.254.21 2.536.316 3.806.316 13.254 0 24-9.64 24-21.714C56 17.64 45.254 8 32 8z"
                  fill="#E5E7EB"
                />
              </svg>
            </div>
            <p className="chatBox__empty-text">Chưa có tin nhắn nào</p>
            <p className="chatBox__empty-subtext">Hãy bắt đầu cuộc trò chuyện!</p>
          </div>
        ) : (
          <>
            {messages.map((message, index) => renderMessage(message, index))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      <div className="chatBox__input">
        <input
          ref={inputRef}
          type="text"
          placeholder="Nhập tin nhắn..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          className="chatBox__input-field"
        />
        <button
          className={`chatBox__input-send ${inputMessage.trim() ? 'chatBox__input-send--active' : ''}`}
          onClick={handleSend}
          disabled={!inputMessage.trim()}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 12L21 3L12 21L10 13L3 12Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
