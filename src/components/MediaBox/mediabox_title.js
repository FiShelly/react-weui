import React from 'react';
import classNames from '../../util/classnames';

const MediaBoxDesc = (props) => {
    const {className, children, ...others} = props;
    const cls = classNames({
        'weui-media-box__title': true,
        [className]: className
    });

    return (
        <h4 className={cls} {...others}>
            {children}
        </h4>
    );
};

export { MediaBoxDesc };