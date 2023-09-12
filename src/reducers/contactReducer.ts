import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, Contato } from '../types/types';

const initialState: AppState = {
  Contatos: [],
};

const contactSlice = createSlice({
  name: 'Contatos',
  initialState,
  reducers: {
    addContato: (state, action: PayloadAction<Contato>) => {
      state.Contatos.push(action.payload);
    },
    editContato: (state, action: PayloadAction<Contato>) => {
      const index = state.Contatos.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) {
        state.Contatos[index] = action.payload;
      }
    },
    deleteContato: (state, action: PayloadAction<number>) => {
      state.Contatos = state.Contatos.filter((c) => c.id !== action.payload);
    },
  },
});

export const { addContato, editContato, deleteContato } = contactSlice.actions;
export default contactSlice.reducer;