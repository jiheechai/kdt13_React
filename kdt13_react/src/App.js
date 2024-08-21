import { useState, useRef, useEffect } from 'react';
import { Select } from 'antd';
import Header from './components/Header';
import Mainpage from './components/Mainpage';
import MyComponent from './components/MyComponent';

import i1 from '../src/image/i1.jpg';
import i2 from '../src/image/i2.jpg';
import i3 from '../src/image/i3.jpg';
import i4 from '../src/image/i4.jpg';
import i5 from '../src/image/i5.jpg';
import q1 from '../src/image/q1.jpg';
import q2 from '../src/image/q2.jpg';
import q3 from '../src/image/q3.jpg';
import q4 from '../src/image/q4.jpg';
import q5 from '../src/image/q5.jpg';
import s1 from '../src/image/s1.jpg';
import s2 from '../src/image/s2.jpg';
import s3 from '../src/image/s3.jpg';
import s4 from '../src/image/s4.jpg';
import s5 from '../src/image/s5.jpg';

const App = () => {
  //------------------------------------------------useState
  // const [number, setNumber] = useState(0);
  // const [visible, setVisible] = useState(true);
  // const changeNumberState = () => {
  //   setNumber(number + 1);
  // };
  // const changeVisibleState = () => {
  //   setVisible(!visible);
  // };
  // return (
  //   <>
  //     <button onClick={changeNumberState}>PLUS</button>
  //     <button onClick={changeVisibleState}>ON/OFF</button>
  //     {visible && <MyComponent number={number} />}
  //   </>
  // );
  // ----------------------------------------------------useEffect
  // const [name, setName] = useState('코딩온');
  // const [email, setEmail] = useState('codingon@naver.com');
  // const options = [
  //   { value: '키딩온', label: '키딩온' },
  //   { value: '캬딩온', label: '캬딩온' },
  // ];
  // const emailOptions = [
  //   { value: 'ex@qwe.com', label: '이메일1' },
  //   { value: 'xe@qqq.com', label: '이메일2' },
  // ];
  // useEffect(() => {
  //   // console.log('렌더링 완료');
  //   console.log('name: ', name, 'email: ', email);
  //   console.log('이름 바뀔때만 실행');
  // }, [name]);
  // return (
  //   <div>
  //     <div>
  //       이름 :{' '}
  //       <Select
  //         style={{ width: 200 }}
  //         options={options}
  //         onChange={(value) => {
  //           setName(value);
  //         }}
  //       />
  //     </div>
  //     <div>
  //       이메일 :{' '}
  //       <Select
  //         style={{ width: 200 }}
  //         options={emailOptions}
  //         onChange={(value) => {
  //           setEmail(value);
  //         }}
  //       />
  //     </div>
  //   </div>
  // );
  //---------------------------------------------------------useRef
  // const personRef = useRef('');
  // const titleRef = useRef('');
  // const [value, setValue] = useState([]);
  // const handleFocus = () => {
  //   if (personRef.current.value == '') {
  //     personRef.current.focus();
  //   } else if (titleRef.current.value == '') {
  //     titleRef.current.focus();
  //   }
  //   if (personRef.current.value && titleRef.current.value) {
  //     setValue((result) => [
  //       ...result,
  //       // setValue([
  //       {
  //         person: personRef.current.value,
  //         title: titleRef.current.value,
  //       },
  //     ]);
  //   }
  // };
  // return (
  //   <>
  //     작성자:
  //     <input ref={personRef} />
  //     제목:
  //     <input ref={titleRef} />
  //     <button onClick={handleFocus}>작성</button>
  //     <div>
  //       {console.log(value)}
  //       {value?.map((x, i) => {
  //         return (
  //           <div key={i}>
  //             {x.person} {x.title}
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </>
  // );
  //-----------------------------------------------------------------useRef
  // const idRef = useRef(1);
  // const plusIdRef = () => {
  //   idRef.current += 1;
  //   console.log(idRef.current);
  // };
  // return (
  //   <div>
  //     <h1>Ref Sample</h1>
  //     <h2>{idRef.current}</h2>
  //     <button onClick={plusIdRef}>PLUS Ref</button>
  //   </div>
  // );
  // -----------------------------------------------------------------useRef
  // //1 .ref 객체 만들기
  // const inputRef = useRef();
  // const handleFocus = () => {
  //   //3. userRef()로 만든 객체의 current값에 focus() DOM
  //   //focus() : 지정된 html요소에 포커스 적용
  //   inputRef.current.focus();
  // };
  // return (
  //   <>
  //     <p>(함수형 컴포턴트) 버튼 클릭시 input에 focus처리</p>
  //     {/* 2. 선택하고 싶은 DOM에 ref prop 설정 */}
  //     <input ref={inputRef} />
  //     <button onClick={handleFocus}>버튼</button>
  //   </>
  // );
  // -----------------------------------------------------------------전날 과제
  // 2024.08.20 화
  // const [select, setSelect] = useState('first');
  // const selectData = [
  //   { value: 'first', label: '첫화면' },
  //   { value: 'second', label: '두번째' },
  //   { value: 'third', label: '세번째' },
  // ];
  // const data1 = [
  //   {
  //     name: '아이템1',
  //     src: i1,
  //     price: 4400,
  //   },
  //   {
  //     name: '아이템2',
  //     src: i2,
  //     price: 3400,
  //     hash: [{ tag: '간안지' }, { tag: '하입' }, { tag: '박수' }],
  //   },
  //   {
  //     name: '아이템3',
  //     src: i3,
  //     price: 44400,
  //   },
  //   {
  //     name: '아이템1',
  //     src: i4,
  //     price: 44200,
  //     hash: [{ tag: '멋짐' }, { tag: '힙' }],
  //   },
  //   {
  //     name: '아이템1',
  //     src: i5,
  //     price: 14400,
  //     hash: [{ tag: '재미' }, { tag: '숲속' }],
  //   },
  // ];
  // const data2 = [
  //   {
  //     name: '첫번째',
  //     src: s1,
  //     price: 4400,
  //   },
  //   {
  //     name: '두번째',
  //     src: s2,
  //     price: 3400,
  //     hash: [{ tag: '간안지' }, { tag: '하입' }, { tag: '박수' }],
  //   },
  //   {
  //     name: '세번째',
  //     src: s3,
  //     price: 44400,
  //   },
  //   {
  //     name: '네번째',
  //     src: s4,
  //     price: 44200,
  //     hash: [{ tag: '멋짐' }, { tag: '힙' }],
  //   },
  //   {
  //     name: '다섯째',
  //     src: s5,
  //     price: 14400,
  //     hash: [{ tag: '재미' }, { tag: '숲속' }],
  //   },
  // ];
  // const data3 = [
  //   {
  //     name: '드랍더',
  //     src: q1,
  //     price: 42400,
  //     hash: [
  //       { tag: '멋짐' },
  //       { tag: '힙' },
  //       { tag: '감성' },
  //       { tag: '인기있는' },
  //       { tag: '웃긴' },
  //     ],
  //   },
  //   {
  //     name: '비트',
  //     src: q2,
  //     price: 3100,
  //   },
  //   {
  //     name: 'TheGood',
  //     src: q3,
  //     price: 6400,
  //   },
  //   {
  //     name: 'Front',
  //     src: q4,
  //     price: 432200,
  //     hash: [{ tag: '멋짐' }, { tag: '힙' }],
  //   },
  //   {
  //     name: 'Back',
  //     src: q5,
  //     price: 14400,
  //     hash: [{ tag: '재미' }, { tag: '숲속' }],
  //   },
  // ];
  // return (
  //   <>
  //     <Header selectData={selectData} select={select} setSelect={setSelect} />
  //     <Mainpage
  //       data={select === 'first' ? data1 : select === 'second' ? data2 : data3}
  //     />
  //   </>
  // );
};

export default App;
