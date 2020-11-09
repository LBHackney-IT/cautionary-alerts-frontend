import PropTypes from 'prop-types';

const PersonDetails = ({
  firstName,
  lastName,
  tenancyAgreementReference,
  personNumber,
  contactNumber,
}) => (
  <>
    <h1>
      {firstName} {lastName}
    </h1>
    <h2 className="personDetails">PERSON DETAILS</h2>
    <hr className="personDetailsHr" />
    <dl className="govuk-summary-list">
      <div className="govuk-summary-list__row">
        <dt className="govuk-summary-list__key">Tenancy Agreement Reference</dt>
        <dd className="govuk-summary-list__value">
          #{tenancyAgreementReference}
        </dd>
        <dt className="govuk-summary-list__key">Tenancy Person Number</dt>
        <dd className="govuk-summary-list__value">#{personNumber}</dd>
      </div>
      <div className="govuk-summary-list__row">
        <dt className="govuk-summary-list__key">Contact Number</dt>
        <dd className="govuk-summary-list__value">{contactNumber}</dd>
      </div>
    </dl>
  </>
);

PersonDetails.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  personNumber: PropTypes.string,
  dateOfBirth: PropTypes.string,
  addressList: PropTypes.arrayOf(PropTypes.shape({})),
  phoneNumber: PropTypes.arrayOf(PropTypes.shape({})),
};

export default PersonDetails;
