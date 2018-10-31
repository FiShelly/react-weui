import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';

export default class ButtonArea extends React.Component {
    static propTypes = {
        direction: PropTypes.string
    };

    static defaultProps = {
        direction: 'vertical',
    };

    render () {
        const {direction, className, children, ...others} = this.props;
        const cls = classNames({
            'weui-btn-area': true,
            'weui-btn-area_inline': direction === 'horizontal',
            [className]: className
        });

        return (
            <div className={cls} {...others}>
                {children}
            </div>
        );
    }
}