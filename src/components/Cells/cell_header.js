import React from 'react';
import classNames from '../../util/classnames';

const CellHeader = (props) => {
    const { className, children, ...others } = props;
    const cls = classNames({
        'weui-cell__hd': true,
        [className]: className
    });

    return (
        <div className={cls} { ...others }>{ children }</div>
    );
};

export default CellHeader;