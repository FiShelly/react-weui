import React from 'react';
import classNames from '../../util/classnames';

const GridIcon = (props) => {
    const {className, children, ...others} = props;
    const cls = classNames({
        'weui-grid__icon': true,
        [className]: className
    });

    return (
        <div className={cls} {...others}>{children}</div>
    );
};

export { GridIcon };