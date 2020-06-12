import React from 'react';

import './Footer.scss';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="footer">
      <p>Copyright {year} by <a href="https://github.com/moose_96">Piotr Łosiak</a></p>
    </div>
  );
}

export default Footer;