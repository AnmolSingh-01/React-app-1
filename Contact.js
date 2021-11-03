import React, { Component } from 'react';

class Contact extends Component {
  state = {
    showContactInfo: false,
  };
  render() {
    const { name, email, Address } = this.props;
    const { showContactInfo } = this.state;
    return (
      <div className="mb-3 card card-body">
        <h4>
          {name}{' '}
          <i
            onClick={() =>
              this.setState({ showContactInfo: !this.state.showContactInfo })
            }
            className="fas fa-sort-down"
          ></i>
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email : {email}</li>
            <li className="list-group-item"> Address : {Address}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}
export default Contact;
