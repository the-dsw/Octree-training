import {Hero} from '../organisms';
import PropTypes from 'prop-types';

const Banner = ({children, ...data}) => {
  return (
    <div className="tBanner">
      <Hero image={data.banner.image}>{data.banner.alt}</Hero>
    </div>
  );
};
Banner.displayName = 'BannerTemplate';
Banner.propTypes = {
  children: PropTypes.any,
  data: PropTypes.shape({
    banner: PropTypes.shape({
      image: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }),
  }),
};

export default Banner;
