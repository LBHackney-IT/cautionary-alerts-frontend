import { NextSeo } from 'next-seo';
import Search from 'components/Search/Search';

const Home = () => {
  return (
    <div>
      <NextSeo title="Home" />
      <div>
        <h1> Resident Look Up</h1>
        <NextSeo title="Search" noindex />

        <p className="govuk-body govuk-!-margin-bottom-7">
          Search for resident by name or postcode to see if we have a record for
          them
        </p>
        <Search />
      </div>
    </div>
  );
};

export default Home;
