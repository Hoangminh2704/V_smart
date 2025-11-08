import type { Conversation, Message } from './ChatTypes';

// Demo data for testing
export const demoConversations: Conversation[] = [
  {
    id: 'demo_conv_1',
    sellerId: 'seller_xiaomi',
    sellerName: 'Xiaomi Official Store',
    sellerAvatar: 'https://i.imgur.com/6VBx3io.png',
    unreadCount: 0,
    isOnline: true,
    createdAt: Date.now() - 86400000, // 1 day ago
    updatedAt: Date.now() - 3600000, // 1 hour ago
  },
];

export const demoMessages: Record<string, Message[]> = {
  demo_conv_1: [
    {
      id: 'msg_1',
      conversationId: 'demo_conv_1',
      senderId: 'seller_xiaomi',
      senderName: 'Xiaomi Official Store',
      content: 'Chào bạn! Cảm ơn bạn đã quan tâm đến sản phẩm của shop. Mình có thể giúp gì cho bạn? 😊',
      timestamp: Date.now() - 86400000,
      isRead: true,
      type: 'text',
    },
  ],
};
