/*
npm test -- -u 命令
会更新快照
*/
// @ts-ignore
import * as renderer from 'react-test-renderer'
// @ts-ignore
import * as React from 'react';
import Icon from '../icon';
import {mount} from 'enzyme';

describe('icon', () => {
    it('render successfully', () => {
        const json = renderer.create(<Icon name="alipay"/>).toJSON();
        expect(json).toMatchSnapshot();
    });

    //html中事件都是同步的
    it('onClick', () => {
        /*let n = 1;
        const fn = () => {
            n = 2;
        };
        const component = mount(<Icon name="alipay" onClick={fn}/>)
        component.find('svg').simulate('click');
        expect(n).toEqual(2);*/

        const fn = jest.fn();
        const component = mount(<Icon name="alipay" onClick={fn}/>);
        component.find('svg').simulate('click');
        expect(fn).toBeCalled();
    });
});
