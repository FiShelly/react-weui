import React from 'react';
import classNames from '../../util/classnames';

const CellBody = (props) => {
    const { className, children, ...others } = props;
    const cls = classNames({
        'weui-cell__bd': true,
        [className]: className
    });

    return (
        <div className={cls} { ...others }>{ children }</div>
    );
};

export default CellBody;