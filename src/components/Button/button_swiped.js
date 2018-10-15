import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';

export default class ButtonSwiped extends React.Component {
    static propTypes = {
        theme: PropTypes.string
    };

    static defaultProps = {
        theme: 'warn',
    };

    render () {
        const {warn, className, children, ...others} = this.props;
        const cls = classNames({
            'weui-swiped-btn': true,
            [`weui-swiped-btn_${warn}`]: true,
            [className]: className
        });

        return (
            <a className={cls} {...others}>
                {children}
            </a>
        );
    }
}