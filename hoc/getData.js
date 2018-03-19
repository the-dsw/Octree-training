import Data from '../data-backend.json';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/display-name
const GetData = (Compo) => () => <Compo data={Data} {...this.props} />;

GetData.propTypes = {
  Compo: PropTypes.element.isRequired,
};
export default GetData;
