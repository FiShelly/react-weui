import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';

const NavbarItem = (props) => {
    const {className, active, label, children, ...others} = props;
    const cls = classNames({
        'weui-navbar__item': true,
        'weui-bar__item_on': active,
        [className]: className
    });

    return (
        <div className={cls} {...others}>
            {label ? label : children}
        </div>
    );
};

NavbarItem.propTypes = {
    label: PropTypes.string,
    active: PropTypes.bool
};

NavbarItem.defaultProps = {
    label: '',
    active: false
};

export default NavbarItem ;