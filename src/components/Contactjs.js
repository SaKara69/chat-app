import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Contact.css';

export default class Contactjs extends Component {
  state = {
    online: false,
  };

  isOnline = () => {
    this.setState({ online: !this.state.online });
  };
  render() {
    return (
      <div className='Contact'>
        <img className='avatar' src={this.props.avatar} alt='monsieur 1' />
        <div>
          <p className='name'>{this.props.name}</p>
          <div
            className='status'
            style={{ cursor: 'pointer' }}
            onClick={this.isOnline}
          >
            <span
              className={this.state.online ? 'status-online' : 'status-offline'}
            ></span>
            <p className='status-text'>
              {this.state.online ? 'Online' : 'Offline'}
            </p>
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
