import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Icon} from '../atoms';
import {Collapsible} from '../molecules';

/**
 * class Service
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
        <div className="mServices-list" key={i}>
          <a href={link.link}>{link.name}</a>
        </div>
      );
    });
    return services;
  };

  renderServicesLast = () => {
    const services = this.props.data.blocks.services.links.map((link, i) => {
      return (
        <div key={i}>
          <a href={link.link}>{link.name}</a>
        </div>
      );
    });
    return services.splice(3);
  };
  /**
   * It returns data services
   * @param {obj} data
   * @return {obj} data
   */
  render() {
    return (
      <div>
        {this.renderServices()}
        <Collapsible>{this.renderServicesLast()}</Collapsible>
      </div>
    );
  }
}

Service.displayName = 'ServiceMolecules';
Service.propTypes = {
  data: PropTypes.any,
};

export default Service;
