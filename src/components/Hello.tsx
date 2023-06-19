const Hello = () => {
  // クリック時に呼ばれる関数
  const onClick = () => {
    // アラートを出す
    alert("Hello!");
  };

  const teext: string = "Hello, React";
  return <div onClick={onClick}>{teext}</div>;
};
export default Hello;
