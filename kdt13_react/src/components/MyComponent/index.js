import { useEffect, useState } from 'react';

const MyComponent = (props) => {
  const { number } = props;
  const [text, setText] = useState('');

  useEffect(() => {
    // Mount 시점에 실행
    console.log('컴포넌트 실행 | O mount!');

    //Unmount 시점에 실행
    return () => {
      console.log('컴포넌트 실행 | X unmount');
    };
  }, []);

  //Mount & Update 시점에 실행
  useEffect(() => {
    console.log('컴포넌트 실행 | update!');
  });

  //text가 바뀔때만 실행
  useEffect(() => {
    console.log('컴포넌트 실행 | text update!');
  }, [text]);

  return (
    <>
      <p>MyComponent {number}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};
export default MyComponent;
