import React from 'react';
import image from 'assets/img/caclogo.jpg';
import { Layout } from 'views/components/UI/Layout.style';

const NotFoundPage = () => {
  return (
    <Layout.FlexColumn>
      <img src={image} alt='team-logo' />
    </Layout.FlexColumn>
  );
};

export default NotFoundPage;
