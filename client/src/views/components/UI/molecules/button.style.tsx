import styled from 'styled-components';
import { SpanWithIcon } from '../atoms/static.style';

const ShareBtn = styled.button`
  height: 30px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05), 0 2px 10px rgba(0, 0, 0, 0.03);
  border-radius: 15px;
  width: 90px;
  transition: all 0.3s;
  margin-right: 5px;
  span {
    ${SpanWithIcon}
  }
`;

export {
  ShareBtn
};
