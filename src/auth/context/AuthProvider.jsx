

import React, { useReducer } from 'react'
import { authReducer } from './authReducer';
import { AuthContext } from './Authcontext';

const initialState = {
    logged: false,
}

export const AuthProvider = ({children}) => {

    const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  )
}
