import React from "react";

interface Props {
  name: string;
}

const Index = ({ name }: Props): JSX.Element => {
  return <div>Hello {name}</div>;
};

export default Index;
