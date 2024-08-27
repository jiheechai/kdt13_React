import { Button, Flex, Input, notification } from 'antd';
import { useState } from 'react';
import { useFormik } from 'formik';
import Formik from './components/Formik';
import TodoTrash from './components/TodoTrash';
const App = () => {
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
export default App;

//----------------------------to do list 내 코드
// import { useState } from 'react';
// import { Input, Button, Select } from 'antd';
// import { useFormik } from 'formik';
// import FormikItem from './components/FormikItem';
// const App = () => {
//   const [data, setData] = useState([]);
//   const [deleteData, setDeleteData] = useState([]);
//   // const contentRef = useRef('');

//   const dataFormik = useFormik({
//     initialValues: {
//       content: '',
//     },

//     onSubmit: (values) => {
//       const Formikdata = {
//         id: Date.now() + Math.random().toString(36).substr(2, 9),
//         content: values.content,
//         flag: false,
//       };
//       if (Formikdata.content != '') {
//         setData((result) => [...result, { Formikdata }]);
//       }
//     },
//   });

//   return (
//     <div className="container">
//       <div className="title">
//         할 일<div className="dot">.</div>
//       </div>
//       <div>
//         <form onSubmit={dataFormik.handleSubmit} className="formbox">
//           <Input
//             name="content"
//             onChange={dataFormik.handleChange}
//             placeholder="할 일을 입력하세요!"
//           />
//           <div className="button">
//             <Button htmlType="submit">등록</Button>
//           </div>
//         </form>
//       </div>
//       <div>
//         {data?.map((x, i) => {
//           // FormikItem : 글 하나하나의 컴포넌트
//           return <FormikItem data={data} setData={setData} item={x} key={i} />;
//         })}
//       </div>
//     </div>
//   );
// };
// export default App;
