'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import GoogleLoginButton from '../components/GoogleLoginButton';
import { CircularProgress, Typography } from '@mui/material';
import { useAuth } from '../lib/useAuth';

const LoginPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (user) {
      router.push('/'); // Redirect to main page if user is logged in
    } else {
      router.push('/login');
    }
  }, [user, router]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div>
      <Typography variant="h4">Login</Typography>
      <GoogleLoginButton />
    </div>
  );
};

export default LoginPage;
