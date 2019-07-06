/*
以前的模块不能使用默认导出
So使用了jest的话，默认必须import * as React
除非你将tsconfig 中 "esModuleInterop": true
但这可能导致另外的问题
*/
// @ts-ignore
import renderer from 'react-test-renderer'
// @ts-ignore
import React from 'react';
import Button from '../button';

describe('button tests', () => {
    it('是个 div ', () => {
        const json = renderer.create(<Button/>).toJSON();
        expect(json).toMatchSnapshot();
    });
});
