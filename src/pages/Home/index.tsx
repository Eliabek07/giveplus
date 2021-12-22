import React from 'react';

import * as S from './styles';

import { Layout } from '../../app/components/Layout';

function Home() {
  return (
    <Layout>
      <S.Container>
        <S.Text>Hello World</S.Text>
      </S.Container>
    </Layout>
  );
}

export default Home;
