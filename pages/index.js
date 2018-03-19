import Head from '../components/head';
import getData from '../hoc/getData';
import PropTypes from 'prop-types';
import {Banner} from '../components/templates';

const Home = ({data}) => {
  // eslint-disable-next-line no-console
  console.log({data});

  return (
    <div>
      <Head title="Home" />
      <div className="pHome">
        <Banner {...data} />
        {'Place Footer here'}
      </div>
    </div>
  );
};

Home.displayName = 'HomePage';
Home.propTypes = {
  data: PropTypes.shape({
    banner: PropTypes.object.isRequired,
  }),
};

export default getData(Home);
