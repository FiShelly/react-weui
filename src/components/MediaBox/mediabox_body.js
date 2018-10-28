import React from 'react';
import classNames from '../../util/classnames';

const MediaBoxBody = (props) => {
    const {className, children, ...others} = props;
    const cls = classNames({
        'weui-media-box__bd': true,
        [className]: className
    });

    return (
        <div className={cls} {...others}>
            {children}
        </div>
    );
};

export { MediaBoxBody };