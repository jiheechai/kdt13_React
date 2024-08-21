import Mainitem from '../Mainitem';

const Mainpage = (props) => {
  const data = props.data;

  return (
    <div className="items">
      {data.map((x, i) => {
        return (
          <Mainitem x={x} i={i} />
          //   <div className="images" key={i + 'data'}>
          //     <img src={x.src} />
          //     <div>{x.name}</div>
          //     <div>{x.price}</div>
          //     <div>
          //       {x.hash ? (
          //         <div>
          //           {x.hash.map((a, b) => {
          //             return <div key={b}>{a.tag}</div>;
          //           })}
          //         </div>
          //       ) : (
          //         <></>
          //       )}
          //     </div>
          //   </div>
        );
      })}
    </div>
  );
};

export default Mainpage;
