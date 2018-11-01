import React from 'react';
import classNames from '../../util/classnames';
import PropTypes from 'prop-types';

const Mask = (props) => {
    const {transparent, className, ...others} = props;
    const clz = classNames({
        'weui-mask': !transparent,
        'weui-mask_transparent': transparent,
        [className]: className
    });

    return (
        <div className={clz} {...others}></div>
    );
};

Mask.propTypes = {
    transparent: PropTypes.bool
};

Mask.defaultProps = {
    transparent: false
};

export default Mask;
