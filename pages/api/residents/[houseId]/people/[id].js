import axios from 'axios';

const { ENDPOINT_HOUSING_API, KEY_HOUSING } = process.env;

export const getResident = async ({ houseId, id, ...params }) => {
  const { data } = await axios.get(
    `${ENDPOINT_HOUSING_API}/${houseId}/people/${id}`,
    {
      headers: {
        Authorization: KEY_HOUSING,
      },
      params,
    }
  );
  console.log(data);
  return data;
};

export default async (req, res) => {
  console.log(req.query);
  try {
    const data = await getResident(req.query);
    res.status(200).json(data);
  } catch (error) {
    console.log(error?.response);
  }
};
