import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchRandomGreeting = createAsyncThunk('greeting/fetchRandomGreeting', async () => {
  const response = await axios.get('http://localhost:3000/random_greeting');
  return response.data.greeting;
});

export default fetchRandomGreeting;
