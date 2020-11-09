import PropTypes from 'prop-types';

const AlertsEntry = ({
  personId,
  firstName,
  lastName,
  formName,
  dateOfBirth,

  // caseFormUrl,
}) => (
  <tr
    className="govuk-table__row govuk-table__row--clickable"
    // onClick={() => onClick(caseFormUrl)}
  >
    <td className="govuk-table__cell">{personId}</td>
    <td className="govuk-table__cell">
      {firstName} {lastName}
    </td>
    <td className="govuk-table__cell">{formName}</td>
    <td className="govuk-table__cell">
      {new Date(dateOfBirth).toLocaleDateString('en-GB')}
    </td>
  </tr>
);

const AlertsTable = ({ alerts }) => (
  <table className="govuk-table">
    <thead className="govuk-table__head">
      <tr className="govuk-table__row">
        <th scope="col" className="govuk-table__header">
          Person ID
        </th>
        <th scope="col" className="govuk-table__header">
          Name
        </th>
        <th scope="col" className="govuk-table__header">
          Alerts
        </th>
        <th scope="col" className="govuk-table__header">
          DOB
        </th>
      </tr>
    </thead>
    <tbody className="govuk-table__body">
      {alerts.map((result) => (
        <AlertsEntry key={result.personId} {...result} />
      ))}
    </tbody>
  </table>
);

AlertsTable.propTypes = {
  alerts: PropTypes.arrayOf(
    PropTypes.shape({
      personId: PropTypes.number,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      formName: PropTypes.string.isRequired,
      dateOfBirth: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AlertsTable;
