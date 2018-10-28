import React from 'react';
import classNames from '../../util/classnames';

const PreviewFooter = (props) => {
    const {className, children, ...others} = props;
    const cls = classNames({
        'weui-form-preview__ft': true,
        [className]: className
    });

    return (
        <div className={cls} {...others}>
            {children}
        </div>
    );
};



export { PreviewFooter };