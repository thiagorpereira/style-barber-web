import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notification';

import logo from '~/assets/logo-purple.svg';

import { Container, Content, Profile } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="StyleBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Thiago Ribeiro</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Thiago Ribeiro"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
