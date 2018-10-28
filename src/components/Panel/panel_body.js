import React from 'react';
import classNames from '../../util/classnames';

const PanelBody = (props) => {
    const {className, children, ...others} = props;
    const cls = classNames({
        'weui-panel__bd': true,
        [className]: className
    });

    return (
        <div className={cls} {...others}>
            {children}
        </div>
    );
};

export { PanelBody };