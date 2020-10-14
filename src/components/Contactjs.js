import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Contact.css';

export default class Contactjs extends Component {
  render() {
    return (
      <div className='Contact'>
        <img className='avatar' src={this.props.avatar} alt='monsieur 1' />
        <div>
          <p className='name'>{this.props.name}</p>
          <div className='status'>
            <span
              className={this.props.online ? 'status-online' : 'status-offline'}
            ></span>
            <p className='text'>{this.props.statusText}</p>
          </div>
        </div>
      </div>
    );
  }
}

Contactjs.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  statusCircle: PropTypes.bool.isRequired,
  statusText: PropTypes.string.isRequired,
};
