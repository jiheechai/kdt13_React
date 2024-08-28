import { Button, Input } from 'antd';
import './FormikStyled.css';
import FormikItem from '../FormikItem';
const Formik = (props) => {
  const { data, inputFormik, setData, trash, setTrash } = props;
  // console.log(data);

  return (
    <div className="listBox">
      <div className="title">
        <div>할 일</div>
        <div className="done">.</div>
      </div>
      <form onSubmit={inputFormik.handleSubmit}>
        <div className="todoBox">
          <Input
            placeholder="할 일을 입력하세요!"
            name="input"
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
          return (
            <FormikItem
              key={i + 'item'}
              item={x}
              data={data}
              setData={setData}
              trash={trash}
              setTrash={setTrash}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Formik;
//---------------------------------todo list 내 코드
// import { Input, Button } from 'antd';
// import './FormikStyled.css';
// import FormikItem from '../FormikItem';
// const Formik = (props) => {
//   const { data, dataFormik } = props;
//   return (
//     <>
//       <div className="container">
//         <div className="title">
//           할 일<div className="dot">.</div>
//         </div>
//         <div>
//           <form onSubmit={dataFormik.handleSubmit} className="formbox">
//             <Input
//               name="content"
//               onChange={dataFormik.handleChange}
//               placeholder="할 일을 입력하세요!"
//             />
//             <div className="button">
//               <Button htmlType="submit">등록</Button>
//             </div>
//           </form>
//         </div>
//         <div>
//           {data?.map((x, i) => {
//             // FormikItem : 글 하나하나의 컴포넌트
//             return <FormikItem data={data} item={x} key={i} />;
//           })}
//         </div>
//       </div>
//     </>
//   );
//------------------------------------------------------formik 로그인, 비밀번호 Naver같이 만들기
//   const data = props.data;
//   const dataFormik = props.dataFormik;
//   return (
//     <>
//       <div className="displayBox">
//         <form className="formBox" onSubmit={dataFormik.handleSubmit}>
//           <div className="title">NAVER</div>
//           <div className="borderbox">
//             <div className="inputbox">
//               <Input
//                 name="id"
//                 onChange={dataFormik.handleChange}
//                 placeholder="아이디 또는 전화번호"
//               />
//             </div>
//             <div>
//               <Input
//                 name="pass"
//                 type="password"
//                 onChange={dataFormik.handleChange}
//                 placeholder="비밀번호"
//               />
//             </div>
//             <div className="button">
//               <Button htmlType="submit">로그인</Button>
//             </div>
//           </div>
//         </form>
//         {data ? (
//           <>
//             <div>아이디 : {data.id}</div>
//             <div>비밀번호 : {data.pass}</div>
//           </>
//         ) : (
//           <></>
//         )}
//       </div>
//     </>
//   );
//---------------------------------------------------formik
//   const dataFormik = props.dataFormik;
//   const data = props.data;
//   return (
//     <>
//       <form onSubmit={dataFormik.handleSubmit}>
//         <div>
//           이름:
//           <Input
//             name="name"
//             onChange={dataFormik.handleChange}
//             value={dataFormik.values.name}
//           />
//         </div>
//         <div>
//           닉네임:
//           <Input
//             name="nickName"
//             onChange={dataFormik.handleChange}
//             value={dataFormik.values.nickName}
//           />
//         </div>
//         <div>
//           이메일:
//           <Input
//             name="email"
//             onChange={dataFormik.handleChange}
//             value={dataFormik.values.email}
//           />
//         </div>
//         <div>
//           비밀번호:
//           <Input
//             name="pass"
//             onChange={dataFormik.handleChange}
//             value={dataFormik.values.pass}
//           />
//         </div>
//         <div>
//           주소:
//           <Input
//             name="address"
//             onChange={dataFormik.handleChange}
//             value={dataFormik.values.address}
//           />
//         </div>
//         <div>
//           상세주소:
//           <Input
//             name="detailAddress"
//             onChange={dataFormik.handleChange}
//             value={dataFormik.values.detailAddress}
//           />
//         </div>
//         <div>
//           휴대폰번호:
//           <Input
//             name="phone"
//             onChange={dataFormik.handleChange}
//             value={dataFormik.values.phone}
//           />
//         </div>
//         <Button htmlType="submit">실행!</Button>
//       </form>
//     </>
//   );
