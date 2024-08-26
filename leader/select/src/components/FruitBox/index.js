import { Select, Input } from 'antd';
import blueberry from '../../image/blueberry.jpg';
import peach from '../../image/peach.jpg';
import tangerine from '../../image/tangerine.jpg';

const FruitBox = (props) => {
  const ff = props.fruit;
  return (
    <div>
      <div>
        과일 :{' '}
        <Select
          defaultValue={ff}
          style={{ width: 200 }}
          options={props.fruitData}
          onChange={(value) => {
            props.setFruit(value);
          }}
        />
      </div>
      <div>
        배경색 :{' '}
        <Select
          defaultValue={props.color}
          style={{ width: 200 }}
          options={props.colorData}
          onChange={(value) => {
            props.setBack(value);
          }}
        />
      </div>
      <div>
        글자색 :{' '}
        <Select
          defaultValue={props.color}
          style={{ width: 200 }}
          options={props.colorData}
          onChange={(value) => {
            props.setColor(value);
          }}
        />
      </div>

      <div>
        내용:
        <Input
          onChange={(e) => {
            console.log(e.target.value, '인풋');
            props.setText(e.target.value);
          }}
        />
      </div>

      <div>
        <img
          src={
            ff == 'blueberry' ? blueberry : ff == 'peach' ? peach : tangerine
          }
        ></img>
      </div>
      <div style={{ color: props.color, backgroundColor: props.back }}>
        {props.text}
      </div>
    </div>
  );
};

export default FruitBox;
