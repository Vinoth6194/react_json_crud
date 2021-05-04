import React from 'react';
import user from '../images/user.jpg';
function ContactDetail(props) {
  console.log('ContactDetails props');
  console.log(props);
  const { name, email } = props.location.state.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user_logo" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetail;
