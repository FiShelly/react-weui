import React from 'react';
import classNames from '../../util/classnames';

const PanelHeader = (props) => {
    const {className, children, ...others} = props;
    const cls = classNames({
        'weui-panel__hd': true,
        [className]: className
    });

    return (
        <div className={cls} {...others}>
            {children}
        </div>
    );
};

export { PanelHeader };