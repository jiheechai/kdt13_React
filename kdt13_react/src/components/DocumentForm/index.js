import { Input, Button } from 'antd';

const DocumentForm = (props) => {
  const data = props.data;
  const setData = props.setData;

  const submitForm = () => {
    const formData = {
      name: document.querySelector('#name').value,
      nickName: document.querySelector('#nickName').value,
      email: document.querySelector('#email').value,
      pass: document.querySelector('#pass').value,
      address: document.querySelector('#address').value,
      detailAddress: document.querySelector('#detailAddress').value,
      phone: document.querySelector('#detailAddress').value,
    };
    setData(formData);
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <div>
          이름:
          <Input id="name" />
        </div>
        <div>
          닉네임:
          <Input id="nickName" />
        </div>
        <div>
          이메일:
          <Input id="email" />
        </div>
        <div>
          비밀번호:
          <Input id="pass" />
        </div>
        <div>
          주소:
          <Input id="address" />
        </div>
        <div>
          상세주소:
          <Input id="detailAddress" />
        </div>
        <div>
          휴대폰번호:
          <Input id="phone" />
        </div>
        <Button htmlType="submit">실행!</Button>
      </form>
    </>
  );
};
export default DocumentForm;
