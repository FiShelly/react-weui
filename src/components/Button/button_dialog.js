import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';

export default class ButtonDialog extends React.Component {
    static propTypes = {
        primary: PropTypes.bool,
        onClose: PropTypes.func
    };

    static defaultProps = {
        primary: false
    };

    handleClick () {
        const {onClick, onClose} = this.props;
        onClick && onClick();
        onClose && onClose();
    }

    render () {
        const {primary, className, children, onClick, onClose, ...others} = this.props;
        const cls = classNames({
            'weui-dialog__btn': true,
            [`weui-dialog__btn_${primary ? 'primary' : 'default'}`]: true,
            [className]: className
        });

        return (
            <a className={cls} onClick={this.handleClick.bind(this)} {...others}>
                {children}
            </a>
        );
    }
}