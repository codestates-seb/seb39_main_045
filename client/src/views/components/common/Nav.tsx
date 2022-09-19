import React from 'react';
import styled from 'styled-components';
import Left from 'views/components/icons/menu/Left';
// import Right from 'views/components/icons/menu/Right';
// import ActiveLeft from 'views/components/icons/menu/ActiveLeft';
import ActiveRight from 'views/components/icons/menu/ActiveRight';

const Nav = () => {
  return (
  <Menu>
    <Wrapper>
      <Left />
    </Wrapper>
    <Wrapper>
      <ActiveRight />
    </Wrapper>
  </Menu>
  );
};

const Menu = styled.nav`
position: fixed;
bottom: 0;
z-index: 1000;
background-color: var(--nav-bg-green);
height: 70px;
width: 100%;
display: flex;
align-items: center;
border-top: 1 solid var(--nav-stroke-green);
`;

const Wrapper = styled.div`
flex: 1;
height: 100px;
display: flex;
align-items: center;
justify-content: center;
/* box-shadow: 0 0 10px 2px var(--nav-stroke-green) inset; */
`;

export default Nav;
