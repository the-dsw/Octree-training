import PropTypes from 'prop-types';

const Icon = ({...className}) => <div {...className} />;

Icon.displayName = 'IconAtom';
Icon.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Icon;
