import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';

const Panel = (props) => {
    const {className, children, access, ...others} = props;
    const cls = classNames({
        'weui-panel': true,
        'weui-panel_access': access,
        [className]: className
    });

    return (
        <div className={cls} {...others}>
            {children}
        </div>
    );
};

Panel.propTypes = {
    access: PropTypes.bool
};

Panel.defaultProps = {
    access: false
};

export { Panel };