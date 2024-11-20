import React, { useReducer } from 'react'
import { authReducer } from './authReducer';
import { AuthContext } from './Authcontext';
import { types } from '../types/types';

const initialState = {
    logged: false,
}

export const AuthProvider = ({children}) => {

    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = (name = '') => {
      const action = {
        type: types.login,
        payload: {
          id: 'ABC',
          name: name
        }
      }
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
