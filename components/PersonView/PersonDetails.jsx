import PropTypes from 'prop-types';
// import residents from '../../pages/api/residents';

const PersonDetails = ({ person, emailAddresses }) => (
  <>
    <h1>
      {person.firstName} {person.lastName}
    </h1>
    <h2 className="personDetails">PERSON DETAILS</h2>
    <hr className="personDetailsHr" />
    <dl className="govuk-summary-list">
      <div className="govuk-summary-list__row">
        <dt className="govuk-summary-list__key">Tenancy Agreement Reference</dt>
        <dd className="govuk-summary-list__value">
          #{person.tenancyReference}
        </dd>
      </div>
      <div className="govuk-summary-list__row">
        <dt className="govuk-summary-list__key">Date of birth</dt>
        <dd className="govuk-summary-list__value">
          {new Date(person.dateOfBirth).toLocaleDateString('en-GB')}
        </dd>
      </div>
      {emailAddresses && (
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Email Address</dt>
          <dd className="govuk-summary-list__value">{person.emailAddresses}</dd>
        </div>
      )}
      <div className="govuk-summary-list__row">
        <dt className="govuk-summary-list__key">Address</dt>
        <dd className="govuk-summary-list__value">
          {person.address &&
            Object.values(person.address)
              .splice(1, 2)
              .map((addressLine) => <p key={addressLine}>{addressLine}</p>)}
        </dd>
      </div>
      <div className="govuk-summary-list__row">
        <dt className="govuk-summary-list__key">Phone Number/s</dt>
        <dd className="govuk-summary-list__value">
          {person?.phoneNumbers[0] &&
            Object.values(person?.phoneNumbers[0])
              .splice(0, 1)
              .map((number) => <p key={number}>{number}</p>)}
        </dd>
      </div>
      {person?.phoneNumbers[1]?.phoneNumber && (
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key"></dt>
          <dd className="govuk-summary-list__value">
            <p>{person?.phoneNumbers[1].phoneNumber}</p>
          </dd>
        </div>
      )}
    </dl>
  </>
);

PersonDetails.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  tenancyReference: PropTypes.string,
  address: PropTypes.arrayOf(PropTypes.shape({})),
  phoneNumbers: PropTypes.arrayOf(PropTypes.shape({})),
  emailAddresses: PropTypes.arrayOf(PropTypes.shape({})),
};

export default PersonDetails;