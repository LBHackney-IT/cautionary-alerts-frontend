import { NextSeo } from 'next-seo';
import Search from 'components/Search/Search';

const SearchPage = ({ query }) => {
  return (
    <div>
      <NextSeo title="Home" />
      <div>
        <h1> Resident Look Up</h1>
        <NextSeo title="Search" noindex />

        <p className="govuk-body govuk-!-margin-bottom-7">
          Search for resident by name to see if we have a record for them
        </p>
        <Search {...query} />
      </div>
    </div>
  );
};
export const getServerSideProps = async (ctx) => {
  const { query } = ctx;
  return {
    props: {
      query,
    },
  };
};

export default SearchPage;
