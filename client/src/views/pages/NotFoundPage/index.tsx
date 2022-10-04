import React from 'react';
import image from 'assets/img/caclogo.jpg';
import { Layout } from 'views/components/UI/Layout.style';
import { Content } from 'views/components/UI/molecules/text.style';

const NotFoundPage = () => {
  return (
    <Layout.FlexColumn>
      <img src={image} alt='team-logo' />
    </Layout.FlexColumn>
  );
};

export default NotFoundPage;
