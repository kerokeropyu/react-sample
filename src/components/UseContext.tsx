import React, { useContext } from "react";

type User = {
  id: number;
  name: string;
};

// ユーザーデータを保持するContextを作成する。
const UserContext = React.createContext<User | null>(null);

const GrandChild = () => {
  // useContextにContextを渡すことでContextから値を取得する
  const user = useContext(UserContext);
  return user !== null ? <p>Hello, {user.name}</p> : null;
};

const Child = () => {
  const now = new Date();
  return (
    <>
      <p>Current: {now.toLocaleDateString()}</p>
      <GrandChild />
    </>
  );
};

// const Parent = () => {
//     const user: User = {
//     }
// }