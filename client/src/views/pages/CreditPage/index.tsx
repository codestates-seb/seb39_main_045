import React from 'react';
import { Layout } from 'views/components/UI/Layout.style';
import { Title } from 'views/components/UI/molecules/text.style';
import MyPageNav from 'views/components/common/MyPageNav';
import Attributions from './Attributions';
import Members from './Members';
import useRedirectLogoutUser from 'utils/useRedirectLogoutUser';

const CreditPage = () => {
  void useRedirectLogoutUser();
  return (
    <Layout.PageContainer>
      <MyPageNav />
      <Title.Main>선인장 키우기를 만든 사람들</Title.Main>
      <Members />
      <Attributions />
    </Layout.PageContainer>
  );
};

export default CreditPage;
