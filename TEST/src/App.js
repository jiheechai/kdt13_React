// joon leader code. to-do list
import { Button, Input, notification } from 'antd';
import { useState } from 'react';
import { useFormik } from 'formik';
import './App.css';
import Item from './components/Item';
const App = () => {
  const [data, setData] = useState([]);
  const inputFormik = useFormik({
    initialValues: {
      input: '',
    },
    onSubmit: (values) => {
      if (values.input === '') {
        //input값에 아무것도 없을때는 warning띄워준다.
        notification.warning({
          message: '할 일을 입력해 주세요!',
        });
        return;
      } else {
        //등록되면 input값 비워준다.
        inputFormik.resetForm();
        //data에 id, text, type저장. type은 중요 버튼 클릭 기억하기 위함.
        const newItem = {
          id: Date.now() + Math.random().toString(36).substr(2, 9),
          text: values.input,
          type: false,
        };
        //setData로 data배열에 기존 data배열과 newItem을 넣는다.
        setData([...data, newItem]);
      }
    },
  });
  return (
    <div className="listBox">
      <div className="title">
        <div>할 일</div>
        <div className="done">.</div>
      </div>
      {/* htmlType="submit"인 버튼 누르면 inputFormit의 onSubmit동작 */}
      <form onSubmit={inputFormik.handleSubmit}>
        <div className="todoBox">
          <Input
            placeholder="할 일을 입력하세요!"
            // inputFormik의 initialValues의 input
            name="input"
            // value 왜 지정?
            value={inputFormik.values.input}
            onChange={inputFormik.handleChange}
          />
          <Button htmlType="submit" type="primary">
            등록
          </Button>
        </div>
      </form>
      <div className="list">
        {data?.map((x, i) => {
          // data가 있으면 map 실행.
          return (
            <Item key={i + 'item'} item={x} data={data} setData={setData} />
          );
        })}
      </div>
    </div>
  );
};
export default App;
