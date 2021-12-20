import React, { ReactNode } from "react";
import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import * as S from './styles';

interface LayoutProps {
  children: ReactNode;
  style?: StatusBarStyle;
  backgroundColor?: string;
}

const Layout = ({
  children,
  style,
  backgroundColor
}: LayoutProps) => {
  return (
    <>
      <StatusBar 
        style={style} 
        backgroundColor={backgroundColor} 
      />
      <S.Container>
        {children}
      </S.Container>
    </>
  );
}

export { Layout }