import styled from 'styled-components';
import { Layout } from 'views/components/UI/Layout.style';

export const NowChallengeGrid = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1.7fr; 
  grid-template-rows: 1fr 1fr; 
  grid-template-areas: 
    "number day"
    "number content"
    "number img"; 
  & :first-child {
    grid-area: number;
  }
  & :nth-child(2) {
    grid-area: day;
  }
  & :nth-child(3) {
    grid-area: content;
  }
  & :nth-child(4) {
    grid-area: img;
  }
  gap: 10px;
  margin: 15px;
`;

export const GraphWrapper = styled.div`
  height: 36px;
  margin: 24px 0;
`;

export const BaseArea = styled(Layout.FlexRow)`
  background-color: var(--mypage-bg-beige);
  position: relative;
  justify-content: flex-end;
  box-shadow: 1px 1px 5px 1px var(--shadow-beige-03);
`;

export const GreenArea = styled(Layout.FlexRow)`
  width: calc(100% * 0.5 - 60px);
  z-index: 1;
  background-color: var(--graph-bg-green);
  position: absolute;
  justify-content: space-between;
`;
