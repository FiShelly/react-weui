import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';

export default class ButtonPreview extends React.Component {
    static propTypes = {
        primary: PropTypes.bool
    };

    static defaultProps = {
        primary: false,
    };

    render () {
        const {primary, className, children, ...others} = this.props;
        const cls = classNames({
            'weui-form-preview__btn': true,
            [`weui-form-preview__btn_${primary ? 'primary' : 'default'}`]: true,
            [className]: className
        });

        return (
            <a className={cls} {...others}>
                {children}
            </a>
        );
    }
}