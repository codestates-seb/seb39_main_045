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

export const Title = {
  Main: Title24,
  Sub: Title20,
  Day: PdTop20
};

const Diary = styled(PdTop20)`
  line-height: 24px;
`;

export const Content = {
  Diary
};
