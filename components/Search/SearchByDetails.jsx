import { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useForm } from 'react-hook-form';
import { Button, TextInput } from 'components/Form';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

const SearchByDetails = ({ setFormData }) => {
  const [formError, setFormError] = useState();
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = async (formData) => {
    setFormError(null);

    return formData.first_name && formData.last_name
      ? setFormError('You need to enter a first or last name')
      : setFormData(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cx({ 'govuk-form-group--error': Boolean(formError) })}>
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-one-half">
            <TextInput
              label="First name:"
              labelSize="s"
              name="first_name"
              error={errors.first_name}
              register={register}
            />
          </div>
          <div className="govuk-grid-column-one-half">
            <TextInput
              label="Last name:"
              labelSize="s"
              name="last_name"
              error={errors.last_name}
              register={register}
            />
          </div>
        </div>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-one-half">
            <TextInput
              label="Postcode:"
              labelSize="s"
              name="postcode"
              error={errors.postcode}
              register={register}
            />
          </div>

          {formError && <ErrorMessage label={formError} />}
        </div>
      </div>
      <Button label="Search" type="submit" />
    </form>
  );
};

SearchByDetails.propTypes = {
  setFormData: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default SearchByDetails;
