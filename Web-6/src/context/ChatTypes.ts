export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  senderName: string;
  senderAvatar?: string;
  content: string;
  timestamp: number;
  isRead: boolean;
  type: 'text' | 'image' | 'product';
  productData?: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  };
}

export interface Conversation {
  id: string;
  sellerId: string;
  sellerName: string;
  sellerAvatar?: string;
  lastMessage?: Message;
  unreadCount: number;
  isOnline: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface ChatState {
  conversations: Conversation[];
  messages: Record<string, Message[]>; // conversationId -> messages
  activeConversationId: string | null;
  isOpen: boolean;
  isChatListOpen: boolean;
}

export type ChatAction =
  | { type: 'OPEN_CHAT' }
  | { type: 'CLOSE_CHAT' }
  | { type: 'TOGGLE_CHAT' }
  | { type: 'OPEN_CHAT_LIST' }
  | { type: 'CLOSE_CHAT_LIST' }
  | { type: 'SET_ACTIVE_CONVERSATION'; payload: string | null }
  | { type: 'ADD_MESSAGE'; payload: Message }
  | { type: 'ADD_CONVERSATION'; payload: Conversation }
  | { type: 'MARK_AS_READ'; payload: string } // conversationId
  | { type: 'UPDATE_CONVERSATIONS'; payload: Conversation[] }
  | { type: 'UPDATE_MESSAGES'; payload: { conversationId: string; messages: Message[] } }
  | { type: 'LOAD_FROM_STORAGE'; payload: ChatState };
