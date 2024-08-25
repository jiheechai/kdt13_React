import { SearchAllStyled } from './SearchAllStyled';
import { Search1ComponentStyled } from '../Search1/Search1Styled';
import { useState } from 'react';
import ClickItem from '../../components/ClickItem';
const SearchAll = (props) => {
  const data = props.data;
  const [click, setClick] = useState('');

  const clickoneItem = (x) => {
    setClick(x);
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <SearchAllStyled>
        <div className="items">
          {data ? (
            data.map((x, i) => {
              //   console.log(x);
              return (
                <div key={i}>
                  <ClickItem x={x} clickoneItem={clickoneItem} i={i} />
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </SearchAllStyled>

      <div>
        {click ? (
          <Search1ComponentStyled>
            <div className="search1Container">
              <div className="images">
                <img src={click.src} />
                <div className="namebox">{click.name}</div>
                <div className="pricebox">{click.price}</div>
                <div>
                  {click.hash ? (
                    <div className="hashbox">
                      {click.hash.map((a, b) => {
                        return (
                          <div key={b} className="hashtags">
                            #{a.tag}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </Search1ComponentStyled>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
export default SearchAll;
