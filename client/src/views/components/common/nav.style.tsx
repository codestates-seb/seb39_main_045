import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Menu = styled.nav<{ hidden: boolean }>`
  position: fixed;
  bottom: 0;
  z-index: 4;
  height: 70px;
  width: 100%;
  max-width: 800px;
  display: ${p => p.hidden ? 'hidden' : 'flex'};
  align-items: center;
  border-top: 2px solid var(--nav-stroke-green);
  .active {
    box-shadow: inset 0 10px 24px hsla(0, 0%, 0%, 0.05), inset 0 2px 4px hsla(0, 0%, 0%, 0.1);
  }
`;

export const Wrapper = styled(NavLink)`
  flex: 1;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--nav-bg-green);
`;
