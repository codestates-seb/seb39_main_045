import styled from 'styled-components';
import { Layout } from 'views/components/UI/Layout.style';
import { Statics } from 'views/components/UI/atoms/static.style';

export const GreenContainer = styled(Layout.ScrollContainer)`
  ${Statics.Border2}
  ${Statics.Green}
  z-index: 3;
  height: calc(100vh - 200px);
  align-items: center;
  padding-bottom: 36px;
`;

export const ColumnWrapper = styled(Layout.FlexColumn)`
  height: calc(100vh - 220px);
`;

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

export const ImageBox = styled.img`
  ${Statics.Border1}
  padding: 12px;
  object-fit: contain;
  border: 1px solid var(--graph-bg-green);
  margin-top: 24px;
`;

export const Center = styled(Layout.FlexColumn)`
  align-items: center;
  justify-content: center;
  height: 100%;
  z-index: 5;
  & :first-child {
    margin-bottom: 12px;
  }
`;
