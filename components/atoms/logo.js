import PropTypes from 'prop-types';

const Logo = ({src, alt}) => (
  <div className="aLogo">
    <img className="aLogo_img" alt={alt ? alt : 'No alt'} src={src} />
  </div>
);

Logo.displayName = 'LogoAtom';
Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Logo;
