import axios from 'axios';

const { ENDPOINT_HOUSING_API, KEY_HOUSING } = process.env;

export const getResidents = async (params) => {
  console.log(ENDPOINT_HOUSING_API);
  const { data } = await axios.get(`${ENDPOINT_HOUSING_API}`, {
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
    const data = await getResidents(req.query);
    res.status(200).json(data);
  } catch (error) {
    console.log(error?.response);
  }
};
