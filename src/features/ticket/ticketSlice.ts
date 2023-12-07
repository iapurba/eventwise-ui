import { createSlice } from '@reduxjs/toolkit';

interface TicketState {
    tickets: any[],
};

const initialState: TicketState = {
    tickets: [],
};

const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {

    }
});

export default ticketSlice;