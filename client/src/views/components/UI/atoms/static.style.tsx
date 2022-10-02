import { css } from 'styled-components';

const SpanWithIcon = css`
  vertical-align: 5px;
  padding-left: 5px;
`;

const Border1 = css`
  box-shadow: 2px 3px 6px rgba(192, 180, 152, 0.2);
  border-radius: 10px;
`;

const Border2 = css`
  border-radius: 20px;
  flex: 1;
`;

const SelfCenter = css`
  align-self: center;
  justify-self: center;
`;

const Trans = css`
  transition: all 0.3s;
`;

const MrgTop = css`
  margin-top: 12px;
`;

const Green = css`
  background: #e0f5ce;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.05);
`;

export const Statics = {
  SpanWithIcon,
  Border1,
  Border2,
  SelfCenter,
  Trans,
  MrgTop,
  Green
};
