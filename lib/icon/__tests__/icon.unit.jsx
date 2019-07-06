// @ts-ignore
import * as renderer from 'react-test-renderer'
// @ts-ignore
import * as React from 'react';
import Icon from '../icon';

describe('icon', () => {
    it('xxx ', () => {
        const json = renderer.create(<Icon/>).toJSON();
        expect(json).toMatchSnapshot();
    });
});
