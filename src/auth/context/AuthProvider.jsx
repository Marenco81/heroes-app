import React, { useReducer } from 'react'
import { authReducer } from './authReducer';
import { AuthContext } from './Authcontext';
import { types } from '../types/types';

const initialState = {
    logged: false,
}

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return {
    logged: !!user,
    user: user
  }
}


export const AuthProvider = ({children}) => {

    const [state, dispatch] = useReducer(authReducer, initialState, init);

    const login = (name = '') => {

      const user = {
        id: 'ABC',
        name: name
      }
      const action = {
        type: types.login,
        payload: user
      }

      localStorage.setItem('user', JSON.stringify(user));

      dispatch(action);
    }
  return (
    <AuthContext.Provider value={{
      ...state,
      login: login
    }}>
      {children}
    </AuthContext.Provider>
  )
}
