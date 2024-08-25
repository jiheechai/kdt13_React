import { useEffect } from 'react';
import SearchAll from '../../components/SearchAll';
import { Search1ComponentStyled } from './Search1Styled';
const Search1 = (props) => {
  const {
    searchData,
    setSearchData,
    searchIncludeData,
    setSearchIncludeData,
    input,
    allData,
    data1,
    data2,
    data3,
  } = props;

  {
    /* 검색 결과를 filter로 찾는다. */
  }
  useEffect(() => {
    if (input !== '') {
      const findData = allData.filter((value) => value.name == input);
      const includeData = [data1, data2, data3].find((dataset) =>
        dataset.some((item) => item.name === input)
      );
      // console.log(findData);
      // console.log(includeData);

      // const dataAll = [data1, data2, data3].setResult1(findData);
      setSearchData(findData);
      setSearchIncludeData(includeData || []);
    } else {
      setSearchData([]);
      setSearchIncludeData([]);
      // setClickData({});
    }
  }, [input]);

  return (
    <div>
      {searchData ? (
        searchData.map((x, i) => {
          return (
            <div key={i + 'result1'}>
              <Search1ComponentStyled>
                <div className="search1Container">
                  <div className="images">
                    <img src={x.src} />
                    <div className="namebox">{x.name}</div>
                    <div className="pricebox">{x.price}</div>
                    <div>
                      {x.hash ? (
                        <div className="hashbox">
                          {x.hash.map((a, b) => {
                            return (
                              <div className="hashtags" key={b + 'hash'}>
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
              <SearchAll data={searchIncludeData} />
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};
export default Search1;
