import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';
import TabbarIcon from './tabbar_icon';
import TabbarLabel from './tabbar_label';

const TabbarItem = (props) => {
    const {className, active, label, icon, iconOther, children, ...others} = props;
    const cls = classNames({
        'weui-tabbar__item': true,
        'weui-bar__item_on': active,
        [className]: className
    });
    if (label || iconOther) {
        return (
            <div className={cls} {...others}>
                <TabbarIcon icon={icon}>{iconOther}</TabbarIcon>
                {label ? <TabbarLabel>{label}</TabbarLabel> : false}
            </div>
        );
    } else {
        return (
            <div className={cls} {...others}>
                {label ? label : children}
            </div>
        );
    }

};

TabbarItem.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    iconOther: PropTypes.any,
    active: PropTypes.bool
};

TabbarItem.defaultProps = {
    label: '',
    icon: '',
    active: false
};

export default TabbarItem;