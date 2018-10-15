import React from 'react';
import classNames from '../../util/classnames';


const CellFooter = (props) => {
    const { className, children, ...others } = props;
    const cls = classNames({
        'weui-cell__ft': true,
        [className]: className
    });

    return (
        <div className={cls} { ...others }>{ children }</div>
    );
};

export default CellFooter;