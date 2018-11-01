import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';
import { Icon } from '../Icon';

const LoadMore = (props) => {
    const {className, children, loading, showDot, showLine, ...others} = props;
    const cls = classNames({
        'weui-loadmore': true,
        'weui-loadmore_line': showDot || showLine,
        'weui-loadmore_dot': showDot,
        [className]: className
    });

    return (
        <div className={cls} {...others}>
            {loading ? <Icon value='loading'/> : false}
            <span className='weui-loadmore__tips'>
                {children}
            </span>
        </div>
    );
};

LoadMore.propTypes = {
    loading: PropTypes.bool,
    showLine: PropTypes.bool,
    showDot: PropTypes.bool
};

LoadMore.defaultProps = {
    loading: false,
    showLine: false,
    showDot: false
};

export default LoadMore;