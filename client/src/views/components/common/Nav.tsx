import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, Wrapper } from './nav.style';
import { Icon } from '../icons';

const NO_NAV_ROUTE: readonly string[] = ['/', '/login', '/signup'];

const Nav = () => {
  const location = useLocation();
  const isHidden = NO_NAV_ROUTE.includes(location.pathname);
  const [isMainPage, setIsMainPage] = useState(true);

  useEffect(() => {
    if (location.pathname.startsWith('/mypage')) {
      setIsMainPage(false);
    } else {
      setIsMainPage(true);
    }
  }, [location.pathname]);

  return (
  <Menu hidden={isHidden}>
    <Wrapper to='/main'>
      {isMainPage ? <Icon.ActiveLeft /> : <Icon.Left />}
    </Wrapper>
    <Wrapper to='/mypage'>
      {isMainPage ? <Icon.Right /> : <Icon.ActiveRight />}
    </Wrapper>
  </Menu>
  );
};

export default Nav;
