// import { Select } from 'antd';
import { HeaderStyledComponent } from './HeaderStyled';
const Header = (props) => {
  // const select = props.select;
  // const selectData = props.selectData;
  // const setSelect = props.setSelect;

  return (
    <>
      <HeaderStyledComponent>
        {/* <Select
          className="wrapBox"
          defaultValue={select}
          style={{ width: 200 }}
          options={selectData}
          onChange={(value) => {
            setSelect(value);
          }}
        /> */}
        <div className="wrapBox"> 헤더입니다.</div>
      </HeaderStyledComponent>

      {/* <div className="items">
        {select === 'first' ? (
          data1.map((x, i) => {
            return (
              <div className="images" key={i + 'data1'}>
                <img src={x.src} />
                <div>{x.name}</div>
                <div>{x.price}</div>
                <div>
                  {x.hash ? (
                    <div>
                      {x.hash.map((a, b) => {
                        return <div>{a.tag}</div>;
                      })}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <></>
        )}
        {select === 'second' ? (
          data2.map((x, i) => {
            return (
              <div className="images" key={i + 'data2'}>
                <img src={x.src} />
                <div>{x.name}</div>
                <div>{x.price}</div>
                <div>
                  {x.hash ? (
                    <div>
                      {x.hash.map((a, b) => {
                        return <div>{a.tag}</div>;
                      })}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <></>
        )}
        {select === 'third' ? (
          data3.map((x, i) => {
            return (
              <div className="images" key={i + 'data3'}>
                <img src={x.src} />
                <div>{x.name}</div>
                <div>{x.price}</div>
                <div>
                  {x.hash ? (
                    <div>
                      {x.hash.map((a, b) => {
                        return <div>{a.tag}</div>;
                      })}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div> */}
    </>
  );
};

export default Header;
