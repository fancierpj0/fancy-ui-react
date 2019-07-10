import React from 'react';
import Demo from "../../demo";
import IconExample from "./icon.example";

//1. 只有require支持自定义加载方式
//2. !!是开启自定义加载方式的标志
// const x = require('!!raw-loader!./icon.example.tsx');

export default () => {
  return (
    <Demo code={require('!!raw-loader!./icon.example.tsx').default}>
      <IconExample/>
    </Demo>
  )
};
