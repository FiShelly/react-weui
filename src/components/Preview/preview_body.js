import React from 'react';
import classNames from '../../util/classnames';

const PreviewBody = (props) => {
    const {className, children, ...others} = props;
    const cls = classNames({
        'weui-form-preview__bd': true,
        [className]: className
    });

    return (
        <div className={cls} {...others}>
            {children}
        </div>
    );
};



export { PreviewBody };