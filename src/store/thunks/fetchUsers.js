import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('http://localhost:3005/users');

  // fake delay
  await pause(1000);

  return response.data;
});

// automatically add in:

//fetchUsers.pending === 'users/fetch/pending'
//fetchUsers.fulfilled === 'users/fetch/fulfilled'
//fetchUsers.rejected === 'users/fetch/rejected'

// setting fake delay
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers };
