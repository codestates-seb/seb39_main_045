/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/member-delimiter-style */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--mypage-bg-beige);
  height: calc(100vh - 70px);
  padding: 30px 25px;
  font-weight: 600;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: calc(100vh - 220px);
`;

/* 부모 요소 height를 작게, 자식 요소를 크게 */
export const FlexRowMenu = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
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

interface TitleProps {
  fontSize?: string;
  paddingTop?: string;
  marginBtm?: string;
  textShadow?: string;
}

export const Title = styled.div<TitleProps>`
  font-size: ${props =>
    props.fontSize === 'title' ? '1.5rem' : props.fontSize};
  padding-top: ${props => props.paddingTop};
  margin-bottom: ${props => props.marginBtm};
  background-image: ${props => props.textShadow};
`;

Title.defaultProps = {
  fontSize: 'title',
  paddingTop: '0',
  marginBtm: '0',
  textShadow: 'none',
};

interface DefaultBoxProps {
  bgColor?: string;
  border?: string;
}

export const DefaultBox = styled.div<DefaultBoxProps>`
  background-color: ${p => p.bgColor};
  box-shadow: 2px 3px 5px rgba(192, 180, 152, 0.2);
  border: ${p => p.border};
  border-radius: 5px;
  margin: 30px 0;
`;

DefaultBox.defaultProps = {
  bgColor: 'var(--mypage-btn-beige)',
  border: '1px solid var(--shadow-beige-03)',
};

interface ContentBoxProps {
  height?: string;
  padding?: string;
  flex?: string;
  alignItems?: string;
}
export const ContentBox = styled(DefaultBox)<ContentBoxProps>`
  height: ${props => props.height};
  padding: ${props => props.padding};
  display: ${props => props.flex};
  align-items: ${props => props.alignItems};
`;

ContentBox.defaultProps = {
  flex: 'content',
  alignItems: 'normal',
  padding: '25px 20px',
};

export const Words = styled.div`
  text-align: center;
`;

export const ContentWrapper = styled.div<{ padding: string }>`
  display: flex;
  flex-direction: column;
  padding: ${p => p.padding};
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    height: 30%;
    background: var(--shadow-beige-03);
    border-radius: 10px;
  }
`;

// const Icon = styled.button`
// background: none;
// vertical-align: middle;
// z-index: 1;
// position: absolute;
// `;
