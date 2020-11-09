import axios from 'axios';

const { ENDPOINT_ALERTS_API, KEY_HOUSING } = process.env;

export const getAlerts = async (params) => {
  console.log(ENDPOINT_ALERTS_API);
  const { data } = await axios.get(`${ENDPOINT_ALERTS_API}`, {
    headers: {
      Authorization: KEY_HOUSING,
    },
    params,
  });
  console.log(data);
  return data?.residents;
};

export default async (req, res) => {
  console.log(req.query);
  try {
    const data = await getAlerts(req.query);
    res.status(200).json(data);
    console.log(data);
  } catch (error) {
    console.log(error?.response);
  }
};
