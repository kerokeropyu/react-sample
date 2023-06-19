const Text = (props: { content: string }) => {
  // porpsからcontentを受け取る
  const { content } = props;
  return <p className="text">{content}</p>;
};

const Message = (props: {}) => {
  const content1 = "this is parent content";
  const content2 = "message use text content";

  return (
    <div>
      <Text content={content1}></Text>
      <Text content={content2}></Text>
    </div>
  );
};

export default Message;
