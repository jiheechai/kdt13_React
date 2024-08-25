import { ClickItemComponentStyled } from './ClickItemStyled';
const ClickItem = (props) => {
  const { x, i, clickoneItem } = props;
  return (
    <ClickItemComponentStyled>
      <div className="search1Container">
        <div onClick={() => clickoneItem(x)} className="images">
          <img src={x.src} />
          <div className="namebox">{x.name}</div>
          <div className="pricebox">{x.price}</div>
          <div className="hashbox">
            {x.hash ? (
              <div className="hashtags">
                {x.hash.map((a, b) => {
                  return <div key={b}>#{a.tag}</div>;
                })}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </ClickItemComponentStyled>
  );
};
export default ClickItem;
