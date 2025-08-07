export interface CartItem {
  id: number;
  productName: string;
  productType: string;
  imageUrl: string;
  price: string;
  oldPrice: string;
  color: string[];
  selectedColor?: string;
  size: string[];
  selectedSize?: string;
  quantity: number;
  totalQuantityLeft: number;
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

export const getCartTotal = (): number => {
  const cart = getCartFromStorage();
  return cart.reduce((total, item) => {
    const price = parseFloat(item.price.replace(/[.,]/g, ""));
    return total + price * item.quantity;
  }, 0);
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
