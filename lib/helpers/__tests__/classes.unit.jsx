import classes from '../classes';

describe('button', () => {
    it('接受一个 className', () => {
        const result = classes('a');
        expect(result).toEqual('a');
    });

    it('接受2个 className', () => {
        const result = classes('a', 'b');
        expect(result).toEqual('a b');
    });

    it('接受undefined', () => {
        const result = classes('a', undefined);
        expect(result).toEqual('a');
    });

    it('接受各种奇怪值', () => {
        const result = classes('a', '中文', undefined, '');
        expect(result).toEqual('a 中文');
    });

    it('什么都不传', () => {
        const result = classes();
        expect(result).toEqual('');
    });
});
