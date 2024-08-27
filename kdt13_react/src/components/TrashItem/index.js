import { TrashItemComponentStyled } from './TrashItemComponentStyled';
const TrashItem = (props) => {
  const { data } = props;
  //   console.log(data.text);

  return (
    <TrashItemComponentStyled>
      <div className="itemBox">
        <div className="text">{data.text}</div>
      </div>
    </TrashItemComponentStyled>
  );
};
export default TrashItem;
