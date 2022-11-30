import React from "react";
import { store } from "shared/redux/store";

type Props = {
  children: any;
};

function AppBaseLayout({ children }: Props) {
  return <>{children}</>;
}

export default AppBaseLayout;
