import React from 'react';
import { Feather as IconFeather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

import { Layout } from '../../components/Layout';
import { Header } from '../../components/Header';
import { IconButton } from '../../components/IconButton';
import { ActiveLighthouseIcon } from '../../components/SVGs/ActiveLighthouseIcon';

function Home(props) {
  return (
    <Layout>
      <S.Container>
        <Header
          left={
            <IconButton onPress={() => props.navigation.openDrawer()}>
              <IconFeather name="menu" size={26} color="#3D71AA" />
            </IconButton>
          }
          title="Home"
          right={<ActiveLighthouseIcon width={26} height={26} />}
        />
      </S.Container>
    </Layout>
  );
}

export default Home;
