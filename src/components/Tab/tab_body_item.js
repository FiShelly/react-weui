import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';

const TabBodyItem = (props) => {
    const {children, className, active, ...others} = props;
    const cls = classNames({
        'weui-tab__bd-item': true
    }, className);

    const style = {
        display: active ? 'block' : 'none'
    };

    return (
        <div className={cls} style={style} {...others}>
            {children}
        </div>
    );
};

TabBodyItem.propTypes = {
    active: PropTypes.bool
};

TabBodyItem.defaultProps = {
    active: false
};

export default TabBodyItem;

