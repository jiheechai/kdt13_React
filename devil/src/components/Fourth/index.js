import { Input, Button } from 'antd';
const Fourth = (props) => {
  const {
    editName,
    editId,
    editTitle,
    editDate,
    setEditId,
    setEditName,
    setEditTitle,
    setEditDate,
    setName,
    setTitle,
    setDate,
    setDataAll,
    name,
    title,
    date,
    dataAll,
  } = props;
  const clickSubmit = () => {
    const id = Date.now() + Math.random().toString(36).substr(2, 9);
    const newData = { id, name, title, date };
    setDataAll([...dataAll, newData]);
    console.log(newData);
  };

  // 수정 버튼 클릭 시 호출되는 함수
  const handleEdit = (item) => {
    setEditId(item.id);
    setEditName(item.name);
    setEditTitle(item.title);
    setEditDate(item.date);
  };
  // 저장 버튼 클릭 시 호출되는 함수
  const handleSave = (id) => {
    const updatedData = {
      id,
      name: editName,
      title: editTitle,
      date: editDate,
    };
    setDataAll(dataAll.map((item) => (item.id === id ? updatedData : item)));
    setEditId(null);
  };
  // 삭제 버튼 클릭 시 호출되는 함수
  const handleDelete = (id) => {
    setDataAll(dataAll.filter((item) => item.id !== id));
  };

  return (
    <>
      <div>
        작성자:
        <Input onChange={(e) => setName(e.target.value)} />
        제목:
        <Input onChange={(e) => setTitle(e.target.value)} />
        날짜:
        <Input onChange={(e) => setDate(e.target.value)} />
        <Button onClick={clickSubmit}>작성</Button>
      </div>
      <div>
        {dataAll?.map((x) => (
          <div key={x.id}>
            {editId === x.id ? (
              <>
                <div>
                  작성자:
                  <Input
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                  제목:
                  <Input
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  날짜:
                  <Input
                    value={editDate}
                    onChange={(e) => setEditDate(e.target.value)}
                  />
                </div>
                <div>
                  <Button onClick={() => handleSave(x.id)}>저장</Button>
                </div>
              </>
            ) : (
              <>
                <div>
                  작성자:{x.name} 제목:{x.title} 날짜:{x.date}
                </div>
                <div>
                  <Button onClick={() => handleEdit(x)}>수정</Button>
                  <Button onClick={() => handleDelete(x.id)}>삭제</Button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
//   return (
//     <>
//       <div>
//         작성자:
//         <Input onChange={(e) => setName(e.target.value)} />
//         제목:
//         <Input onChange={(e) => setTitle(e.target.value)} />
//         날짜:
//         <Input onChange={(e) => setDate(e.target.value)} />{' '}
//         <Button onClick={clickSubmit}>작성</Button>
//       </div>
//       <div>
//         {dataAll?.map((x, i) => {
//           {
//             /* flag == false이면 수정, 삭제 버튼 /  flag == true면 저장 버튼  */
//           }
//           x.flag == false ? (
//             <>
//               <div>
//                 작성자:{x.name} 제목:{x.title} 날짜:{x.date}
//               </div>
//               <div>
//                 <Button>수정</Button>
//                 <Button>삭제</Button>
//               </div>
//             </>
//           ) : (
//             <>
//               <div>
//                 작성자:<Input defaultValue={x.name}/> 제목:<Input defaultValue={x.title}/> 날짜:<Input defaultValue={x.date}/>
//               </div>
//               <div>
//                 <Button>저장</Button>
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// };
export default Fourth;
