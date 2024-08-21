const Mainitem = (props) => {
  const i = props.i;
  const x = props.x;
  return (
    <div className="images" key={i + 'data'}>
      <img src={x.src} />
      <div>{x.name}</div>
      <div>{x.price}</div>
      <div>
        {x.hash ? (
          <div>
            {x.hash.map((a, b) => {
              return <div key={b}>{a.tag}</div>;
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default Mainitem;
