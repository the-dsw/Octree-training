import PropTypes from 'prop-types';

const Contact = ({...data}) => {
  return (
    <div className="mInfo">
      <div className="mContact">
        <p>{data.blocks.contact.email}</p>
        <p>{data.blocks.contact.tel}</p>
      </div>
      <div className="mAddress">
        <ul>
          <li>{data.blocks.contact.address.name}</li>
          <li>{data.blocks.contact.address.street}</li>
          <li>
            {data.blocks.contact.address.country}-
            {data.blocks.contact.address.NP} {''}{' '}
            {data.blocks.contact.address.city}
          </li>
        </ul>
      </div>
    </div>
  );
};

Contact.displayName = 'ContactMolecules';
Contact.propTypes = {
  data: PropTypes.string,
};

export default Contact;
