import React from 'react';
import PropTypes from 'prop-types';

const TabbarIcon = (props) => {
    const {className, children, icon, ...others} = props;

    const style = {
        display: 'inline-block',
        position: 'relative'
    };

    return (
        <span style={style} className={className} {...others}>
            <img className={'weui-tabbar__icon'} alt='' src={icon}/>
            {children}
        </span>
    );
};

TabbarIcon.propTypes = {
    icon: PropTypes.string
};

TabbarIcon.defaultProps = {
    icon: ''
};

export default TabbarIcon;