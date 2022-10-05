import styled from 'styled-components';
import { Statics } from 'views/components/UI/atoms/static.style';
import { Layout } from 'views/components/UI/Layout.style';

const Container = styled(Layout.FlexColumn)`
  * {
    ${Statics.Trans};
  }
  ${Statics.Green}
  ${Statics.Border2}
  padding: 12px 6px;
  justify-content: center;
`;

const Position = styled(Layout.FlexRow)`
  ${Statics.MrgTop};
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 36px;
`;

const Profile = styled(Layout.FlexColumn)`
  align-items: center;
  margin: 18px;
  margin-top: 24px;
  &:hover {
    > div {
      font-size: 18px;
    }
  }
`;

const Description = styled.div`
  ${Statics.MrgTop};
  max-width: 160px;
  line-height: 24px;
  img {
    margin-left: 3px;
    vertical-align: sub;
    height: 20px;
  }
`;

const Mentos = styled(Layout.AlignCenter)`
  margin: 18px 0;
  line-height: 20px;
`;

export const CopyrightWrapper = styled(Layout.FlexColumn)`
  ${Statics.MrgTop};
  a, span {
    align-self: center;
    color: gray;
    padding: 3px 0;
    font-size: 12px;
    width: fit-content;
  }
`;

export const Credit = { Container, Position, Profile, Description, Mentos };
