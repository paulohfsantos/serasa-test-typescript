import React from 'react'
import { Link } from 'react-router-dom';
import LogoComponent from '../Logo/';
import Logo from '../../assets/serasa-logo-full.svg';
import Container from '../Container';
import './style.scss';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <Container>
          <ul>
            <li>
              <Link to="/">
                <LogoComponent logo={Logo} />
              </Link>
            </li>
          </ul>
        </Container>
      </nav>
    </header>
  )
}

export default Header