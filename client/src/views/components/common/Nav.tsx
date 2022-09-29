import React, { useEffect } from 'react';
import { Menu, Wrapper } from './nav.style';
import { Icon } from '../icons';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useSelectorTyped from 'utils/useSelectorTyped';
import { click } from 'feature/location/locationSlice';

const NO_NAV_ROUTE: readonly string[] = ['/', '/login', '/signup'];
const ACTIVE_MAIN: readonly string[] = ['/main', '/main2'];

const Nav = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { path } = useSelectorTyped(state => state.location);
  const isHidden = NO_NAV_ROUTE.includes(path);
  const isMainPage = ACTIVE_MAIN.includes(path);

  useEffect(() => {
    dispatch(click({ path: location.pathname }));
  }, [location.pathname]);

  return (
  <Menu hidden={isHidden}>
    <Wrapper to='/main' isActive={isMainPage}>
      {isMainPage ? <Icon.ActiveLeft /> : <Icon.Left />}
    </Wrapper>
    <Wrapper to='/mypage' isActive={!isMainPage}>
      {isMainPage ? <Icon.Right/> : <Icon.ActiveRight/>}
    </Wrapper>
  </Menu>
  );
};

export default Nav;
