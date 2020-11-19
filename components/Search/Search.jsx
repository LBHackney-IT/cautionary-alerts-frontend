import { useState } from 'react';
import SearchByDetails from './SearchByDetails';
import ResultTable from './ResultTable';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import { getResidents } from 'utils/api/residents';
import { Button } from 'components/Form';
const Search = () => {
  const [formData, setFormData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState();

  const searchForResidents = async (formData) => {
    try {
      const data = await getResidents(formData);
      setResults(data);
    } catch (e) {
      setError('Oops an error occurred');
    }
  };

  return (
    <>
      <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />
      <SearchByDetails
        onFormSubmit={searchForResidents}
        setLoading={setLoading}
      />
      {loading ? (
        <Spinner />
      ) : (
        <>
          {results?.residents?.length > 0 && (
            <ResultTable results={results.residents} />
          )}
          {results?.nextCursor && (
            <Button
              label="load more"
              onClick={() =>
                setFormData(
                  { ...formData, cursor: results.nextCursor },
                  results.residents
                )
              }
            />
          )}
          {error && <ErrorMessage label={error} />}
        </>
      )}
    </>
  );
};

export default Search;
