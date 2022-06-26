import React, { useRef } from 'react';

// ref안의 값이 바뀌어도 컴포넌트가 렌더링되지 않음
// 렌더링과 관련되지 않은 값을 관리할 때만 이러한 방식의 코드를 작성해야 함
const RefSample = () => {
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  };
  const printId = () => {
    console.log(id.current);
  };

  return <div>refSample</div>;
};

export default RefSample;
