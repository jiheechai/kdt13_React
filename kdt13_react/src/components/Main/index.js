import Item from '../Item';
import './MainStyled.css';

const Main = (props) => {
  const imgsrc = props.imgsrc;
  const setImgsrc = props.setImgsrc;
  const price = props.price;
  const number = props.number;
  const priceChange = props.priceChange;
  const data = props.data;

  const urlChange = (url) => {
    setImgsrc(url);
  };

  return (
    <>
      <div className="wrapBox">
        <div className="imageBox">
          <div className="left">
            <img src={imgsrc} alt=""></img>
          </div>
          <div className="right">
            {data.map((x, i) => {
              return <Item urlChange={urlChange} item={x} key={i} />;
            })}
          </div>
        </div>

        <div className="priceBox">
          <div
            onClick={() => {
              priceChange('+');
            }}
          >
            +
          </div>
          <div className="pay">{price.toLocaleString()}</div>
          <div
            onClick={() => {
              priceChange('-');
            }}
          >
            -
          </div>
        </div>
        <div className="count">{number}개</div>
      </div>
    </>
  );
};

export default Main;
