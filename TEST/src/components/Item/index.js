// joon leader code. to-do list : items
import './ItemStyled.css';
const Item = (props) => {
  const { item, data, setData } = props;
  //중요버튼 클릭
  const hotChange = () => {
    const updatedData = data.map((i) =>
      // i:data배열전체, item:현재인덱스의 data
      //data배열을 map돌렸을때, id가 현재 중요표시한 item의 id와 같으면,
      //...i는 왜하는거??? , type을 반대로 바꿔준다.
      //i.id와 item.id가 다르면 i배열은 변화 없이 그대로 둔다.
      i.id === item.id ? { ...i, type: !i.type } : i
    );
    console.log(item.type);

    //setData를 사용해서 data배열을 updatedData배열로 바꾼다.
    setData(updatedData);
  };
  //삭제버튼 클릭
  const deleteData = () => {
    //data.id와 현재 인덱스의 data.id(item.id)가 다르면 removeData에 넣는다.
    //즉 현재 클릭한 item.id는 removeData에 넣지 않는다.
    const removeData = data.filter((i) => i.id !== item.id);
    setData(removeData);
  };
  return (
    //itemBox 클래스. item.type이 true면 'active', 아니면 '' css를 적용한다.
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
