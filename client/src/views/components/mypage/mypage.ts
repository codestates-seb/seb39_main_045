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
  font-weight: 500;
  height: 18px;
`;

export const TapHomeBtn = styled(TapHome)`
  background: none;
  text-align: left;
  padding: 0;
  .material-symbols-outlined {
    vertical-align: -3px;
    font-size: 18px;
  }
`;

export const Title = styled.div<{ size: string }>`
  font-size: ${props => (props.size === 'title' ? '1.5rem' : '1.2rem')};
  padding-top: ${props => (props.size === 'content' ? '18px' : 0)};
`;

export const ContentBox = styled.div`
  background-color: var(--mypage-btn-beige);
  box-shadow: 2px 3px 5px rgba(192, 180, 152, 0.2);
  border: 1px solid var(--shadow-beige-03);
  height: 220px;
  border-radius: 5px;
  margin: 30px 0;
  padding: 25px 20px;
`;

export const Words = styled.div`
  text-align: center;
`;

export const ContentWrapper = styled.div`
  padding: 0 30px;
  margin-bottom: 30px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  //스크롤바 너비
  ::-webkit-scrollbar {
    width: 8px;
  }
  //스크롤바
  ::-webkit-scrollbar-thumb {
    height: 30%;
    background: var(--shadow-beige-03);
    border-radius: 10px;
  }
  //스크롤바 배경
  /* ::-webkit-scrollbar-track {
background: blue;
} */
`;
