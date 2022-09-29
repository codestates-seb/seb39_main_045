import styled from 'styled-components';
import { ShareBtn, FitBtn } from 'views/components/UI/molecules/button.style';
import { Statics } from 'views/components/UI/atoms/static.style';
import { Layout } from 'views/components/UI/Layout.style';

interface IconProps {
  bgColor: string
  borderColor: string
}

export const IconWrapper = styled.div<IconProps>`
  ${Statics.SelfCenter};
  ${Statics.MrgTop}
  border-radius: 50%;
  background-color: ${p => p.bgColor};
  width: fit-content;
  padding: 10px;
  border: ${p => `6px ridge ${p.borderColor}`};
`;

export const StampContiner = styled.div`
  ${Statics.SelfCenter}
  ${Statics.MrgTop}
  display: grid;
  width: 100%;
  grid-template-columns: 20% repeat(auto-fill, 20%);
`;

export const KakaoBtn = styled(ShareBtn)`
  background-color: var(--mypage-btn-beige);
  &:hover {
    background-color: var(--mypage-btn-yellow);
  }
`;

export const TweetBtn = styled(ShareBtn)`
  color: white;
  background-color: #1d9bf0;
  &:hover {
    background-color: #2e8bc9;
  }
`;

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

export const GreenArea = styled(Layout.FlexRow)`
  width: calc(100% * 0.5 - 60px);
  z-index: 1;
  background-color: var(--graph-bg-green);
  position: absolute;
  justify-content: space-between;
`;

export const BaseArea = styled(Layout.FlexRow)`
  background-color: var(--mypage-bg-beige);
  position: relative;
  justify-content: flex-end;
  box-shadow: 1px 1px 5px 1px var(--shadow-beige-03);
`;

export const GraphWrapper = styled.div`
  height: 36px;
  margin: 24px 0;
`;

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

export const Container = styled(Layout.FlexColumn)`
  background-color: var(--mypage-bg-beige);
  height: calc(100vh - 70px);
  padding: 24px;
  font-weight: 600;
`;

// MypagePrevChallenges
export const ColumnWrapper = styled(Layout.FlexColumn)`
  height: calc(100vh - 220px);
`;

/* 부모 요소 height를 작게, 자식 요소를 크게 */
export const FlexRowMenu = styled(Layout.FlexRow)`
  height: 30px;
`;

export const HalfTapMenu = styled(Layout.AlignCenter).withConfig({
  shouldForwardProp: (p) => !['isActive'].includes(p)
})<{ isActive: boolean }>`
  ${Statics.Border2}
  cursor: pointer;
  height: 100px;
  width: 25%;
  padding: 6px;
  border: ${p => p.isActive ? '1px solid var(--graph-bg-green)' : '1px solid var(--mypage-btn-yellow)'};
  background-color: ${p => p.isActive ? '#e0f5ce' : 'var(--mypage-btn-beige)'};
  box-shadow: ${p => p.isActive ? '0px 0px 1px rgba(0, 0, 0, 0.05)' : '0px 0px 3px rgba(0, 0, 0, 0.05)'};
`;

export const DiaryBox = styled(Layout.ScrollContainer)`
  ${Statics.Border2}
  background: #e0f5ce;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.05);
  width: 100%;
  z-index: 3;
  height: calc(100vh - 200px);
  align-items: center;
  padding-bottom: 36px;
`;
// MypagePrevChallenges 끝

// pREVstudycHALLenges
export const ImageBox = styled.img`
  padding: 6px;
  object-fit: contain;
  border: 1px solid var(--graph-bg-green);
  margin-top: 24px;
`;

export const ContentBox = styled.div`
  padding: 24px;
  height: fit-content;
  margin-bottom: 12px;
  background-color: var(--mypage-btn-beige);
  ${Statics.Border1}
`;

export const TapUserInfo = styled.div`
  cursor: pointer;
  font-size: 20px;
  padding: 12px 6px;
  border-bottom: 0.6px solid var(--shadow-beige-01);
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

export const Form = styled.form`
  ${Statics.Border1}
  display: flex;
  flex-direction: column;
  background-color: var(--mypage-btn-beige);
  padding: 24px;
  border: 1px solid var(--shadow-beige-03);
`;

export const Btn = styled(FitBtn)`
  ${Statics.Border1}
  ${Statics.Trans}
  align-self: center;
  margin: 30px 0 15px 0;
  padding: 12px;
  background-color: var(--intro-btn-yellow);
  border: none;
  &:hover {
    background-color: var(--graph-bg-green);
  }
`;

export const Exit = styled(FitBtn)`
  ${Statics.MrgTop}
  background: none;
  align-self: flex-end;
`;
