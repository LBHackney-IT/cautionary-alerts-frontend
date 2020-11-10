// import PropTypes from 'prop-types';

const AlertsEntry = ({ description, alertCode, modifiedBy, startDate }) => (
  <>
    <tr className="govuk-table__row ">
      <td className="govuk-table__cell">
        <strong>Description: {description}</strong>
      </td>
    </tr>
    <tr className="govuk-table__row ">
      <td className="govuk-table__cell">Start Date: {startDate}</td>
    </tr>
    <tr className="govuk-table__row ">
      <td className="govuk-table__cell">Modified By: {modifiedBy}</td>
    </tr>
    <tr className="govuk-table__row ">
      <td className="govuk-table__cell">Alert Code: {alertCode}</td>
    </tr>
  </>
);

const AlertsTable = ({ alerts }) => (
  <table className="govuk-table">
    {alerts.length > 0 && (
      <thead className="govuk-table__head">
        <h3>Cautionary Alerts:</h3>{' '}
      </thead>
    )}
    <tbody className="govuk-table__body">
      {alerts.map((result) => (
        <AlertsEntry {...result} />
      ))}
    </tbody>
  </table>
);

// AlertsTable.propTypes = {
//   alerts: PropTypes.arrayOf(
//     PropTypes.shape({
//       personId: PropTypes.number,
//       firstName: PropTypes.string.isRequired,
//       lastName: PropTypes.string.isRequired,
//       formName: PropTypes.string.isRequired,
//       dateOfBirth: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

export default AlertsTable;
