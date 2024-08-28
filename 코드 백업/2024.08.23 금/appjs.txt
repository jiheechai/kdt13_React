import { useState, useRef } from 'react';
import { Input, Button } from 'antd';

import { data1 } from './utill/data';
import { data2 } from './utill/data';
import { data3 } from './utill/data';
import { useFormik } from 'formik';
import Search1 from './components/Search1';
const App = () => {
  // const [select, setSelect] = useState('first');
  // const selectData = [
  //   { value: 'first', label: '첫화면' },
  //   { value: 'second', label: '두번째' },
  //   { value: 'third', label: '세번째' },
  // ];
  const [input, setInput] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [searchIncludeData, setSearchIncludeData] = useState([]);

  const allData = [...data1, ...data2, ...data3];

  const dataFormik = useFormik({
    initialValues: { input: '' },
    onSubmit: (values) => {
      setInput(values.input);
      // console.log(newItem);
    },
  });

  return (
    <>
      <form onSubmit={dataFormik.handleSubmit}>
        <div className="containerBox">
          <div className="inputBox" style={{ display: 'flex' }}>
            <Input
              placeholder="검색어를 입력하세요."
              name="input"
              value={dataFormik.values.input}
              onChange={dataFormik.handleChange}
            />
            <Button htmlType="submit">검색</Button>
          </div>

          <Search1
            searchData={searchData}
            setSearchData={setSearchData}
            searchIncludeData={searchIncludeData}
            setSearchIncludeData={setSearchIncludeData}
            input={input}
            allData={allData}
            data1={data1}
            data2={data2}
            data3={data3}
          />
          {/* <Search1 setResult1={setResult1} input={input} data={data2} />
          <Search1 setResult1={setResult1} input={input} data={data3} /> */}
        </div>
      </form>
    </>
  );
};
export default App;
