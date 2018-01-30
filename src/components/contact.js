import React, { Component } from 'react';

class Contact extends Component {

  render() {
    return (
      <div className='contact-container'>
        <div id='contact-link' className='contact'>
          <div>CONTACT ME</div>
            <div className='contact-links'>
              <div><a href='mailto:virgilxu89@gmail.com'>Email</a></div>
              <div><a href='https://www.linkedin.com/in/virgil-xu-261b3550'>LinkedIn</a></div>
              <div><a href='https://github.com/vhxu'>Github</a></div>
            </div>
        </div>
      </div>
    )
  }
}

export default Contact;
