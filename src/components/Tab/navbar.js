import React from 'react';
import classNames from '../../util/classnames';

const Navbar = (props) => {
    const {className, children, ...others} = props;
    const cls = classNames({
        'weui-navbar': true,
        [className]: className
    });

    return (
        <div className={cls} {...others}>
            {children}
        </div>
    );
};

export default Navbar;