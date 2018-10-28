import React from 'react';
import classNames from '../../util/classnames';
import PropTypes from 'prop-types';

const positionStyle = {
    'default': {},
    'header': {
        position: 'absolute',
        top: '-.4em',
        right: '-.4em'
    },
    'body': {
        marginLeft: '5px'
    },
    'footer': {
        marginLeft: '5px',
        marginRight: '5px'
    }
};

export default class Badge extends React.Component {
    static propTypes = {
        // header body footer
        position: PropTypes.string,
        dot: PropTypes.bool
    };

    static defaultProps = {
        position: 'footer',
        dot: true
    };

    render () {
        const {className, children, position, dot, ...others} = this.props;
        const cls = classNames({
            'weui-badge': true,
            'weui-badge_dot': dot,
            [className]: className
        });
        return (
            <span className={cls} style={positionStyle[position]} {...others}>
                {children}
            </span>
        );
    }
};
