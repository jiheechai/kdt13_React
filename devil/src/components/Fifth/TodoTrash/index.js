import TrashItem from '../TrashItem';
const TodoTrash = (props) => {
  const { trash } = props;
  //   console.log(trash);

  return (
    <div className="listBox">
      <div className="title">휴지통</div>
      <div className="list">
        {trash?.map((x, i) => {
          return <TrashItem data={x} key={i} />;
        })}
      </div>
    </div>
  );
};
export default TodoTrash;
