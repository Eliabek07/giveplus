import React from 'react';

import * as S from './styles';

import { Layout } from '../../app/components/Layout';
import { Button } from '../../components/Button';

function Home() {
  return (
    <Layout>
      <S.Container>
        {/* <S.Text>Hello World</S.Text> */}
        <Button>Clicar</Button>
      </S.Container>
    </Layout>
  );
}

export default Home;
