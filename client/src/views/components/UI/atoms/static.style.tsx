import { css } from 'styled-components';

const SpanWithIcon = css`
  vertical-align: 5px;
  padding-left: 5px;
`;

const Border1 = css`
  box-shadow: 2px 3px 5px rgba(192, 180, 152, 0.2);
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

export const Statics = {
  SpanWithIcon,
  Border1,
  Border2,
  SelfCenter,
  Trans,
  MrgTop
};
