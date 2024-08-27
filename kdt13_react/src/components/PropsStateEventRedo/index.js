import { Select, Input } from 'antd';
const PropsStateEventRedo = (props) => {
  const {
    fruit,
    bgcolor,
    color,
    setFruit,
    setBgcolor,
    setColor,
    content,
    setContent,
    tangerine,
    blueberry,
    peach,
    fruitData,
    colorData,
  } = props;
  return (
    <>
      <div>
        과일 :{' '}
        <Select
          defaultValue={fruit}
          style={{ width: 100 }}
          name="fruit"
          options={fruitData}
          onChange={(value) => {
            setFruit(value);
          }}
        />
        배경색 :{' '}
        <Select
          defaultValue={bgcolor}
          style={{ width: 100 }}
          name="bgcolor"
          options={colorData}
          onChange={(value) => {
            setBgcolor(value);
          }}
        />
        글자색 :{' '}
        <Select
          defaultValue={color}
          style={{ width: 100 }}
          name="color"
          options={colorData}
          onChange={(value) => {
            setColor(value);
          }}
        />
      </div>
      <div>
        내용 :{' '}
        <Input
          name="content"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </div>

      <div>
        <img
          src={
            fruit == 'tangerine'
              ? tangerine
              : fruit == 'blueberry'
              ? blueberry
              : peach
          }
        />
      </div>
      <div style={{ backgroundColor: bgcolor, color: color }}>{content}</div>
    </>
  );
};
export default PropsStateEventRedo;
