import { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import AlertsTable from './AlertsTable';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import { getAlerts } from 'utils/api/alerts';
import Spinner from 'components/Spinner/Spinner';

const Alerts = ({ id }) => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [alerts, setAlerts] = useState();
  const getPersonAlerts = useCallback(async (id) => {
    try {
      const data = await getAlerts({ tag_ref: id });
      setLoading(false);
      setError(null);
      setAlerts(data);
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
      <>
        {loading ? (
          <div>
            <Spinner />
          </div>
        ) : (
          <>
            {alerts?.length > 0 ? (
              <AlertsTable alerts={alerts} />
            ) : (
              <h4>
                <strong>No cautionary alerts</strong>
              </h4>
            )}
            {error && <ErrorMessage label={error} />}
          </>
        )}
      </>
    </>
  );
};

Alerts.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Alerts;
