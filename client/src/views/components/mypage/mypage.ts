import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
background-color: var(--mypage-bg-beige);
height: 100vh;
padding: 30px 25px;
`;

export const TapHome = styled.div`
font-size: 1rem;
margin-bottom: 30px;
`;

export const TapMenu = styled.button`
background: none;
box-shadow: 2px 3px 5px rgba(192, 180, 152, 0.2);
border-radius: 10px;
border: 0.1px solid var(--shadow-beige-01);
font-size: 1.5rem;
height: 80px;
display: flex;
align-items: center;
margin-top: 30px;
`;
