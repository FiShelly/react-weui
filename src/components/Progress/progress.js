import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';
import { Icon } from '../Icon';

const onClick = cb => {
    return (e) => {
        cb && cb(e);
    };
};

const Progress = (props) => {
    const {className, children, showCancel, value, onCancel, ...others} = props;
    const cls = classNames({
        'weui-progress': true,
        [className]: className
    });

    const progressStyle = {
        width: `${value}%`
    };

    return (
        <div className={cls} {...others}>
            <div className="weui-progress__bar">
                <div className="weui-progress__inner-bar js_progress"
                     style={progressStyle}></div>
            </div>
            {
                showCancel ? (
                    <a href="javascript:;"
                       className="weui-progress__opr"
                       onClick={onClick(onCancel)}
                    >
                        <Icon value="cancel"></Icon>
                    </a>) : false
            }
        </div>
    );
};

Progress.propTypes = {
    value: PropTypes.number,
    showCancel: PropTypes.bool,
    onCancel: PropTypes.func
};

Progress.defaultProps = {
    value: 0,
    showCancel: true
};

export default Progress;