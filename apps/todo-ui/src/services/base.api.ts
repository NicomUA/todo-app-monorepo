import axios from 'axios';

const baseURL = "http://localhost:3000/api/";
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QiLCJzdWIiOiI0MjNmYTM0Yi03ZjU4LTQ5NjItYWY1ZC04M2QzYWFmMWNhZDciLCJuYW1lIjoidGVzdF9uYW1lIiwiaWF0IjoxNjgwMzU2NTgyLCJleHAiOjE2ODAzNjAxODJ9.DpAEQ9IZ59S22xyy0c9PLnXrcNlkkInyznhs96jZSak';

export const api = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: { Authorization: `Bearer ${token}` },
    baseURL,
  });
};
