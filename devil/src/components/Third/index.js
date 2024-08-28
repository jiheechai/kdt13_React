import { Button } from 'antd';

const Third = (props) => {
  const { data, setData, allData } = props;
  const clickMoreData = () => {
    setData(data + 3);
  };
  const showData = allData.slice(0, data);
  // console.log(data);

  //   console.log(defaultData);
  return (
    <>
      {showData.map((x, i) => {
        return (
          <div className="itemBox" key={i}>
            <img src={x.src} />
            <div>{x.name}</div>
            <div>{x.price}</div>
            <div>
              {x.hash ? (
                x.hash.map((a, b) => {
                  return (
                    <div key={b}>
                      <div>#{a.tag}</div>
                    </div>
                  );
                })
              ) : (
                <></>
              )}
            </div>
          </div>
        );
      })}
      <div>
        {data != 15 ? <Button onClick={clickMoreData}>더보기</Button> : <></>}
      </div>
    </>
  );
};
export default Third;
