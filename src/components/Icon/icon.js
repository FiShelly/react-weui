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
        size: PropTypes.string
    };

    static defaultProps = {
        value: 'success',
        size: 'small'
    };

    render() {
        const {value, size, className, primary, ...others} = this.props;

        const cls = classNames({
            ['weui-icon-' + value]: value !== 'loading',
            'weui-icon_msg': size === 'large',
            'weui-loading': value === 'loading',
            [className]: className
        });

        return (
            <i {...others} className={cls}/>
        );
    }
}

export default Icon;
