import PropTypes from 'prop-types';
import {Logo, Title} from '../atoms';
import {Social, Language, Contact, Service} from '../molecules';

const Footer = ({...data}) => {
  return (
    <div className="oGridFooter">
      <div className="oGridFooter-item1 oGridFooter-center oGridFooter-bRight oGridFooter-bBottom">
        <Title tag="h1" text={data.blocks.contact.title} />
      </div>
      <div className="oGridFooter-item2 oGridFooter-bRight oGridFooter-bBottom">
        <Title tag="h1" text={data.blocks.services.title} />
      </div>
      <div className="oGridFooter-item3 oGridFooter-bBottom" />
      <div className="oGridFooter-item4 oGridFooter-center oGridFooter-bRight oGridFooter-bBottom">
        <Contact {...data} />
      </div>
      <div className="oGridFooter-item5 oGridFooter-bRight oGridFooter-bBottom">
        <Service data={data} />
      </div>
      <div className="oGridFooter-item6 oGridFooter-bBottom">
        <Language {...data} />
      </div>
      <div className="oGridFooter-item7 oGridFooter-center oGridFooter-bRight">
        <Logo src={data.logo} alt="Logo Octree" />
      </div>
      <div className="oGridFooter-item8 oGridFooter-bRight" />
      <div className="oGridFooter-item9">
        <Social {...data} />
      </div>
    </div>
  );
};

Footer.displayName = 'FooterOrganism';
Footer.propTypes = {
  data: PropTypes.any,
};

export default Footer;
