import styled from 'styled-components';

const Title24 = styled.div`
  font-size: 24px;
  margin-bottom: 24px;
`;

const Title20 = styled.div`
  font-size: 20px;
`;

const PdTop20 = styled(Title20)`
  padding-top: 20px;
`;

const Check = styled.div`
  margin-bottom: 20px;
  text-align: left;
  color: var( --intro-form-darkgreen);
`;

const Diary = styled(PdTop20)`
  line-height: 24px;
`;

const Error = styled.div`
  text-align: center;
  color: red;
  margin: 10px;
`;

const Status = styled.div`
  text-align: center;
  color: skyblue;
  margin: 10px;
`;

export const Title = {
  Main: Title24,
  Sub: Title20,
  Day: PdTop20
};

export const Content = {
  Diary,
  Check,
  Error,
  Status
};
