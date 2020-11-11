import axios from 'axios';

export const getAlerts = async (params) => {
  const { data } = await axios.get(`/api/alerts`, {
    params,
  });
  return data;
};
