import React from 'react';
import classNames from '../../util/classnames';

const TabBody = (props) => {
    const {className, children, ...others} = props;
    const cls = classNames({
        'weui-tab__panel': true,
        [className]: className
    });

    return (
        <div className={cls} {...others}>
            {children}
        </div>
    );
};

export default TabBody;