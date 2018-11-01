import React from 'react';
import classNames from '../../util/classnames';

const Preview = (props) => {
    const {className, children, ...others} = props;
    const cls = classNames({
        'weui-form-preview': true,
        [className]: className
    });

    return (
        <div className={cls} {...others}>
            {children}
        </div>
    );
};

export default Preview;