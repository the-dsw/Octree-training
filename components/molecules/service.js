import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Icon} from '../atoms';

/**
 * class Services
 */
class Service extends Component {
  /**
   * Constructor
   * @param {obj} props
   */
  constructor(props) {
    super(props);
  }

  renderServices = () => {
    const services = this.props.data.blocks.services.links.map((link, i) => {
      return (
        <div key={i}>
          <a href={link.link}>{link.name}</a>
        </div>
      );
    });
    return services;
  };
  /**
   * It returns data services
   * @param {obj} data
   * @return {obj} data
   */
  render() {
    return <div>{this.renderServices()}</div>;
  }
}

Service.displayName = 'ServiceMolecules';
Service.propTypes = {
  data: PropTypes.any,
};

export default Service;
