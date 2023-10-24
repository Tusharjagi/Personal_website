import React from "react";
import Index from "@/Components/Index";

const Page = (): JSX.Element => {
  const name = "tushar";
  return <Index {...{ name }} />;
};

export default Page;
