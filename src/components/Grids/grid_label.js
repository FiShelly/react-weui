import React from 'react';
import classNames from '../../util/classnames';

const GridLabel = (props) => {
    const {className, children, ...others} = props;
    const cls = classNames({
        'weui-grid__label': true,
        [className]: className
    });

    return (
        <p className={cls} {...others}>{children}</p>
    );
};

export default GridLabel;