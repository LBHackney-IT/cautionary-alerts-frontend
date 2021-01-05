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
        <dt className="govuk-summary-list__key">UPRN</dt>
        <dd className="govuk-summary-list__value">#{person.uprn}</dd>
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
        <dt className="govuk-summary-list__key">
          Property Reference
          <br />
          <br /> Address
        </dt>
        <dd className="govuk-summary-list__value">
          {person.address &&
            Object.values(person.address).map((addressLine) => (
              <p key={addressLine}>{addressLine}</p>
            ))}
        </dd>
      </div>
      {person.phoneNumbers?.length > 0 && (
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Phone Number</dt>
          <dd className="govuk-summary-list__value">
            <ul className="govuk-list">
              {person.phoneNumbers.map(({ phoneNumber, phoneType }) => (
                <li key={phoneNumber}>
                  {phoneNumber} - {phoneType}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      )}
      {person.tenureType && (
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Tenure Type</dt>
          <dd className="govuk-summary-list__value">{person.tenureType}</dd>
        </div>
      )}
    </dl>
  </>
);

PersonDetails.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  tenancyReference: PropTypes.string,
  tenureType: PropTypes.string,
  address: PropTypes.arrayOf(PropTypes.shape({})),
  phoneNumbers: PropTypes.arrayOf(PropTypes.shape({})),
  emailAddresses: PropTypes.arrayOf(PropTypes.shape({})),
};

export default PersonDetails;
