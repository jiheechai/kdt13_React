import styled from 'styled-components';
import { StyledComponentStyled } from './styled';
export const Hello = styled.div`
  color: red;
`;
export const Btn = styled.button`
  background-color: green;
`;

const StyledComponent = () => {
  return (
    <StyledComponentStyled>
      <div>
        <div>안녕하세요</div>
        <button>안녕!</button>
      </div>
    </StyledComponentStyled>
  );
};
export default StyledComponent;
