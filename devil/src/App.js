import { useState } from 'react';
import First from './components/First';
import Second from './components/Second';
import { data1, data2, data3 } from './utill/data';
import Third from './components/Third';
import Fourth from './components/Fourth';
import Fifth from './components/Fifth';

const App = () => {
  // 1번과제
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState('');
  const totalResult = (type) => {
    if (type == '+') {
      setResult(num1 + num2);
    } else if (type == '-') {
      setResult(num1 - num2);
    } else if (type == 'x') {
      setResult(num1 * num2);
    } else {
      setResult((num1 / num2).toFixed(2));
    }
  };

  // 2번과제
  const [fruit, setFruit] = useState('blueberry');
  const [bgcolor, setBgcolor] = useState('white');
  const [color, setColor] = useState('black');
  const [input, setInput] = useState('');
  const [save, setSave] = useState([]);
  const fruitData = [
    { value: 'blueberry', label: '블루베리' },
    { value: 'peach', label: '복숭아' },
    { value: 'tangerine', label: '귤' },
  ];
  const colorData = [
    { value: 'black', label: '검정색' },
    { value: 'white', label: '흰색' },
    { value: 'red', label: '빨강색' },
    { value: 'orange', label: '주황색' },
    { value: 'yellow', label: '노랑색' },
    { value: 'green', label: '초록색' },
  ];

  // 3번과제
  const allData = [...data1, ...data2, ...data3];
  const [data, setData] = useState(3);

  // 4번과제
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [dataAll, setDataAll] = useState([]);
  // 수정 모드를 관리하기 위한 상태
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editDate, setEditDate] = useState('');

  return (
    <>
      <div>--------과제 1.-----------</div>
      <First
        setNum1={setNum1}
        setNum2={setNum2}
        result={result}
        totalResult={totalResult}
      />

      <div>--------과제 2.-----------</div>
      <Second
        fruitData={fruitData}
        colorData={colorData}
        fruit={fruit}
        setFruit={setFruit}
        bgcolor={bgcolor}
        setBgcolor={setBgcolor}
        color={color}
        setColor={setColor}
        input={input}
        setInput={setInput}
        save={save}
        setSave={setSave}
      />

      <div>--------과제 3.-----------</div>
      <Third data={data} setData={setData} allData={allData} />

      <div>--------과제 4.-----------</div>
      <Fourth
        editName={editName}
        editId={editId}
        editTitle={editTitle}
        editDate={editDate}
        setEditId={setEditId}
        setEditName={setEditName}
        setEditTitle={setEditTitle}
        setEditDate={setEditDate}
        setName={setName}
        setTitle={setTitle}
        setDate={setDate}
        setDataAll={setDataAll}
        name={name}
        title={title}
        date={date}
        dataAll={dataAll}
      />

      <div>--------과제 5.-----------</div>
      <Fifth />
    </>
  );
};
export default App;
