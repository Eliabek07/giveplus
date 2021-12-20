import React, { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({
  children
}: ProvidersProps) => {
  return (
    <>
      {children}
    </>
  );
}

export { Providers }