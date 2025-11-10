import React, { createContext, useReducer, useEffect, type ReactNode } from 'react';
import type { ChatState, ChatAction, Message, Conversation } from './ChatTypes';
import { demoConversations, demoMessages } from './demoData';

const CHAT_STORAGE_KEY = 'v_smart_chat_data';

const initialState: ChatState = {
  conversations: [],
  messages: {},
  activeConversationId: null,
  isOpen: false,
  isChatListOpen: false,
};

function chatReducer(state: ChatState, action: ChatAction): ChatState {
  switch (action.type) {
    case 'OPEN_CHAT':
      return { ...state, isOpen: true, isChatListOpen: false };
    
    case 'CLOSE_CHAT':
      return { ...state, isOpen: false };
    
    case 'TOGGLE_CHAT':
      return { ...state, isOpen: !state.isOpen };
    
    case 'OPEN_CHAT_LIST':
      return { ...state, isChatListOpen: true, isOpen: false };
    
    case 'CLOSE_CHAT_LIST':
      return { ...state, isChatListOpen: false };
    
    case 'SET_ACTIVE_CONVERSATION': {
      return {
        ...state,
        activeConversationId: action.payload,
        isOpen: action.payload !== null,
        isChatListOpen: false,
      };
    }
    
    case 'ADD_MESSAGE': {
      const message = action.payload;
      const conversationId = message.conversationId;
      
      const updatedMessages = {
        ...state.messages,
        [conversationId]: [...(state.messages[conversationId] || []), message],
      };
      
      // Update conversation's last message and unread count
      const updatedConversations = state.conversations.map(conv => {
        if (conv.id === conversationId) {
          return {
            ...conv,
            lastMessage: message,
            unreadCount: message.senderId !== 'user' ? conv.unreadCount + 1 : conv.unreadCount,
            updatedAt: message.timestamp,
          };
        }
        return conv;
      });
      
      return {
        ...state,
        messages: updatedMessages,
        conversations: updatedConversations,
      };
    }
    
    case 'ADD_CONVERSATION': {
      const exists = state.conversations.find(c => c.id === action.payload.id);
      if (exists) return state;
      
      return {
        ...state,
        conversations: [action.payload, ...state.conversations],
        messages: { ...state.messages, [action.payload.id]: [] },
      };
    }
    
    case 'MARK_AS_READ': {
      const conversationId = action.payload;
      const updatedConversations = state.conversations.map(conv => {
        if (conv.id === conversationId) {
          return { ...conv, unreadCount: 0 };
        }
        return conv;
      });
      
      const updatedMessages = {
        ...state.messages,
        [conversationId]: (state.messages[conversationId] || []).map(msg => ({
          ...msg,
          isRead: true,
        })),
      };
      
      return {
        ...state,
        conversations: updatedConversations,
        messages: updatedMessages,
      };
    }
    
    case 'UPDATE_CONVERSATIONS':
      return { ...state, conversations: action.payload };
    
    case 'UPDATE_MESSAGES':
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.conversationId]: action.payload.messages,
        },
      };
    
    case 'LOAD_FROM_STORAGE':
      return action.payload;
    
    default:
      return state;
  }
}

interface ChatContextType {
  state: ChatState;
  dispatch: React.Dispatch<ChatAction>;
  openChat: (conversationId?: string) => void;
  closeChat: () => void;
  toggleChat: () => void;
  openChatList: () => void;
  closeChatList: () => void;
  sendMessage: (content: string, conversationId: string) => void;
  createConversation: (sellerId: string, sellerName: string, sellerAvatar?: string) => string;
  getTotalUnreadCount: () => number;
  getConversation: (conversationId: string) => Conversation | undefined;
  getMessages: (conversationId: string) => Message[];
}

export const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  // Load from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem(CHAT_STORAGE_KEY);
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        dispatch({ type: 'LOAD_FROM_STORAGE', payload: { ...parsed, isOpen: false, isChatListOpen: false } });
      } catch (error) {
        console.error('Error loading chat data:', error);
      }
    } else {
      // Load demo data if no saved data
      dispatch({ 
        type: 'LOAD_FROM_STORAGE', 
        payload: { 
          conversations: demoConversations,
          messages: demoMessages,
          activeConversationId: null,
          isOpen: false,
          isChatListOpen: false,
        } 
      });
    }
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    const dataToSave = {
      conversations: state.conversations,
      messages: state.messages,
      activeConversationId: state.activeConversationId,
      isOpen: false,
      isChatListOpen: false,
    };
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(dataToSave));
  }, [state.conversations, state.messages, state.activeConversationId]);

  const openChat = (conversationId?: string) => {
    if (conversationId) {
      dispatch({ type: 'SET_ACTIVE_CONVERSATION', payload: conversationId });
      dispatch({ type: 'MARK_AS_READ', payload: conversationId });
    } else {
      dispatch({ type: 'OPEN_CHAT' });
    }
  };

  const closeChat = () => {
    dispatch({ type: 'CLOSE_CHAT' });
  };

  const toggleChat = () => {
    dispatch({ type: 'TOGGLE_CHAT' });
  };

  const openChatList = () => {
    dispatch({ type: 'OPEN_CHAT_LIST' });
  };

  const closeChatList = () => {
    dispatch({ type: 'CLOSE_CHAT_LIST' });
  };

  const sendMessage = (content: string, conversationId: string) => {
    const message: Message = {
      id: `msg_${Date.now()}_${Math.random()}`,
      conversationId,
      senderId: 'user',
      senderName: 'Bạn',
      content,
      timestamp: Date.now(),
      isRead: false,
      type: 'text',
    };

    dispatch({ type: 'ADD_MESSAGE', payload: message });

    // Simulate seller response after 2-5 seconds
    setTimeout(() => {
      const conversation = state.conversations.find(c => c.id === conversationId);
      if (conversation) {
        const autoResponse = getAutoResponse(content);
        const sellerMessage: Message = {
          id: `msg_${Date.now()}_${Math.random()}`,
          conversationId,
          senderId: conversation.sellerId,
          senderName: conversation.sellerName,
          senderAvatar: conversation.sellerAvatar,
          content: autoResponse,
          timestamp: Date.now(),
          isRead: false,
          type: 'text',
        };
        dispatch({ type: 'ADD_MESSAGE', payload: sellerMessage });
      }
    }, Math.random() * 3000 + 2000);
  };

  const createConversation = (sellerId: string, sellerName: string, sellerAvatar?: string): string => {
    // Check if conversation already exists
    const existing = state.conversations.find(c => c.sellerId === sellerId);
    if (existing) {
      return existing.id;
    }

    const conversation: Conversation = {
      id: `conv_${Date.now()}_${Math.random()}`,
      sellerId,
      sellerName,
      sellerAvatar,
      unreadCount: 0,
      isOnline: Math.random() > 0.3, // Random online status
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    dispatch({ type: 'ADD_CONVERSATION', payload: conversation });
    return conversation.id;
  };

  const getTotalUnreadCount = (): number => {
    return state.conversations.reduce((total, conv) => total + conv.unreadCount, 0);
  };

  const getConversation = (conversationId: string): Conversation | undefined => {
    return state.conversations.find(c => c.id === conversationId);
  };

  const getMessages = (conversationId: string): Message[] => {
    return state.messages[conversationId] || [];
  };

  return (
    <ChatContext.Provider
      value={{
        state,
        dispatch,
        openChat,
        closeChat,
        toggleChat,
        openChatList,
        closeChatList,
        sendMessage,
        createConversation,
        getTotalUnreadCount,
        getConversation,
        getMessages,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

// Helper function for auto responses
function getAutoResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase();
  
  if (lowerMessage.includes('giá') || lowerMessage.includes('bao nhiêu')) {
    return 'Dạ, giá sản phẩm đã được hiển thị trên trang chi tiết ạ. Nếu bạn có nhu cầu mua số lượng lớn, shop có thể hỗ trợ giá tốt hơn!';
  }
  
  if (lowerMessage.includes('ship') || lowerMessage.includes('giao hàng') || lowerMessage.includes('vận chuyển')) {
    return 'Dạ, shop hỗ trợ giao hàng toàn quốc với phí vận chuyển từ 15.000đ. Đơn hàng trên 500.000đ được miễn phí ship nội thành ạ!';
  }
  
  if (lowerMessage.includes('còn hàng') || lowerMessage.includes('còn không')) {
    return 'Dạ, sản phẩm hiện còn hàng ạ. Bạn có thể đặt hàng ngay được nha!';
  }
  
  if (lowerMessage.includes('bảo hành')) {
    return 'Sản phẩm của shop được bảo hành 12 tháng chính hãng và hỗ trợ đổi trả trong 7 ngày nếu có lỗi từ nhà sản xuất ạ.';
  }
  
  if (lowerMessage.includes('chào') || lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    return 'Chào bạn! Shop có thể giúp gì cho bạn ạ? 😊';
  }
  
  if (lowerMessage.includes('cảm ơn') || lowerMessage.includes('thanks')) {
    return 'Dạ, không có gì ạ! Rất vui được hỗ trợ bạn! ❤️';
  }
  
  return 'Dạ, cảm ơn bạn đã nhắn tin! Shop sẽ phản hồi trong giây lát ạ. Bạn có thể để lại số điện thoại để shop tư vấn chi tiết hơn nha! 📞';
}
