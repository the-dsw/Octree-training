import PropTypes from 'prop-types';
import {Icon} from '../atoms';

const Language = ({...data}) => {
  const link = data.links.map((link) => link.split('@'));
  return (
    <div className="mLanguages">
      <div className="mFirst">
        <p>
          <a href={link[0][1]}>{link[0][0]}</a>
        </p>
        <p>
          <a href={link[1][1]}>{link[1][0]}</a>
        </p>
      </div>
      <div className="mLang">
        <ul>
          <li className="mIcon_icon">
            <a href={data.url}>
              <Icon className="aIcon-web aIcon-white" />
            </a>
          </li>
          <li className="mIcon">
            <a href={data.lang.fr}>Fr</a>
          </li>
          <li className="mIcon">
            <a href={data.lang.en}>En</a>
          </li>
          <li className="mIcon_hide">
            <a href="#">
              <Icon className="aIcon-arrowUp aIcon-white" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

Language.displayName = 'LanguageMolecules';
Language.propTypes = {
  data: PropTypes.string,
};
export default Language;
