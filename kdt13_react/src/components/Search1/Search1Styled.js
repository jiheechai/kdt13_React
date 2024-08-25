import styled from 'styled-components';

export const Search1ComponentStyled = styled.div`
  .search1Container {
    text-align: center;
    .images {
      margin-top: 10px;
      img {
        border-radius: 2%;
      }
      .namebox {
        font-size: 1.5em;
        font-weight: bold;
      }
      .pricebox {
        font-size: 1.5em;
      }
      .hashbox {
        display: flex;
        justify-content: center;
        margin: 5px;
        .hashtags {
          margin: 0 5px;
          font-size: 1em;
        }
      }
    }
  }
`;
