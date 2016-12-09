import React from 'react';

const Contact = React.createClass({
  render() {
    return (
      <div className="contact">
        <table className="banner-container">
          <tbody>
            <tr>
              <td><i className="fa fa-twitter"></i></td>
              <td>
                <a href="https://twitter.com/OisForOh">twitter.com/OisForOh</a>
              </td>
            </tr>

            <tr>
              <td><i className="fa fa-linkedin"></i></td>
              <td>
                <a href="https://www.linkedin.com/in/jacksoncmorgan">linkedin.com/in/jacksoncmorgan</a>
              </td>
            </tr>

            <tr>
              <td><i className="fa fa-medium"></i></td>
              <td>
                <a href="https://medium.com/@JacksonMorgan">medium.com/@JacksonMorgan</a>
              </td>
            </tr>

            <tr>
              <td><i className="fa fa-github"></i></td>
              <td>
                <a href="https://github.com/jaxoncreed">github.com/jaxoncreed</a>
              </td>
            </tr>

            <tr>
              <td><i className="fa fa-envelope-o"></i></td>
              <td>jaxoncreed@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
});

export default Contact;
