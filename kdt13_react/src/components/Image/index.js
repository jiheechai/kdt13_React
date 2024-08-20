import './IndexStyled.css';
const Image = (props) => {
  console.log(props);

  //작은 이미지들 바뀌는 부분
  return (
    <>
      <div className="box">
        {/* 이미지 */}
        <div className="imageBox">
          {/* 좌측 큰이미지 */}
          <div className="big">
            <img src={props.imgsrc} />
          </div>

          {/* 우측 작은이미지 */}
          <div className="small">
            <div
              className="items"
              onClick={() => {
                props.change(props.data[0].url);
              }}
            >
              <img src={props.data[0].url} />
            </div>
            <div
              className="items"
              onClick={() => {
                props.change(props.data[1].url);
              }}
            >
              <img src={props.data[1].url} />
            </div>
            <div
              className="items"
              onClick={() => {
                props.change(props.data[2].url);
              }}
            >
              <img src={props.data[2].url} />
            </div>
          </div>
        </div>

        {/* 가격 */}
        <div className="priceBox">
          <div
            onClick={() => {
              props.priceChange('+');
            }}
          >
            +
          </div>
          <div className="price">{props.price.toLocaleString()}</div>
          <div
            onClick={() => {
              props.priceChange('-');
            }}
          >
            -
          </div>
        </div>
        <div className="numberBox">{props.number}</div>
      </div>
    </>
  );
};

export default Image;
// onClick={props.change(props.data)}
