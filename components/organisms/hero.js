import PropTypes from 'prop-types';
import {Image} from '../atoms';

const Hero = ({children, image}) => {
  return (
    <div className="oHero">
      <Image src={image} alt={children} />
    </div>
  );
};
Hero.displayName = 'HeroOrganism';
Hero.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.string,
};
export default Hero;
