import './ItemStyled.css';
const Item = (props) => {
  return (
    <div
      className="itemBox"
      onClick={() => {
        props.urlChange(props.item.url);
      }}
    >
      <img src={props.item.url} alt="" />
    </div>
  );
};

export default Item;
