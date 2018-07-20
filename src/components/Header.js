import React from 'react';
import Nav from './Nav';
// import Search from './';
class Header extends React.Component {
  render() {
    return (
      <header>
        <Nav />
        {/* <Search /> */}
      </header>
    );
  }
}
export default Header;
