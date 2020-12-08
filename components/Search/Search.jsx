import { useState } from 'react';
import SearchByDetails from './SearchByDetails';
import ResultTable from './ResultTable';
import Spinner from 'components/Spinner/Spinner';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import { getResidents } from 'utils/api/residents';
import { Button } from 'components/Form';
const Search = () => {
  const [formData, setFormData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState();

  const searchForResidents = async (formData) => {
    setLoading(true);
    setFormData(formData);
    !formData.cursor && setResults(null);
    try {
      const data = await getResidents(formData);
      setLoading(false);
      setResults(
        formData.cursor
          ? { ...data, residents: [...results.residents, ...data.residents] }
          : data
      );
    } catch (e) {
      setLoading(false);
      setError('Oops an error occurred');
    }
  };

  return (
    <>
      <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />
      <SearchByDetails onFormSubmit={searchForResidents} />
      <>
        {results?.residents?.length > 0 && (
          <ResultTable results={results.residents} />
        )}
        {results?.nextCursor && !loading && (
          <Button
            label="load more"
            onClick={() =>
              searchForResidents({ ...formData, cursor: results.nextCursor })
            }
          />
        )}
        {loading && <Spinner />}
        {error && <ErrorMessage label={error} />}
      </>
    </>
  );
};

export default Search;
