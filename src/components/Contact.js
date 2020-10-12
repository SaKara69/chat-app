import React from 'react';
import './Contact.css';

const name = 'Sophie Mason';
const avatar = 'https://randomuser.me/api/portraits/women/40.jpg';
const isONline = true;
const statusOnline = <span className='status-online'></span>;
const statusOffline = <span className='status-offline'></span>;

function Contact() {
  return (
    <div className='Contact'>
      <img src={avatar} className='avatar' alt='femme brune de profil'></img>
      <div>
        <h4 className='name'>{name}</h4>
        <div className='status'>
          <span>{isONline ? statusOnline : statusOffline}</span>
          <p className='status-text'>{isONline ? 'Online' : 'Offline'}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
