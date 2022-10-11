import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Statics } from 'views/components/UI/atoms/static.style';

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
  `;

export const Wrapper = styled(NavLink).withConfig({
  shouldForwardProp: (p) => !['isActive'].includes(p)
})<{ isActive: boolean }>`
  ${Statics.Trans}
  flex: 1;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--nav-bg-green);
  box-shadow: ${p => p.isActive ? 'inset 0 10px 24px hsla(0, 0%, 0%, 0.05), inset 0 2px 4px hsla(0, 0%, 0%, 0.1)' : 'none'};
`;
