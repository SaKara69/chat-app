import React, { Component } from 'react';
import Contactjs from './Contactjs';

export default class ContactList extends Component {
  state = {
    users: [
      {
        name: 'Robert Reyes',
        avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
      },
      {
        name: 'Nellie Caldwell',
        avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      },
      {
        name: 'Vernon Mason',
        avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
      },
      {
        name: 'Erica Hunt',
        avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
      },
      {
        name: 'Juanita Phillips',
        avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
      },
    ],
  };
  render() {
    return (
      <div>
        {this.state.users.map((user) => (
          <Contactjs name={user.name} avatar={user.avatar} />
        ))}
      </div>
    );
  }
}
