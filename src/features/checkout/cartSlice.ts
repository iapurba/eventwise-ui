import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CartItem {
    event: {
        id: string;
        title: string;
        startDate: string;
        startTime: string;
    };
    ticketType: string;
    price: number;
    quantity: number;
    subTotal: number;
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: [] as CartItem[],
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.push(action.payload);
        },
        removeFromCart: (state, action) => {
            return state.filter((item) => item !== action.payload);
        },
        clearCart: () => [],
    }
});

export const { addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;