export interface CartItem {
  id: number;
  productName: string;
  productType: string;
  imageUrl: string;
  price: number;
  oldPrice: number;
  color: string[];
  selectedColor?: string;
  size: string[];
  selectedSize?: string;
  quantity: number;
  totalQuantityLeft: number;
  state: string;
  isChecked?: boolean;
}

const CART_STORAGE_KEY = "shopping_cart";

export const getCartFromStorage = (): CartItem[] => {
  const cartData = localStorage.getItem(CART_STORAGE_KEY);
  if (!cartData) return [];
  return JSON.parse(cartData);
};

export const saveCartToStorage = (cart: CartItem[]): void => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
};

export const addToCart = (newItem: CartItem): CartItem[] => {
  const currentCart = getCartFromStorage();

  const existingItemIndex = currentCart.findIndex(
    (item) =>
      item.id === newItem.id &&
      item.selectedColor === newItem.selectedColor &&
      item.selectedSize === newItem.selectedSize
  );

  if (existingItemIndex >= 0) {
    currentCart[existingItemIndex].quantity += newItem.quantity;
  } else {
    currentCart.push(newItem);
  }

  saveCartToStorage(currentCart);
  getCartItemCount();
  return currentCart;
};

export const removeFromCart = (
  itemId: number,
  selectedColor?: string,
  selectedSize?: string
): CartItem[] => {
  const currentCart = getCartFromStorage();
  const updatedCart = currentCart.filter(
    (item) =>
      !(
        item.id === itemId &&
        item.selectedColor === selectedColor &&
        item.selectedSize === selectedSize
      )
  );

  saveCartToStorage(updatedCart);

  window.dispatchEvent(new CustomEvent("cartUpdated"));

  return updatedCart;
};

export const updateCartItemQuantity = (
  itemId: number,
  newQuantity: number,
  selectedColor?: string,
  selectedSize?: string
): CartItem[] => {
  const currentCart = getCartFromStorage();
  const itemIndex = currentCart.findIndex(
    (item) =>
      item.id === itemId &&
      item.selectedColor === selectedColor &&
      item.selectedSize === selectedSize
  );

  if (itemIndex >= 0) {
    currentCart[itemIndex].quantity = newQuantity;
  }

  saveCartToStorage(currentCart);
  return currentCart;
};

export const clearCart = (): void => {
  localStorage.removeItem(CART_STORAGE_KEY);
};

export const getCartItemCount = (): number => {
  const cart = getCartFromStorage();
  return cart.reduce((total, item) => total + item.quantity, 0);
};

export const formatPrice = (price: number): string => {
  return price.toLocaleString("vi-VN") + "đ";
};

export const updateCartItemColorSize = (
  itemId: number,
  oldColor: string,
  oldSize: string,
  newColor: string,
  newSize: string
): CartItem[] => {
  const currentCart = getCartFromStorage();
  const itemIndex = currentCart.findIndex(
    (item) =>
      item.id === itemId &&
      item.selectedColor === oldColor &&
      item.selectedSize === oldSize
  );

  if (itemIndex >= 0) {
    const existingItemIndex = currentCart.findIndex(
      (item) =>
        item.id === itemId &&
        item.selectedColor === newColor &&
        item.selectedSize === newSize
    );

    if (existingItemIndex >= 0 && existingItemIndex !== itemIndex) {
      currentCart[existingItemIndex].quantity +=
        currentCart[itemIndex].quantity;
      currentCart.splice(itemIndex, 1);
    } else {
      currentCart[itemIndex].selectedColor = newColor;
      currentCart[itemIndex].selectedSize = newSize;
    }
  }

  saveCartToStorage(currentCart);
  return currentCart;
};

export const updateCartItemChecked = (
  id: number,
  selectedColor: string,
  selectedSize: string,
  isChecked: boolean
): CartItem[] => {
  const currentCart = getCartFromStorage();

  const itemIndex = currentCart.findIndex(
    (item) =>
      item.id === id &&
      item.selectedColor === selectedColor &&
      item.selectedSize === selectedSize
  );

  if (itemIndex >= 0) {
    currentCart[itemIndex].isChecked = isChecked;
    saveCartToStorage(currentCart);
  }

  return currentCart;
};

export const updateAllCartItemsChecked = (isChecked: boolean): CartItem[] => {
  const currentCart = getCartFromStorage();

  const updatedCart = currentCart.map((item) => ({
    ...item,
    isChecked: isChecked,
  }));

  saveCartToStorage(updatedCart);
  return updatedCart;
};

export const isAllCartItemsChecked = (): boolean => {
  const cart = getCartFromStorage();
  if (cart.length === 0) return false;
  return cart.every((item) => item.isChecked === true);
};

export const getCartTotal = (): number => {
  const cart = getCartFromStorage();
  return cart
    .filter((item) => item.isChecked === true)
    .reduce((total, item) => {
      const itemPrice =
        typeof item.price === "string" ? parseFloat(item.price) : item.price;
      if (isNaN(itemPrice)) return total;
      return total + itemPrice * item.quantity;
    }, 0);
};

export interface Order {
  id: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  items: CartItem[];
  total: number;
  status: string;
}

const ORDER_STORAGE_KEY = "orders";

export const getOrdersFromStorage = (): Order[] => {
  const orderData = localStorage.getItem(ORDER_STORAGE_KEY);
  if (!orderData) return [];
  return JSON.parse(orderData);
};

export const saveOrderToStorage = (orders: Order[]): void => {
  localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(orders));
  console.log("Orders:", orders);
};

export const createOrder = (
  customerName: string,
  customerPhone: string,
  customerEmail: string
): Order => {
  const checkedItems = getCartFromStorage().filter(
    (item) => item.isChecked === true
  );
  const total = getCartTotal();

  const orders = getOrdersFromStorage();
  const nextOrderNumber = orders.length + 1;
  const orderId = nextOrderNumber.toString().padStart(6, "0");

  const newOrder: Order = {
    id: orderId,
    customerName,
    customerPhone,
    customerEmail,
    items: checkedItems,
    total,
    status: "Chờ xác nhận",
  };

  orders.push(newOrder);
  saveOrderToStorage(orders);

  const remainingItems = getCartFromStorage().filter(
    (item) => item.isChecked !== true
  );
  saveCartToStorage(remainingItems);
  return newOrder;
};

export const getOrderById = (orderId: string): Order | null => {
  const orders = getOrdersFromStorage();
  return orders.find((order) => order.id === orderId) || null;
};
