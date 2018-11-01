import React from 'react';
import classNames from '../../util/classnames';

const PreviewHeader = (props) => {
    const {className, children, ...others} = props;
    const cls = classNames({
        'weui-form-preview__hd': true,
        [className]: className
    });

    return (
        <div className={cls} {...others}>
            {children}
        </div>
    );
};



export default PreviewHeader;