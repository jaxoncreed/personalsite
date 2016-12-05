import React from 'react';


const Layout = React.createClass({
  render() {
    return (
      <div>
        <header>
          <h1>zenow</h1>
          <nav>

          </nav>
        </header>
        <main>{this.props.children}</main>
      </div>
    );
  }
});

export default Layout;
