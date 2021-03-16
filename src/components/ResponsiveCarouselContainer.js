import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import './DemoComponent.css';
import backArrow from '../assets/arrow_back.svg';

class ResponsiveCarouselContainer extends Component {
  constructor(props) {
    super(props);
  }

  handleOnClick = (e) => {
    this.props.onClick();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}><img alt="logo" className="img" src={backArrow} /></button>
      </div>
    );
  }
}

ResponsiveCarouselContainer.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ResponsiveCarouselContainer;