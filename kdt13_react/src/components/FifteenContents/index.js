const FifteenContents = (props) => {
  const { data } = props;

  return (
    <>
      <img src={data.src} alt="이미지" />
      <div>{data.name}</div>
      <div>{data.price}</div>
      {/* {data.hash ? ( */}
      {data.hash.map((x, i) => {
        return <div key={i}>#{x.tag}</div>;
      })}
      {/* ) : (
        <></>
      )} */}
    </>
  );
};
export default FifteenContents;
