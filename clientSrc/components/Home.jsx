import React from 'react';

const Home = React.createClass({
  render() {
    return (
      <div className="home">
        <div className="banner-container">
          <h1>jackson c morgan</h1>
          <p>computer scientist</p>
          <div className="buttonNavigation">
            <a href="https://medium.com/search?q=%40JacksonMorgan%20tech" className="linkButton">
              tech blog
            </a>
            <a href="https://medium.com/search?q=%40JacksonMorgan%20politics" className="linkButton">
              political blog
            </a>
          </div>
        </div>
      </div>
    );
  }
});

export default Home;
