import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  quantity: number;
  product: {
    productPrice: number;
  };
}

interface CartItem {
  id: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  cartItems: Product[];
  totalCost: number;
}

// Function to load cart from local storage
const loadCartFromLocalStorage = (): CartItem[] => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

const initialState: CartState = {
  items: loadCartFromLocalStorage(),
  cartItems: [],
  totalCost: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addToCart: (state, action: PayloadAction<Product>) => {
    //   state.cartItems.push(action.payload);
    //   state.totalCost +=
    //     action.payload.product.productPrice * action.payload.quantity;
    // },
    updateQuantity(
      state,
      action: PayloadAction<{ productId: number; quantity: number }>
    ) {
      const { productId, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === productId);

      if (existingItem) {
        existingItem.quantity = quantity;
      }

      // Persist the updated cart state to local storage
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const productIdToRemove = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== productIdToRemove
      );
      state.totalCost = state.cartItems.reduce(
        (total, item) => total + item.product.productPrice * item.quantity,
        0
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalCost = 0;
    },
  },
});

export const { updateQuantity, removeFromCart, clearCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
