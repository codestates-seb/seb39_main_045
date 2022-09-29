import styled from 'styled-components';
import { Statics } from 'views/components/UI/atoms/static.style';

const ShareBtn = styled.button`
  ${Statics.Trans};
  ${Statics.Border1};
  height: 30px;
  width: 90px;
  margin-right: 5px;
  span {
    ${Statics.SpanWithIcon}
  }
`;

const FitBtn = styled.button`
  width: fit-content;
  font-size: 16px;
`;

export {
  ShareBtn,
  FitBtn
};
