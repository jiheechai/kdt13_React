import './FormikItemStyled.css';
const Item = (props) => {
  const { item, data, setData, trash, setTrash } = props;
  const hotChange = () => {
    const updatedData = data.map((i) =>
      i.id === item.id ? { ...i, type: !i.type } : i
    );
    setData(updatedData);
  };
  const deleteData = () => {
    const removeData = data.filter((i) => i.id !== item.id);
    const newtrashData = item;

    setData(removeData);
    setTrash([...trash, newtrashData]);
    // console.log(trash);
  };

  return (
    <div className={`itemBox ${item.type ? 'active' : ''}`}>
      <div className="text">{item.text}</div>
      <div className="btnBox">
        <button className="import" onClick={hotChange}>
          중요
        </button>
        <button className="delete" onClick={deleteData}>
          삭제
        </button>
      </div>
    </div>
  );
};
export default Item;

// import { Button } from 'antd';
// import './FormikItemStyled.css';
// const FormikItem = (props) => {
//   const { data, item, setData } = props;

//   const clickImportant = () => {
//     const updateData = data.map((i) => {
//       i.id === item.id ? { ...i, flag: !i.flag } : i;
//     });
//     setData(updateData);
//   };
//   const clickDelete = () => {};

//   // console.log(data);

//   // console.log(i.Formikdata.id);
//   // console.log(item.id);
//   return (
//     <div className={item.flag ? 'itembox flagTrue' : 'itembox'}>
//       <div className="contentbox">{item.Formikdata.content}</div>
//       <div className="buttonbox">
//         <Button className="important" onClick={clickImportant}>
//           중요
//         </Button>
//         <Button className="delete" onClick={clickDelete}>
//           삭제
//         </Button>
//       </div>
//     </div>
//   );
// };
// export default FormikItem;
