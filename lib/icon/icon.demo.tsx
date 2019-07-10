import React from 'react';
import Demo from "../../demo";
import IconExample1 from "./icon.example1";
import IconExample2 from "./icon.example2";

//1. 只有require支持自定义加载方式
//2. !!是开启自定义加载方式的标志
// const x = require('!!raw-loader!./icon.example.tsx');

export default () => {
  return (
    <>
      <Demo code={require('!!raw-loader!./icon.example1.tsx').default}>
        <IconExample1/>
      </Demo>
      <Demo code={require('!!raw-loader!./icon.example2.tsx').default}>
        <IconExample2/>
      </Demo>
    </>
  )
};
