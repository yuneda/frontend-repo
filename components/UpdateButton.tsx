'use client';

import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserStart, fetchUserSuccess, fetchUserFailure } from '../store/reducers';
import { updateUser, fetchUser, fetchAllUsers } from '../apis/userApi';
import { useAuth } from '@/lib/useAuth'; // Adjust path as necessary
import { useRouter } from 'next/router';
import { signOut } from 'firebase/auth';
import {auth} from "@/firebase/firebaseConfig";

const UpdateButton = () => {
  const dispatch = useDispatch();
  const { user, loading } = useAuth();
  const [userData, setUserData] = useState<any>(null);
  const [loadingData, setLoadingData] = useState(false);

  const handleLogout = () => {
    signOut(auth); // Call the signOut function from useAuth
  };

  const getAllUsers = async () => { 
    try {
      const users = await fetchAllUsers();
      console.log(users);
    } catch (error: any) {
      console.error('Error fetching users:', error);
    }
  }

  useEffect(() => {
    if (user) {
      getAllUsers();
    }
  }, [user]);

  const handleFetchUser = async () => {
    setLoadingData(true);
    try {
      // const fetchedUser = await fetchUser(user.uid);
      // setUserData(fetchedUser);
      setLoadingData(false);
    } catch (error: any) {
      console.error('Error fetching user:', error);
      setLoadingData(false);
    }
  };

  const handleUpdateUser = async () => {
    dispatch(fetchUserStart());
    try {
      // const data = { userId: user.uid, data: { name: 'John Doe' } };
      // await updateUser(data);
      // dispatch(fetchUserSuccess(data));
    } catch (error: any) {
      dispatch(fetchUserFailure(error.message));
    }
  };

  return (
    <div>
      <Button onClick={handleFetchUser} variant="contained" color="primary" disabled={loadingData}>
        Fetch User Data
      </Button>
      <Button onClick={handleUpdateUser} variant="contained" color="secondary" style={{ marginLeft: '10px' }} disabled={loading}>
        Update User
      </Button>
      <Button onClick={handleLogout} variant="contained" color="secondary" style={{ marginLeft: '10px' }}>
        Logout
      </Button>

      {loadingData ? (
        <Typography>Loading user data...</Typography>
      ) : userData ? (
        <div>
          <Typography variant="h6">User Details</Typography>
          <Typography>Name: {userData.name}</Typography>
          <Typography>Email: {userData.email}</Typography>
          {/* Display other user details */}
        </div>
      ) : null}
    </div>
  );
};

export default UpdateButton;
