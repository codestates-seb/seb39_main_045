import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Left from 'views/components/icons/menu/Left';
import Right from 'views/components/icons/menu/Right';
import ActiveLeft from 'views/components/icons/menu/ActiveLeft';
import ActiveRight from 'views/components/icons/menu/ActiveRight';

const Nav = () => {
  const location = useLocation();
  const [isMainPage, setIsMainPage] = useState(true);

  useEffect(() => {
    if (location.pathname.startsWith('/mypage')) {
      setIsMainPage(false);
    } else {
      setIsMainPage(true);
    }
  }, [location.pathname]);

  return (
  <Menu>
    <Wrapper to='/main'>
      {isMainPage ? <ActiveLeft /> : <Left />}
    </Wrapper>
    <Wrapper to='/mypage'>
      {isMainPage ? <Right /> : <ActiveRight />}
    </Wrapper>
  </Menu>
  );
};

const Menu = styled.nav`
position: fixed;
bottom: 0;
z-index: 4;
height: 70px;
width: 100%;
max-width: 800px;
display: flex;
align-items: center;
border-top: 2px solid var(--nav-stroke-green);
.active {
  box-shadow: inset 0 10px 24px hsla(0, 0%, 0%, 0.05), inset 0 2px 4px hsla(0, 0%, 0%, 0.1);
}
`;
const Wrapper = styled(NavLink)`
flex: 1;
height: 70px;
display: flex;
align-items: center;
justify-content: center;
background-color: var(--nav-bg-green);
`;

export default Nav;
