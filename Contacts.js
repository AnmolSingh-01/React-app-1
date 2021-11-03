import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      Contacts: [
        {
          id: 1,
          name: 'Anmol Singh',
          email: 'anmol359@gmail.com',
          Phone: 8013255594,
        },
        {
          id: 2,
          name: 'Ujjwal Singh',
          email: 'anmol359@gmail.com',
          Phone: 9804526750,
        },
        {
          id: 3,
          name: 'Ajju Singh',
          email: 'ajju359singh@gmail.com',
          Phone: 9903734456,
        },
      ],
    };
  }
  render() {
    const { Contacts } = this.state;
    return (
      <React.Fragment>
        {Contacts.map((contact) => (
          <Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
          />
        ))}
      </React.Fragment>
    );
  }
}
export default Contacts;
