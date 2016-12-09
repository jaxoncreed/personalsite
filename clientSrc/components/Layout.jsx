import React from 'react';
import {Link} from 'react-router'


const Layout = React.createClass({
  render() {
    return (
      <div>
        <header>
          <h1 className="expanded"><Link to='/'>jackson c morgan</Link></h1>
          <h1 className="condensed"><Link to='/'>jcm</Link></h1>
          <nav>
            <ul>
              <li><a href="https://twitter.com/OisForOh">
                <i className="fa fa-twitter"></i>
              </a></li>
              <li><a href="https://www.linkedin.com/in/jacksoncmorgan">
                <i className="fa fa-linkedin"></i>
              </a></li>
              <li><a href="https://medium.com/@JacksonMorgan/">
                <i className="fa fa-medium"></i>
              </a></li>
              <li><a href='https://medium.com/search?q=%40JacksonMorgan%20tech'>
                <i className="fa fa-laptop"></i><span className="linkText">tech blog</span>
              </a></li>
              <li><a href='https://medium.com/search?q=%40JacksonMorgan%20politics'>
                <i className="fa fa-comments-o"></i><span className="linkText">political blog</span>
              </a></li>
              <li><Link to='/resume'>
                <i className="fa fa-file-text-o"></i><span className="linkText">resume</span>
              </Link></li>
              <li><Link to='/contact'>
                <i className="fa fa-paper-plane-o"></i><span className="linkText">contact</span>
              </Link></li>
            </ul>
          </nav>
        </header>
        <main>{this.props.children}</main>
      </div>
    );
  }
});

export default Layout;
