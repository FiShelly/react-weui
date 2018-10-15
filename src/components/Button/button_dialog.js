import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';

export default class ButtonDialog extends React.Component {
    static propTypes = {
        primary: PropTypes.bool
    };

    static defaultProps = {
        primary: false,
    };

    render () {
        const {primary, className, children, ...others} = this.props;
        const cls = classNames({
            'weui-dialog__btn': true,
            [`weui-dialog__btn_${primary ? 'primary' : 'default'}`]: true,
            [className]: className
        });

        return (
            <a className={cls} {...others}>
                {children}
            </a>
        );
    }
}