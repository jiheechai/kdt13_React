import { useState } from 'react';

// import blueberry from '../src/image/blueberry.jpg';
// import peach from '../src/image/peach.jpg';
// import tangerine from '../src/image/tangerine.jpg';
// import watermellon from '../src/image/w1.jpeg';
import w2 from '../src/image/w2.jpeg';
import w3 from '../src/image/w3.jpeg';
import w4 from '../src/image/w4.jpeg';
import Main from './components/Main';
import Image from './components/Image';

// import './App.css';

function App() {
  //사진
  const [imgsrc, setImgsrc] = useState(w2);
  const change = (url) => {
    setImgsrc(url);
  };

  //가격
  const [price, setPrice] = useState(15000);

  //수량
  const [number, setNumber] = useState(1);

  //가격, 수량 변경
  const priceChange = (type) => {
    if (type === '+') {
      setPrice(price + 15000);
      setNumber(number + 1);
    } else {
      if (price <= 15000) {
        setPrice(15000);
        setNumber(1);
      } else {
        setPrice(price - 15000);
        setNumber(number - 1);
      }
    }
  };
  //이미지
  const data = [{ url: w2 }, { url: w3 }, { url: w4 }];

  return (
    <div className="App">
      {/* 2024.08.19 월 */}
      <div>
        <h1>2024.08.19 월 실습</h1>
      </div>
      {/* <Main
        imgsrc={imgsrc}
        setImgsrc={setImgsrc}
        price={price}
        number={number}
        priceChange={priceChange}
        data={data}
      /> */}

      <Image
        data={data}
        change={change}
        imgsrc={imgsrc}
        priceChange={priceChange}
        number={number}
        price={price}
      />
    </div>
  );
}

export default App;
