import {createSlice} from '@reduxjs/toolkit';

// Auth state interface
interface AuthState {
  isLoggedIn: boolean;
  user: any;
}

// Initial auth state
const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state: AuthState, payload) => {
      state.user = payload;
    },
  },
});

export const {setUser} = AuthSlice.actions;

export default AuthSlice.reducer;
