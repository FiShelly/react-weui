import React from 'react';
import classNames from '../../util/classnames';


const CellTitle = (props) => {
    const { className, children, ...others } = props;
    const cls = classNames({
        'weui-cells__tips': true,
        [className]: className
    });

    return (
        <div className={cls} { ...others }>{ children }</div>
    );
};

export default CellTitle;