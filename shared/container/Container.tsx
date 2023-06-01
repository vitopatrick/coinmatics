import React, { ReactElement, ReactNode } from "react";

const Container = ({ children }: ReactElement | ReactNode | any) => {
  return <div className="md:w-[70%] w-[90%] mx-auto p-4">{children}</div>;
};

export default Container;
