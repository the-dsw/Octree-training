import PropTypes from 'prop-types';
import {Icon} from '../atoms';

const Social = ({...data}) => {
  return (
    <div className="mSocial">
      <ul className="mSocial_list">
        <li className="aIcon">
          <a href={data.socials.facebook}>
            <Icon className="aIcon-facebook aIcon-white" />
          </a>
        </li>
        <li className="aIcon">
          <a href={data.socials.twitter}>
            <Icon className="aIcon-twitter aIcon-white" />
          </a>
        </li>
        <li className="aIcon">
          <a href={data.socials.github}>
            <Icon className="aIcon-github aIcon-white" />
          </a>
        </li>
      </ul>
    </div>
  );
};

Social.displayName = 'SocialMolecules';
Social.propTypes = {
  data: PropTypes.string,
};
export default Social;
