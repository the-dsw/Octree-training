import PropTypes from 'prop-types';

const Title = ({tag, text}) => {
  if (tag === 'h1') {
    return <h1>{text}</h1>;
  } else if (tag === 'h2') {
    return <h2>{text}</h2>;
  } else if (tag === 'h3') {
    return <h3>{text}</h3>;
  } else if (tag === 'h4') {
    return <h4>{text}</h4>;
  } else if (tag === 'h5') {
    return <h5>{text}</h5>;
  } else if (tag === 'h6') {
    return <h6>{text}</h6>;
  }
};

Title.displayName = 'TitleAtom';
Title.propTypes = {
  tag: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default Title;
