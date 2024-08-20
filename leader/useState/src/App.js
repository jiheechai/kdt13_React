import { useState } from 'react';
import i1 from '../src/image/i1.jpg';
import i2 from '../src/image/i2.jpg';
import i3 from '../src/image/i3.jpg';
import i4 from '../src/image/i4.jpg';
import i5 from '../src/image/i5.jpg';
import Main from './components/Main';

function App() {
  //금액. 초기값은 35000원으로 저장.
  const [pay, setPay] = useState(35000);

  //이미지. 초기값은 i1으로 저장.
  const [imgUrl, setImgUrl] = useState(i1);

  //갯수. 초기값은 1로 저장.
  const [number, setNumber] = useState(1);

  //사진을 test 배열에 저장.
  const test = [
    {
      url: i1,
    },
    {
      url: i2,
    },
    {
      url: i3,
    },
    {
      url: i4,
    },
    {
      url: i5,
    },
  ];

  //금액, 갯수 변경
  const priceChange = (type) => {
    if (type === '+') {
      //type이 +면, 가격에 35000원을 더하고, 갯수에 1을 더한다.
      setPay(pay + 35000);
      setNumber(number + 1);
    } else {
      //type이 -일때, 35000원 이하면(1개 이하면) 금액은 35000, 갯수는 1로 설정한다.
      //아니면 35000을 빼고, 갯수에 1을 뺀다.
      if (pay <= 35000) {
        setPay(35000);
        setNumber(1);
      } else {
        setPay(pay - 35000);
        setNumber(number - 1);
      }
    }
  };

  //사진데이터와 useState 사용할 것들을 Main 컴포넌트에 props로 보낸다.
  return (
    <Main
      number={number}
      setNumber={setNumber}
      data={test}
      imgUrl={imgUrl}
      setImgUrl={setImgUrl}
      priceChange={priceChange}
      pay={pay}
    />
  );
}

export default App;
