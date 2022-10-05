import React from 'react';
import { Menu, Wrapper } from './nav.style';
import { Icon } from '../icons';
import { useDispatch } from 'react-redux';
import useSelectorTyped from 'utils/useSelectorTyped';
import { clickMain, clickUsers } from 'feature/location';
interface NavigationProps {
  isLoggedIn: boolean
}

const NO_NAV_ROUTE: readonly string[] = ['/', '/login', '/signup', '/forgotpw'];
const ACTIVE_MAIN: readonly string[] = ['/main', '/main2'];

const Nav = (props: NavigationProps) => {
  const dispatch = useDispatch();
  const { path } = useSelectorTyped(state => state.location);
  const isHidden = NO_NAV_ROUTE.includes(path);
  const isMainPage = ACTIVE_MAIN.includes(path);

  return (
    <>
      {props.isLoggedIn
        ? <Menu hidden={isHidden}>
          <Wrapper to='/main' isActive={isMainPage} onClick={() => dispatch(clickMain())}>
            {isMainPage ? <Icon.ActiveLeft /> : <Icon.Left />}
          </Wrapper>
          <Wrapper to='/mypage' isActive={!isMainPage} onClick={() => dispatch(clickUsers())} >
            {isMainPage ? <Icon.Right /> : <Icon.ActiveRight />}
          </Wrapper>
        </Menu>
        : null}
    </>
  );
};

export default Nav;
