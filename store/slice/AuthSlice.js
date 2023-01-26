import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  isLoggedIn: false,
  id: -1,
  username: '',
  password: '',
  token: '',
  email: '',
};

const AuthState = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLoginResponse: state => {
      return {
        ...state,
        isLoadingVisible: true,
      };
    },
    logOut: (state, action) => {
      return {
        // isLoggedIn: false,
        // user: null,
        islogOut: initialState,
      };
    },

    requestRegister: (state, action) => {
      return {
        // ...state,
        // id: action.payload.id,
        // username: action.payload.name,
        // email: action.payload.email,
        // token: action.payload.token,
        // provider: 'email',
        isLoggedIn: true,
        ...action.payload,
      };
    },
  },
});

export const {onLoginResponse, logOut, requestRegister} = AuthState.actions;
export default AuthState.reducer;
