import React from 'react';
const docId = '0B7a9cBFHr0AYeUFSOUlnT1FhSFU';
const resumeDisplayLink = 'https://drive.google.com/uc?id=' + docId;

const Resume = React.createClass({
  render() {
    return (
      <div className="resume">
        <embed src={resumeDisplayLink} height="100%" width="100%" type="application/pdf" />
      </div>

    );
  }
});

export default Resume;
