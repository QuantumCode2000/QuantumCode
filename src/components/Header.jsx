import React from 'react';
import quantum_logo from '../images/logo-quantum.png';
//import github_logo from '../images/github-logo_icon-icons.com_73546.png'
import '../styles/Header.css';

export const Header = () => {
  return (
    <React.Fragment>
      <header className="header">
        <ul className="logo">
          <figure className="quantum-logo">
            <img src={quantum_logo} alt="quatum logo" />
          </figure>
        </ul>
        <ul className="sections" >
          <li>HOME</li>
          <li>SOBRE MÍ</li>
          <li>PROYECTOS</li>
          <li>CONTACTO</li>
        </ul>
        <ul className="social-network">
            <figure className="social-github">
              <img src="" alt="" />
            </figure>
        </ul>
      </header>
    </React.Fragment>
)
}

export default Header;