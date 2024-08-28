import blueberry from '../../image/blueberry.jpg';
import peach from '../../image/peach.jpg';
import tangerine from '../../image/tangerine.jpg';
import { Select, Input, Button } from 'antd';

const Second = (props) => {
  const {
    fruit,
    bgcolor,
    color,
    fruitData,
    colorData,
    setFruit,
    setBgcolor,
    setColor,
    input,
    setInput,
    save,
    setSave,
  } = props;

  const clickSave = () => {
    const id = Date.now() + Math.random().toString(36).substr(2, 9);
    const saveData = { id, fruit, bgcolor, color, input };
    setSave([...save, saveData]);
  };

  const clickDelete = (item) => {
    const newData = save.filter((values) => item.id !== values.id);
    setSave(newData);
  };

  return (
    <>
      <div>
        과일 :{' '}
        <Select
          style={{ width: 200 }}
          defaultValue={fruit}
          options={fruitData}
          onChange={(value) => {
            // console.log(value);
            setFruit(value);
          }}
        />
        배경색 :{' '}
        <Select
          style={{ width: 200 }}
          defaultValue={bgcolor}
          options={colorData}
          onChange={(value) => {
            setBgcolor(value);
          }}
        />
        글자색 :{' '}
        <Select
          style={{ width: 200 }}
          defaultValue={color}
          options={colorData}
          onChange={(value) => {
            setColor(value);
          }}
        />
      </div>
      <div>
        내용 :
        <Input
          onChange={(e) => {
            // console.log(value);
            setInput(e.target.value);
          }}
        />
      </div>
      <img
        src={
          fruit == 'blueberry'
            ? blueberry
            : fruit == 'peach'
            ? peach
            : tangerine
        }
      />
      <div style={{ color: color, backgroundColor: bgcolor }}>{input}</div>
      <Button onClick={clickSave}>선택한 데이터 모두 저장하기</Button>
      <div>
        {save?.map((x, i) => {
          return (
            <div key={i}>
              <div>
                과일 :{' '}
                {x.fruit == 'blueberry'
                  ? '블루베리'
                  : x.fruit == 'peach'
                  ? '복숭아'
                  : '귤'}
              </div>
              <img
                src={
                  x.fruit == 'blueberry'
                    ? blueberry
                    : x.fruit == 'peach'
                    ? peach
                    : tangerine
                }
              />
              <div style={{ color: x.color, backgroundColor: x.bgcolor }}>
                {x.input}
              </div>
              <Button onClick={() => clickDelete(x)}>삭제</Button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Second;
