import React from 'react';
import { Button, Typography, Grid } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/firebaseConfig';

const GoogleLoginButton = () => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={8} md={6}>
        <Button
          fullWidth
          onClick={handleGoogleLogin}
          variant="contained"
          color="primary"
          size="large"
        >
          <Typography variant="button" sx={{ mr: 1 }}>
            Login with Google
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default GoogleLoginButton;
