import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../forms/Button';
import './Header.scss';

function Header() {
  const history = useHistory();

    return(
      <header>
        <div className="header__column">
          <Button className="nav-button" type="flat" onClick={() => history.goBack()}>&lt;</Button>
          <Button className="nav-button" type="flat" onClick={() => history.goForward()}>&gt;</Button>
        </div>
        <div className="header__column">
          <h2>FavidPad</h2>
        </div>
        <div className="header__column"></div>
      </header>
    );
}

export default Header;