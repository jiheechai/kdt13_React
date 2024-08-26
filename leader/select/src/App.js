import { useState } from 'react';
import FruitBox from './components/FruitBox';
// import blueberry from '../src/image/blueberry.jpg';
// import peach from '../src/image/peach.jpg';
// import tangerine from '../src/image/tangerine.jpg';

function App() {
  const [fruit, setFruit] = useState('blueberry');
  const [back, setBack] = useState('black');
  const [text, setText] = useState('');
  const [color, setColor] = useState('black');
  // console.log(text);
  const fruitData = [
    { value: 'blueberry', label: '블루베리' },
    { value: 'peach', label: '복숭아' },
    { value: 'tangerine', label: '귤' },
  ];

  //색상 데이터
  const colorData = [
    { value: 'black', label: '검정' },
    { value: 'red', label: '빨강' },
    { value: 'orange', label: '주황' },
    { value: 'yellow', label: '노랑' },
    { value: 'green', label: '초록' },
  ];

  return (
    <FruitBox
      fruit={fruit}
      back={back}
      colorData={colorData}
      text={text}
      fruitData={fruitData}
      color={color}
      setFruit={setFruit}
      setBack={setBack}
      setText={setText}
      setColor={setColor}
    />
  );
}
export default App;
