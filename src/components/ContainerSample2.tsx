import React from "react";

type ContainerProps = {
  title: string;
  children: React.ReactNode;
};

const Container = (props: ContainerProps): JSX.Element => {
  const { title, children } = props;
  return (
    <div style={{ background: "red" }}>
      <span>{title}</span>
      <div>{children}</div>
    </div>
  );
};

const Parent2 = () => {
  return (
    <Container title="">
      <p>この部分は背景色で囲まれています</p>
    </Container>
  );
};

export default Parent2;