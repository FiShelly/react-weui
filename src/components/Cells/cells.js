import React from 'react';
import classNames from '../../util/classnames';
import PropTypes from 'prop-types';

const Cells = (props) => {
    const {className, role, children, ...others} = props;
    const cls = classNames({
        'weui-cells': true,
        'weui-cells_checkbox': role.includes('checkbox'),
        'weui-cells_radio': role.includes('radio'),
        [className]: className
    });

    return (
        <div className={cls} {...others}>
            {children}
        </div>
    );
};

Cells.propTypes = {
    role: PropTypes.string,
};

Cells.defaultProps = {
    role: '',
};

export default Cells;
