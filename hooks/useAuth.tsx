import React, { useState } from 'react';
import ApiManager from '../api/ApiManager';

import { User, UserDBResponse as UserDB } from '../interfaces/user';

const useAuth = () => {

  const [loading, setLoading] = useState<boolean>( false );
  const [error, setError] = useState<string>(undefined);
  const [data, setData] = useState<UserDB>();

  const signIn = async ( user: User ) => {
    setLoading( true );

    try {
      const { data } = await ApiManager.post('/auth/login/', {
        "username": user.userName,
        "password": user.password
      });

      setData( data );
      setError( undefined );

      return data;
    } catch ( error ) {
      setError( error.response ? error.response.data.detail : 'Network Error' );
      setData( undefined );
    } finally {
      setLoading( false );
    }
  };

  return {
    // Properties
    loading,
    error,
    data,

    // Methods
    signIn
  };
};

export default useAuth;
