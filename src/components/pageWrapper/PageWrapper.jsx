import React from 'react';

const PageWrapper = ({ children }) => (
  <div className="h-100" id="chat">
    <div className="d-flex flex-column h-100">
      {children}
    </div>
  </div>
);

export default PageWrapper;
