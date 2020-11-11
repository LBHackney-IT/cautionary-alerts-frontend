import { useState, useEffect } from 'react';
import SearchByDetails from './SearchByDetails';
import ResultTable from './ResultTable';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import { getResidents } from 'utils/api/residents';

const Search = () => {
  const [formData, setFormData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState();

  const searchForResidents = async () => {
    try {
      const data = await getResidents(formData);
      setResults(data);
    } catch (e) {
      setError('Oops an error occurred');
    }
  };

  useEffect(() => {
    formData && searchForResidents(formData);
  }, [formData]);
  return (
    <>
      <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />
      <SearchByDetails setFormData={setFormData} setLoading={setLoading} />
      {loading ? (
        <div>Searching...</div>
      ) : (
        <>
          {results?.length > 0 && <ResultTable results={results} />}
          {error && <ErrorMessage label={error} />}
        </>
      )}
    </>
  );
};

export default Search;
