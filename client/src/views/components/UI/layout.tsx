import styled from 'styled-components';

export const FlexRow = styled.div`
  display: flex;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ScrollContainer = styled(FlexColumn)`
  overflow-wrap: anywhere;
  overflow-y: scroll;
  padding: 10px;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    height: 30%;
    background: var(--shadow-beige-03);
    border-radius: 10px;
  }
`;

export const ChallengeWrapper = styled.div`
  width: 75%;
  margin-bottom: 15px;
  border-bottom: 1px solid var(--graph-bg-green);
  padding: 20px;
`;

export const AlignCenter = styled.div`
  text-align: center;
`;
