import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getResident } from 'utils/api/residents';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import PersonDetails from './PersonDetails';

const PersonView = ({ personId }) => {
  const [person, setPerson] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const getPerson = async (tenancyReference) => {
    setLoading(false);
    try {
      const data = await getResident(tenancyReference);
      setPerson(data);
      setError(null);
    } catch (e) {
      setPerson(null);
      setError(e.response.data);
    }
  };
  useEffect(() => {
    setLoading(true);
    getPerson(personId);
  }, [personId]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {error && <ErrorMessage label={error} />}
          {person && <PersonDetails person={person} />}
        </>
      )}
    </>
  );
};

PersonView.propTypes = {
  personId: PropTypes.string.isRequired,
};

export default PersonView;
