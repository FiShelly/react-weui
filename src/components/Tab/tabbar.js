import React from 'react';
import classNames from '../../util/classnames';

const Tabbar = (props) => {
    const {className, children, ...others} = props;
    const cls = classNames({
        'weui-tabbar': true,
        [className]: className
    });

    return (
        <div className={cls} {...others}>
            {children}
        </div>
    );
};

export default Tabbar;