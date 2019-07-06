function classes(...names: (string | undefined)[]) {
    return names.filter(v => v).join(' '); // 1和undefined join 为 '1 '
}

export default classes;
