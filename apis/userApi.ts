import axios from 'axios';
import { ApiError } from '../interfaces/ErrorInterface';

const api = axios.create({
  baseURL: 'http://localhost:4000',
});

export const updateUser = async (data: any) => {
  try {
    const response = await api.post('/users/update', data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const apiError: ApiError = {
        statusCode: error.response.status,
        message: error.response.data.message || 'Error updating user',
      };
      throw apiError;
    }
    throw new Error('An unexpected error occurred');
  }
};

export const fetchUser = async (userId: string) => {
  try {
    const response = await api.get(`/users/fetch/${userId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const apiError: ApiError = {
        statusCode: error.response.status,
        message: error.response.data.message || 'Error fetching user',
      };
      throw apiError;
    }
    throw new Error('An unexpected error occurred');
  }
};

export const fetchAllUsers = async () => {
  try {
    const response = await api.get('/fetch-all-users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    if (axios.isAxiosError(error) && error.response) {
      const apiError: ApiError = {
        statusCode: error.response.status,
        message: error.response.data.message || 'Error fetching users',
      };
      throw apiError;
    }
    throw new Error('An unexpected error occurred');
  }
}
