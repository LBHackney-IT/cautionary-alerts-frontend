import { NextSeo } from 'next-seo';
import Alerts from 'components/Alerts/Alerts';
import BackButton from 'components/Layout/BackButton/BackButton';
import PersonView from 'components/PersonView/PersonView';

const AlertsPage = ({ query }) => {
  console.log(query.id);
  return (
    <div>
      <NextSeo title={`#${query.id} Alerts`} noindex />
      <BackButton />
      <PersonView personId={`${query.id[0]}/people/${query.id[1]}`} />
      <Alerts id={`${query.id[0]}/${query.id[1]}`} />
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

export default AlertsPage;
