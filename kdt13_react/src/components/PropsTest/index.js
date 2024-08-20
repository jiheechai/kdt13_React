// const PropsTest = (props) => {
//   return (
//     <div style={{ backgroundColor: props.data.color }}>배경색상입니다.</div>
//   );
// };
const PropsTest = (props) => {
  return (
    <>
      <button onClick={props.Count}>+</button>
      <div>{props.number}</div>
      <br />
      <button onClick={props.Countm}>-</button>
    </>
  );
};

export default PropsTest;
