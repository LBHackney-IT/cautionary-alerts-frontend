import { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import AlertsTable from './AlertsTable';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import { getAlerts } from 'utils/api/alerts';

const Alerts = ({ id }) => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [alerts, setAlerts] = useState();
  const getPersonAlerts = useCallback(async (id) => {
    try {
      const data = await getAlerts(id);
      setLoading(false);
      setError(null);
      setAlerts(Array.isArray(data) ? data : [data]);
    } catch (e) {
      setLoading(false);
      setError(e.response.data);
      setAlerts(null);
    }
  });
  useEffect(() => {
    setLoading(true);
    getPersonAlerts(id);
  }, [id]);
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {alerts && <AlertsTable alerts={alerts} />}
          {error && <ErrorMessage label={error} />}
        </>
      )}
    </>
  );
};

Alerts.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Alerts;
