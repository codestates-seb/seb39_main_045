import styled from 'styled-components';
import { Statics } from './atoms/static.style';

const FlexRow = styled.div`
  display: flex;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const ScrollContainer = styled(FlexColumn)`
  overflow-wrap: anywhere;
  overflow-y: scroll;
  padding: 10px;
  ::-webkit-scrollbar {
    width: 8px;
    background: green;
  }
  ::-webkit-scrollbar-thumb {
    height: 30%;
    background: var(--shadow-beige-03);
    border-radius: 10px;
  }
`;

const ChallengeWrapper = styled.div`
  word-break: keep-all;
  width: 75%;
  margin-bottom: 15px;
  border-bottom: 1px solid var(--graph-bg-green);
  padding: 20px;
`;

const AlignCenter = styled.div`
  text-align: center;
`;

const ContentBox = styled.div`
  ${Statics.Border1}
  padding: 24px;
  height: fit-content;
  margin-bottom: 12px;
  background-color: var(--mypage-btn-beige);
`;

const Image = styled.img`
  ${Statics.Border1}
  ${Statics.Trans}
  max-width: 50%;
  object-fit: contain;
  @media only screen and (max-width: 400px) {
    width: 160px;
  }
`;

const PageContainer = styled(FlexColumn)`
  background-color: var(--mypage-bg-beige);
  padding: 24px 24px 96px 24px;
  min-height: 100vh;
  font-weight: 600;
`;

export const Layout = {
  FlexRow,
  FlexColumn,
  ScrollContainer,
  ChallengeWrapper,
  AlignCenter,
  ContentBox,
  PageContainer,
  Image
};
