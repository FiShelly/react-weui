import React from 'react';
import PropTypes from 'prop-types';

/**
 * WeUI FlexItem
 *
 */
const FlexItem = (props) => {
    const {children, component, ...others} = props;
    return (
        <component className="weui-flex__item" {...others}>
            {children}
        </component>
    );
};

FlexItem.propTypes = {
    component: PropTypes.node
};

FlexItem.defaultProps = {
    component: 'div'
};

export default FlexItem;