import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';

/**
 * WeUI Icons
 *
 */
class Icon extends React.Component {
    static propTypes = {
        value: PropTypes.string,
        size: PropTypes.string,
        circle: PropTypes.bool
    };

    static defaultProps = {
        value: 'success',
        circle: true,
        size: 'small'
    };

    render () {
        const {value, size, className, circle, primary, ...others} = this.props;

        const cls = classNames({
            [`weui-icon-${value}${circle ? '' : '-no-circle'}`]: value !== 'loading',
            'weui-icon_msg': size === 'large' && circle,
            'weui-loading': value === 'loading',
            [className]: className
        });

        return (
            <i {...others} className={cls}/>
        );
    }
}

export default Icon;
