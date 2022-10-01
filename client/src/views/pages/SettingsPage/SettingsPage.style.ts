import styled from 'styled-components';
import { FitBtn } from 'views/components/UI/molecules/button.style';
import { Statics } from 'views/components/UI/atoms/static.style';

export const Form = styled.form`
  ${Statics.Border1}
  display: flex;
  flex-direction: column;
  padding: 24px;
  border: 1px solid var(--graph-bg-green);
  background-color: #e0f5ce;
  `;

export const Btn = styled(FitBtn)`
  ${Statics.Border1}
  ${Statics.Trans}
  align-self: center;
  margin: 30px 0 15px 0;
  padding: 12px;
  background-color: var(--mypage-btn-yellow);
  &:hover {
    background-color: var(--graph-bg-green);
  }
`;

export const Exit = styled(FitBtn)`
  ${Statics.MrgTop}
  background: none;
  align-self: flex-end;
`;
