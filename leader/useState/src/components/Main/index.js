import Item from '../Item';
import './MainStyled.css';

const Main = (props) => {
  const data = props.data;
  const imgUrl = props.imgUrl;
  const pay = props.pay;
  const number = props.number;

  //urlChange 함수 : props.setImgUrl로 url 변경
  const urlChange = (url) => {
    props.setImgUrl(url);
  };

  return (
    <>
      <div className="wrapBox">
        <div className="box">
          {/* 왼쪽 큰 박스. setImgUrl로 변경된 imgUrl 값 저장 */}
          <div className="left">
            <img src={imgUrl} alt="" />
          </div>
          {/* 오른쪽 작은 박스들. map으로 생성 */}
          <div className="right">
            {/* x:data배열의 현재 요소. i:data배열의 현재요소의 인덱스 */}
            {data.map((x, i) => {
              return <Item urlChange={urlChange} item={x} key={i} />;
            })}
          </div>
        </div>

        {/* 가격, 갯수 계산 */}
        <div className="priceBox">
          {/* 더하기. priceChange type === '+' */}
          <div
            onClick={() => {
              props.priceChange('+');
            }}
          >
            +
          </div>
          {/* 총 가격. 
          toLocaleString():JavaScript에서 숫자나 날짜 객체를 사용자가 선호하는 언어 및 국가에 맞게 형식화하는 데 사용되는 메서드 */}
          <div className="pay">{pay.toLocaleString()}</div>
          {/* 빼기. priceChange type === '-' */}
          <div
            onClick={() => {
              props.priceChange('-');
            }}
          >
            -
          </div>
        </div>

        {/* 갯수 출력 */}
        <div className="count">{number}개</div>
      </div>
    </>
  );
};
export default Main;
