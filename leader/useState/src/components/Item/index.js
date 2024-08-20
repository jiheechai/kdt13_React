import './ItemStyled.css';

const Item = (props) => {
  //작은 박스들(data)가 들어가는 div
  return (
    <div
      className="itemBox"
      //onClick 이벤트로 url변경
      //onClick={props.urlChange(props.item.url)}로 하면 클릭하기 전에 함수 호출이 되기 때문에 화살표함수를 사용해서
      //클릭할때만 동작하게 함.
      onClick={() => {
        props.urlChange(props.item.url);
      }}
    >
      {/* 이미지 넣기 */}
      <img src={props.item.url} alt="" />
    </div>
  );
};
export default Item;
