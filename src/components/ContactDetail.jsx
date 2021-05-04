import React from 'react';
import user from '../images/user.jpg';
function ContactDetail() {
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user_logo" />
        </div>
        <div className="content">
          <div className="header">VK</div>
          <div className="description">vk@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetail;
