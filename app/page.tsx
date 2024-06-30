"use client";

import React from 'react';
import UpdateButton from '../components/UpdateButton';
import GoogleLoginButton from '../components/GoogleLoginButton';
import { Provider } from 'react-redux';
import store from '../store/store';
import { useAuth } from '@/lib/useAuth';

const MainPage = () => {
  const { user, loading } = useAuth();
  if (!user && !loading) {
    return <GoogleLoginButton />;
  }
  return (
    <Provider store={store}>
      <UpdateButton />
    </Provider>
  );
};

export default MainPage;
