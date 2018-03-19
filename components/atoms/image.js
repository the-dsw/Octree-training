import PropTypes from 'prop-types';
const Image = ({src, alt}) => (
  <div className="aImage">
    <img className="aImage_img" alt={alt ? alt : 'No alt'} src={src} />
  </div>
);

Image.displayName = 'ImageAtom';
Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
export default Image;
