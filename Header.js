import React from 'react';
const Header = (props) => {
  const { branding } = props;
  return (
    <nav className="py-0 mb-3 navbar navbar-expand-sm navbar-dark bg-danger">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="mr-auto navbar-nav">
            <li className="nav-items">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
// Here we have used destructuring in line 4 & its a function based
//component so we will not use this keyword here.
