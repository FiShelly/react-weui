import React from 'react';
import classNames from '../../util/classnames';

const Cells = (props) => {
    const {className,  children, ...others} = props;

    const cls = classNames({
        'weui-cells': true,
        [className]: className
    });

    return (
        <div className={cls} {...others}>
            {children}
        </div>
    );
};

export default Cells;
