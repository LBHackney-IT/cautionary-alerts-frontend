import Link from 'next/link';
import PropTypes from 'prop-types';

const ResultEntry = ({ firstName, lastName, address, tenancyReference }) => (
  <Link href={`/search`}>
    <tr className="govuk-table__row govuk-table__row--clickable">
      {/* <td className="govuk-table__cell">{personNumber}</td> */}
      <td className="govuk-table__cell">{tenancyReference}</td>
      <td className="govuk-table__cell">
        {firstName} {lastName}
      </td>
      <td className="govuk-table__cell">
        {address && Object.values(address).splice(1, 2).join(', ')}
      </td>
    </tr>
  </Link>
);

const ResultTable = ({ results }) => (
  <table className="govuk-table">
    <caption className="govuk-table__caption">People search result</caption>
    <thead className="govuk-table__head">
      <tr className="govuk-table__row">
        <th scope="col" className="govuk-table__header">
          Tenancy Reference
        </th>
        <th scope="col" className="govuk-table__header">
          Name
        </th>
        <th scope="col" className="govuk-table__header">
          Address
        </th>
      </tr>
    </thead>
    <tbody className="govuk-table__body">
      {results.map((result) => (
        <ResultEntry key={result} {...result} />
      ))}
    </tbody>
  </table>
);

ResultTable.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      personNumber: PropTypes.string,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      addressList: PropTypes.array.isRequired,
    })
  ).isRequired,
};

export default ResultTable;
