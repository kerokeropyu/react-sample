import React from "react";

// titleを渡すためのcontext
const TitleContext = React.createContext('');

// Titleコンポーネントの中でContextを参照する。
const Title = () => {
  return (
    <TitleContext.Consumer>
      {(title) => {
        return <h1>{title}</h1>;
      }}
    </TitleContext.Consumer>
  );
};

const Header = () => {
  // HeaderからTileには何もデータを渡さない。
  return (
    <div>
      <Title />
    </div>
  );
};

const Page = () => {
  const title = "React Book";
  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  );
};

export default Page;
