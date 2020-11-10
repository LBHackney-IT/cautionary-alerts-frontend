import axios from 'axios';

const { ENDPOINT_ALERTS_API, KEY_ALERTS } = process.env;

export const getAlerts = async (params) => {
  const { data } = await axios.get(`${ENDPOINT_ALERTS_API}`, {
    headers: {
      Authorization: KEY_ALERTS,
    },
    params,
  });
  console.log(data);
  return data?.contacts;
};

export default async (req, res) => {
  console.log(req.query);
  try {
    const data = await getAlerts(req.query);
    res.status(200).json(data);
    console.log(data);
  } catch (error) {
    res.status(200).json(error);
    console.log(error?.response);
  }
};
