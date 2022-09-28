import styled from 'styled-components';
import { Statics } from 'views/components/UI/atoms/Static.style';
import { Layout } from 'views/components/UI/Layout.style';
import { ShareBtn } from 'views/components/UI/molecules/Button.style';

export const ShareTitle = styled(Layout.FlexRow)`
  ${Statics.Trans};
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    div:nth-child(2) {
      ${Statics.MrgTop};
    }
  }
`;

export const RankBox = styled(Layout.FlexRow)`
  ${Statics.Border1}
  padding: 6px 24px;
  margin: 12px 0;
  font-size: 20px;
  border: 0.5px solid var(--graph-bg-green);
  height: 50px;
  text-align: center;
  align-items: center;
  & :nth-child(2) {
    flex: 1;
  }
  &:first-child {
    background-color: #d3efbb;
  }
  &:nth-child(2) {
    background-color: #d3efbb89;
  }
  &:nth-child(3) {
    background-color: #d3efbb3f;
  }
  &:nth-child(5) {
    border: 1px solid var(--shadow-beige-02);
  }
`;

export const TweetBtn = styled(ShareBtn)`
  color: white;
  background-color: #1d9bf0;
  &:hover {
    background-color: #2e8bc9;
  }
`;

export const KakaoBtn = styled(ShareBtn)`
  background-color: var(--mypage-btn-beige);
  &:hover {
    background-color: var(--mypage-btn-yellow);
  }
`;
