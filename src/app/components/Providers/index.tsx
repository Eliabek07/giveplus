import React, { ReactNode } from "react";

import { StylesProvider } from "./StylesProvider"

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({
  children
}: ProvidersProps) => {
  return (
    <StylesProvider>
      {children}
    </StylesProvider>
  );
}

export { Providers }