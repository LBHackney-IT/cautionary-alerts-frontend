import axios from 'axios';
import { isAuthorised } from 'utils/auth';

const { ENDPOINT_ALERTS_API, KEY_ALERTS } = process.env;

export const getAlerts = async (params) => {
  const { data } = await axios.get(`${ENDPOINT_ALERTS_API}`, {
    headers: {
      Authorization: KEY_ALERTS,
    },
    params,
  });
  return data?.contacts;
};

export default async (req, res) => {
  if (!isAuthorised({ req })) {
    return res.status(401).send('Auth cookie missing.');
  }
  try {
    const data = await getAlerts(req.query);
    data[0]?.alerts
      ? res.status(200).json(data[0].alerts)
      : res.status(404).json('no alerts found');
  } catch (error) {
    console.log(error?.response);
    res.status(500).json('Unable to get the Alerts');
  }
};
