import styled from 'styled-components';
import { Statics } from 'views/components/UI/atoms/static.style';
import { Layout } from 'views/components/UI/Layout.style';

export const TapUserInfo = styled.div`
  cursor: pointer;
  font-size: 20px;
  padding: 12px 6px;
  display: grid;
  grid-template-columns: 95% 5%; 
  grid-template-rows: 1fr 1fr; 
`;

export const TapMenu = styled(Layout.FlexRow)`
  ${Statics.Border1}
  cursor: pointer;
  border: 0.6px solid var(--shadow-beige-01);
  font-size: 24px;
  height: 80px;
  align-items: center;
  margin-top: 36px; 
  & > * {
    margin: 0 12px;
  }
`;

export const TapHome = styled.div`
  font-size: 16px;
  margin-bottom: 30px;
  font-weight: 500;
  height: 18px;
`;

export const TapHomeBtn = styled(TapHome)`
  background: none;
  text-align: left;
  padding: 0;
`;
