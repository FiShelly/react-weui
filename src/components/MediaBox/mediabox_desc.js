import React from 'react';
import classNames from '../../util/classnames';

const MediaBoxDesc = (props) => {
    const {className, children, ...others} = props;
    const cls = classNames({
        'weui-media-box__desc': true,
        [className]: className
    });

    return (
        <p className={cls} {...others}>
            {children}
        </p>
    );
};

export default MediaBoxDesc;