import { Input, Button } from 'antd';
const First = (props) => {
  const { result, totalResult, setNum1, setNum2 } = props;
  return (
    <>
      <Input
        type="number"
        name="num1"
        onChange={(e) => {
          setNum1(Number(e.target.value));
          // console.log(e);
        }}
      />
      <Input
        type="number"
        name="num2"
        onChange={(e) => {
          setNum2(Number(e.target.value));
        }}
      />
      <Button onClick={() => totalResult('+')}>+</Button>
      <Button onClick={() => totalResult('-')}>-</Button>
      <Button onClick={() => totalResult('x')}>x</Button>
      <Button onClick={() => totalResult('/')}>/</Button>
      <div>결과 : {result}</div>
    </>
  );
};
export default First;
