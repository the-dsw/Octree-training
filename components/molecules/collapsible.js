import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Icon} from '../atoms';

/**
 * class Service
 */
class Collapsible extends Component {
  /**
   * Constructor
   * @param {obj} props
   */
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }
  /**
   * handleToggle
   * @param {e} e is the event
   */
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }
  /**
   * It returns data from services
   * @param {obj} children
   * @return {obj} children
   */
  render() {
    const {children} = this.props;
    const {isExpanded} = this.state;
    return (
      <div className={`mPanel ${isExpanded ? 'is-expanded' : ''}`}>
        <div className="mPanel-collapse">
          <div className="mPanel-body">{children}</div>
        </div>
        <div className="mCursor">
          <Icon
            onClick={(e) => this.handleToggle(e)}
            className="aIcon-dots aIcon-white"
          />
        </div>
      </div>
    );
  }
}

Collapsible.displayName = 'CollapsibleMolecules';
Collapsible.propTypes = {
  children: PropTypes.any,
};

export default Collapsible;
