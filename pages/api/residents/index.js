import axios from 'axios';
import { isAuthorised } from 'utils/auth';

const { ENDPOINT_HOUSING_API, KEY_HOUSING } = process.env;

export const getResident = async (params) => {
  const { data } = await axios.get(`${ENDPOINT_HOUSING_API}`, {
    headers: {
      Authorization: KEY_HOUSING,
    },
    params,
  });
  return data;
};

export default async (req, res) => {
  if (!isAuthorised({ req })) {
    return res.status(401).send('Auth cookie missing.');
  }
  try {
    const data = await getResident(req.query);
    res.status(200).json(data);
  } catch (error) {
    console.log(error?.response);
    res.status(500).json('Unable to get the Residents');
  }
};
