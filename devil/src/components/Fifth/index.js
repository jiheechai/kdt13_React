import { notification } from 'antd';
import { useState } from 'react';
import { useFormik } from 'formik';
import Formik from './Formik';
import TodoTrash from './TodoTrash';
const Fifth = () => {
  const [data, setData] = useState([]);
  const [trash, setTrash] = useState([]);
  const inputFormik = useFormik({
    initialValues: {
      input: '',
    },
    onSubmit: (values) => {
      if (values.input === '') {
        notification.warning({
          message: '할 일을 입력해 주세요!',
        });
        return;
      } else {
        inputFormik.resetForm();
        const newItem = {
          id: Date.now() + Math.random().toString(36).substr(2, 9),
          text: values.input,
          type: false,
        };
        setData([...data, newItem]);
      }
    },
  });
  return (
    <div style={{ display: 'flex' }}>
      <Formik
        data={data}
        setData={setData}
        inputFormik={inputFormik}
        trash={trash}
        setTrash={setTrash}
      />
      <TodoTrash trash={trash} />
    </div>
  );
};
export default Fifth;
