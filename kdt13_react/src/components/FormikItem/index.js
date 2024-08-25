import { Button } from 'antd';
import { useRef } from 'react';
import './FormikItemStyled.css';
const FormikItem = (props) => {
  //   const Formikdata = props.Formikdata;
  //   const data = props.data;
  const x = props.x;
  const setData = props.setData;
  const data = props.data;
  const contentRef = useRef('');
  const clickImportant = () => {
    if (contentRef.current.style.backgroundColor != 'pink') {
      contentRef.current.style.setProperty('background-color', 'pink');
      contentRef.current.style.setProperty('color', 'red');
      //   console.log(contentRef.current.style.backgroundColor);
    } else {
      contentRef.current.style.setProperty('background-color', 'lightblue');
      contentRef.current.style.setProperty('color', 'black');
      //   console.log(contentRef.current.style.backgroundColor);
    }
  };
  const clickDelete = () => {
    const content = contentRef.current.querySelector('.contentbox').textContent;
    // console.log(content);
    // console.log(x);

    // console.log(data);
    const newData = data.filter((item) => item.Formikdata.content != content);
    setData(newData);
    console.log(newData);
  };
  return (
    <div className="itembox" ref={contentRef}>
      <div className="contentbox">{x.Formikdata.content}</div>
      <div className="buttonbox">
        <Button className="important" onClick={clickImportant}>
          중요
        </Button>
        <Button className="delete" onClick={clickDelete}>
          삭제
        </Button>
      </div>
    </div>
  );
};
export default FormikItem;
