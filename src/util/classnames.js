function classNames (...args) {
    const classes = [];

    args.forEach(val => {
        if (!val) {
            return;
        }
        const argType = typeof val;
        if (argType === 'string' || argType === 'number') {
            classes.push(val);
        } else if (Array.isArray(val)) {
            classes.push(classNames(val));
        } else if (argType === 'object') {
            Object.keys(val).forEach(k => {
                if (val[k]) {
                    classes.push(k);
                }
            })
        }
    });

    return classes.join(' ');
}

export default classNames;