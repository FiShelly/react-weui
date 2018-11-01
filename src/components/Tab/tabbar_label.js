import React from 'react';
import classNames from '../../util/classnames';

const TabbarLabel = (props) => {
    const {className, children, ...others} = props;
    const cls = classNames({
        'weui-tabbar__label': true,
        [className]: className
    });

    return (
        <p className={cls} {...others}>
            {children}
        </p>
    );
};

export default TabbarLabel;